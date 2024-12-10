"use client";

import { useRouter } from "next/navigation";
import { BarChart, Calendar, Settings, LogOut, TrendingUp } from "lucide-react"; // Icônes

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { supabase } from "@/utils/supabase";

const menuItems = [
  { title: "Tableau de bord", href: "/dashboard", icon: BarChart },
  { title: "Recommandations", href: "/recommendations", icon: TrendingUp },
  { title: "Calendrier", href: "/calendar", icon: Calendar },
  { title: "Statistiques", href: "/statistics", icon: BarChart },
  { title: "Paramètres", href: "/settings", icon: Settings },
];

export function AppSidebar() {
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <Sidebar className="h-screen w-64 bg-white text-gray-700 shadow">
      {/* Logo */}
      <div className="p-6 text-center border-b border-gray-200">
        <div className="text-2xl font-bold text-indigo-600">LOGO</div>
      </div>

      {/* Menu de navigation */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <a
                      className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100"
                      href={item.href}
                    >
                      <item.icon className="w-5 h-5 text-gray-600" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Bouton de déconnexion */}
      <SidebarFooter className="p-6 border-t border-gray-200">
        <Button
          className="w-full flex items-center gap-3 text-gray-700 hover:bg-gray-100"
          variant="ghost"
          onClick={handleSignOut}
        >
          <LogOut className="w-5 h-5" />
          Déconnexion
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
