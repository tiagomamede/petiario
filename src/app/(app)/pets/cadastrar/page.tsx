'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";

export default function PetCreatePage() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="p-6">
      <Link href="/pets">
        <Button variant="outline" className="hover:cursor-pointer">
          Voltar
        </Button>
      </Link>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Cadastrar Pet</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome</Label>
              <Input id="nome" placeholder="Digite o nome do pet" required />
            </div>

            <div className="space-y-2">
              <Label>Espécie</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a espécie" />
                </SelectTrigger>
                <SelectContent>
                  {['Cachorro', 'Gato', 'Pássaro', 'Peixe', 'Hamster', 'Coelho', 'Porquinho-da-índia', 'Tartaruga', 'Iguana', 'Cobra', 'Outros'].map((especie) => (
                    <SelectItem key={especie} value={especie}>{especie}</SelectItem>                    
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="idade">Idade</Label>
              <Input id="idade" type="number" placeholder="Digite a idade (anos)" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="raca">Raça</Label>
              <Input id="raca" placeholder="Digite a raça" />
            </div>

            <div className="space-y-2">
              <Label>Porte</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o porte" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pequeno">Pequeno</SelectItem>
                  <SelectItem value="medio">Médio</SelectItem>
                  <SelectItem value="grande">Grande</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cor">Cor</Label>
              <Input id="cor" placeholder="Digite a cor" />
            </div>

            <div className="space-y-2">
              <Label>Sexo</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o sexo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="macho">Macho</SelectItem>
                  <SelectItem value="femea">Fêmea</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="data_nascimento">Data de Nascimento</Label>
              <Input id="data_nascimento" type="date" />
            </div>

            <div className="space-y-2 md:col-span-2 max-w-1/2">
              <Label htmlFor="foto">Foto do Pet</Label>
              <div className="flex items-center gap-2">
                {previewUrl ? (
                    <Image
                    src={previewUrl}
                    alt="Pré-visualização"
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full object-cover border mt-2"
                    />
                    ) : <></>
                }
                <Input id="foto" type="file" accept="image/*" onChange={handleImageChange} />
              </div>
            </div>

            <div className="md:col-span-2 justify-end flex">
              <Button type="submit" className="">Cadastrar</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}