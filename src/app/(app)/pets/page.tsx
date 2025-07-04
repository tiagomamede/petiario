import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const mockPets = [
  { id: 1, name: "Rex", type: "Cachorro" },
  { id: 2, name: "Mimi", type: "Gato" },
  { id: 3, name: "Thor", type: "Cachorro" },
];

export default function DashboardPets() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Seus Pets</h1>
        <Link href="/pets/cadastrar">
          <Button>+ Cadastrar Pet</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {mockPets.map((pet) => (
          <Link key={pet.id} href={`/pets/${pet.id}`}>
            <Card className="rounded-2xl shadow">
              <CardHeader>
                <Image src="/cachorroAAFOLOU.jpg" alt="pet" width={80} height={80}></Image>
                <CardTitle>{pet.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {pet.type}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}