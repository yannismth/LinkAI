"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/utils/supabase";

const Login = () => {
    const router = useRouter();

    // States pour les champs d'email, de mot de passe, et les messages d'erreur
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleNavigate = () => {
        router.push("/register");
    };

    const handleLogin = async () => {
        setError(""); // Réinitialise les erreurs
        setLoading(true); // Active le loader

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                setError(error.message); // Affiche l'erreur de connexion
            } else if (data?.session?.access_token) {
                // Stocker le token dans un cookie
                document.cookie = `token=${data.session.access_token}; path=/; secure;`;
                console.log(document.cookie)
                // Rediriger vers le dashboard
                router.push("/linkedin");
            }
        } catch (err) {
            setError("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false); // Désactive le loader
        }
    };

    return (
        <>
            <section>
                <div className="mx-auto h-screen max-w-sm flex items-center justify-center flex-col">
                    <div className="text-center">
                        <h1 className="text-3xl font-black mb-2">LinkAI</h1>
                        <p className="font-semibold mb-2">Welcome back</p>
                        <p className="text-muted-foreground mb-4">
                            Please enter your details to sign in
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <div>
                            <Label>Email address</Label>
                            <Input
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
                            />
                        </div>
                        <div>
                            <Label>Password</Label>
                            <Input
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                disabled={loading}
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <div className="flex flex-col text-center gap-4">
                            <Button onClick={handleLogin} disabled>
                                {loading ? "Logging in..." : "Under development..."}
                            </Button>
                            <div className="flex justify-between flex-row-reverse">
                                <a
                                    href="#"
                                    className="underline"
                                    onClick={handleNavigate}
                                >
                                    Don't have an account?
                                </a>
                                <div className="flex gap-2 items-center">
                                    <Checkbox disabled={loading} />
                                    <Label>Keep me logged in</Label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
