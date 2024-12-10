"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { supabase } from "@/utils/supabase";

export default function LinkedInCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleLinkedInCallback = async () => {
      // Récupère la session après le retour de LinkedIn
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        console.error(
          "Erreur lors de la récupération de la session :",
          error.message,
        );
        router.push("/login");

        return;
      }

      if (session) {
        console.log("Session récupérée :", session);

        // Récupère les informations de l'utilisateur connecté
        const { user } = session;

        try {
          // Insère l'utilisateur dans la table `users` s'il n'existe pas
          const { error: dbError } = await supabase.from("users").upsert({
            id: user.id,
            fullname: user.user_metadata.full_name || "Utilisateur",
            linkedin_connected: true, // L'utilisateur vient de connecter LinkedIn
            linkedin_email: user.email,
            linkedin_profile_url: null, // Tu peux ajouter l'URL du profil si elle est disponible
          });

          if (dbError) {
            console.error(
              "Erreur lors de l'ajout à la table 'users' :",
              dbError.message,
            );

            return;
          }

          console.log("Utilisateur ajouté ou mis à jour dans la table 'users'");
        } catch (dbError) {
          console.error(
            "Erreur inattendue lors de l'ajout à la table :",
            dbError,
          );
        }

        // Redirige vers le dashboard
        router.push("/dashboard");
      }
    };

    handleLinkedInCallback();
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Connexion en cours...</h1>
    </div>
  );
}
