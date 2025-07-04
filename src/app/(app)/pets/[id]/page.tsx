import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const mockPet = {
  name: "Rex",
  type: "Cachorro",
  age: "3 anos",
  breed: "Labrador",
  photoUrl: "/cachorroAAFOLOU.jpg",
  history: [
    { id: 1, date: "2024-01-15", description: "Vacinação anual" },
    { id: 2, date: "2024-03-22", description: "Consulta de rotina" },
  ],
  documents: [
    { id: 1, name: "Carteira de vacinação.pdf" },
    { id: 2, name: "Exame de sangue.pdf" },
  ],
};

export default function PetProfilePage({ params }: { params: { id: string } }) {
  return (
    <div className="p-6 space-y-6">
      <Link href="/pets">
        <Button variant="outline" className="hover:cursor-pointer">
          Voltar
        </Button>
      </Link>
      <Card className="mt-6">
        <CardContent className="flex items-center gap-6 p-6">
          <Image
            src={mockPet.photoUrl}
            alt={mockPet.name}
            width={128}
            height={128}
            className="w-32 h-32 rounded-full object-cover border"
          />
          <div className="space-y-1">
            <h1 className="text-3xl font-bold">{mockPet.name}</h1>
            <p className="text-muted-foreground">{mockPet.type} • {mockPet.breed} • {params.id}</p>
          </div>
          <Button className="ml-auto">Editar Pet</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Documentos</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-1">
            {mockPet.documents.map((doc) => (
              <li key={doc.id} className="flex justify-between items-center">
                <span>{doc.name}</span>
                <Button size="sm" variant="outline">Baixar</Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Histórico de Consultas</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {mockPet.history.map((item) => (
              <li key={item.id} className="border-b pb-1">
                <div className="font-medium">{item.date}</div>
                <div className="text-sm text-muted-foreground">{item.description}</div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      
    </div>
  );
}
