import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const mockAppointments = [
  { id: 1, date: "2024-07-10", petName: "Rex", description: "Vacinação anual" },
  { id: 2, date: "2024-07-12", petName: "Mimi", description: "Consulta de rotina" },
  { id: 3, date: "2024-07-15", petName: "Thor", description: "Exame de sangue" },
];

export default function AgendaPage() {
  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          <CardTitle>Agenda de Consultas</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {mockAppointments.map((appt) => (
              <li key={appt.id} className="border-b pb-1">
                <div className="font-medium">{appt.date}</div>
                <div className="text-sm text-muted-foreground">
                  {appt.petName}: {appt.description}
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}