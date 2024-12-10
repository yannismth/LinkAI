"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { supabase } from "@/utils/supabase";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkTokenValidity = async () => {
      try {
        // Récupération de l'utilisateur connecté
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (error || !session) {
          console.error(
            "Erreur lors de la récupération du token :",
            error?.message,
          );
          router.push("/login"); // Redirection si pas de token ou session invalide

          return;
        }

        console.log("Session récupérée :", session);

        // Simuler l'expiration du token après un certain délai (ex : 60 secondes)
        setTimeout(() => {
          console.log("Token expiré. Redirection...");
          supabase.auth.signOut(); // Déconnecte l'utilisateur
          router.push("/login");
        }, 60000); // 60 secondes (1 minute)
      } catch (err) {
        console.error("Erreur inattendue :", err);
        router.push("/login"); // Redirection en cas d'erreur
      } finally {
        setLoading(false);
      }
    };

    checkTokenValidity();
  }, [router]);

  if (loading) {
    return null; // Aucun contenu front, juste une page vide.
  }

  return null; // Page complètement vide, le backend gère tout.
}
