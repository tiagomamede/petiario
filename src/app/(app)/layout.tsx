import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Home, Calendar, Stethoscope, Store, Settings, Bell, FileText } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: LayoutProps) {
  const user = {
    name: "Tiago Mamede",
    role: "Tutor", // Pode ser Tutor, Veterinario, Clinica
    avataraUrl: "https://github.com/shadcn.png",
  };

  const navItems = () => {
    if (user.role === "Tutor") {
      return (
        <>
        <Link href="/pets">
          <Button variant="ghost" className="w-full justify-start">
            <Home className="mr-2 w-4 h-4" /> Área Pet
          </Button>
        </Link>
          <Button variant="ghost" className="w-full justify-start">
            <Calendar className="mr-2 w-4 h-4" /> Agenda
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Stethoscope className="mr-2 w-4 h-4" /> Clínicas
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Store className="mr-2 w-4 h-4" /> Petshops
          </Button>
        </>
      );
    }
    if (user.role === "Veterinario") {
      return (
        <>
          <Button variant="ghost" className="w-full justify-start">
            <Calendar className="mr-2 w-4 h-4" /> Agenda
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <FileText className="mr-2 w-4 h-4" /> Prontuários
          </Button>
        </>
      );
    }
    if (user.role === "Clinica") {
      return (
        <>
          <Button variant="ghost" className="w-full justify-start">
            <Calendar className="mr-2 w-4 h-4" /> Agenda
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Stethoscope className="mr-2 w-4 h-4" /> Veterinários
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Home className="mr-2 w-4 h-4" /> Pets Atendidos
          </Button>
        </>
      );
    }
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-white border-r flex flex-col p-4">
        <div className="flex items-center mb-6">
          <div className="text-xl font-bold">📧 Logo Petiário</div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <Avatar>
            <AvatarImage src={user.avataraUrl} />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{user.name}</span>
            <span className="text-xs">{user.role}</span>
          </div>
          <div className="flex-1 text-right space-x-1">
            <Button size="icon" variant="ghost">
              <Settings className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="ghost">
              <span className="relative">
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>
            </Button>
          </div>
        </div>

        <nav className="space-y-1">{navItems()}</nav>
      </aside>

      <main className="flex-1 p-6 bg-slate-50">{children}</main>
    </div>
  );
}