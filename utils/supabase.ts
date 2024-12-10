import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true, // Maintient la session entre les requêtes
    autoRefreshToken: true, // Renouvelle automatiquement le token si nécessaire
    detectSessionInUrl: true, // Nécessaire pour les flux OAuth
  },
});
