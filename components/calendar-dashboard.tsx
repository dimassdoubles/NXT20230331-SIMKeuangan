import { Calendar } from "./ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const CalendarDashboard = () => {
    return (
      <Card>
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