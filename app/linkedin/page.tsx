"use client";

import { useEffect } from "react";

import { supabase } from "@/utils/supabase";

export default function LinkedInPage() {
  useEffect(() => {
    const signInWithLinkedIn = async () => {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "linkedin_oidc",
        options: {
          redirectTo: `${window.location.origin}/linkedin/callback`, // Redirection après authentification
        },
      });

      if (error) {
        console.error("Error connecting to LinkedIn:", error.message);
      }
    };

    signInWithLinkedIn();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Connexion à LinkedIn en cours...</h1>
    </div>
  );
}
