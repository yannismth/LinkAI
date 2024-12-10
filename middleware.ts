import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;

    // Vérifie si le token est absent
    if (!token) {
        // Ne pas rediriger si on est déjà sur une page publique
        if (req.nextUrl.pathname === "/login") {
            return NextResponse.next();
        }

        // Redirige les autres vers /login
        return NextResponse.redirect(new URL("/login", req.url));
    }

    // Si le token est présent, autorise l'accès
    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"], // Protéger uniquement les routes sous /dashboard
};
