import { Calendar } from "./ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const CalendarDashboard = () => {
    return (
      <Card className="bg-green-500 bg-opacity-15">
        <CardHeader className="pb-2">
        <CardDescription>Kalender</CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar/>
        </CardContent>
      </Card>
    )
}

export default CalendarDashboard