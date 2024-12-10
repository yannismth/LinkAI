import "@/styles/globals.css";
import clsx from "clsx";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={clsx(`min-h-screen bg-background antialiased`)}>
          <div className="flex flex-col h-screen">
            <main className={`flex-grow ${GeistSans.className}`}>{children}</main>
          </div>
      </body>
    </html>
  );
}
