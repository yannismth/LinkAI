import "@/styles/globals.css";
import clsx from "clsx";
import { GeistSans } from "geist/font/sans";
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
