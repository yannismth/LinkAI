"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/utils/supabase";

const Register = () => {
  const router = useRouter();

  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Redirection vers la page de connexion
  const handleNavigate = () => {
    router.push("/login");
  };

  // Gestion de la création de compte
  async function handleCreate() {
    setError(""); // Réinitialise les messages
    setSuccess("");

    // Vérification des mots de passe
    if (password !== confirmPassword) {
      setError("Passwords do not match");

      return;
    }

    setLoading(true); // Affiche le loader

    try {
      // Appel à Supabase pour l'inscription
      let { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (data?.session?.access_token) {
        document.cookie = `token=${data.session.access_token}; path=/; secure; HttpOnly;`;
      }

      if (error) {
        setError(error.message);
      } else {
        setSuccess(
          "Account created successfully! Check your email to confirm.",
        );
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        // Optionnel : Redirection après un délai
        setTimeout(() => {
          handleNavigate();
        }, 3000);
      }
      if (data.session) {
        document.cookie = `token=${data.session.access_token}; path=/;`;
      }

      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Cache le loader
    }
  }

  return (
    <>
      <section>
        <div className="mx-auto h-screen max-w-sm flex items-center justify-center flex-col">
          <div className="text-center">
            <h1 className="text-3xl font-black mb-2">LinkAI</h1>
            <p className="font-semibold mb-2">Create your account</p>
            <p className="text-muted-foreground mb-2">
              Join us today and start your journey
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <Label>Email address</Label>
              <Input
                disabled={loading}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label>Password</Label>
              <Input
                disabled={loading}
                placeholder="Create a password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <Label>Confirm password</Label>
              <Input
                disabled={loading}
                placeholder="Confirm your password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="flex gap-2 items-center">
              <Checkbox disabled={loading} />
              <Label>I agree to the Terms of service and Privacy policy</Label>
            </div>
            <div className="flex flex-col text-center gap-4">
              <Button disabled className="relative" onClick={handleCreate}>
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Under development..."
                )}
              </Button>
              {error && <p className="text-red-500">{error}</p>}
              {success && <p className="text-green-500">{success}</p>}
              <Button className="underline" onClick={handleNavigate}>
                Already have an account?
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
