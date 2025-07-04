import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-700 to-pink-400">
      <Card className="w-full max-w-md p-6 shadow-2xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center font-bold text-slate-800">
            Entrar na sua conta
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="seu@email.com" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" placeholder="••••••••" required />
            </div>

            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Ainda não tem conta? <a href="#" className="underline">Crie uma</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
