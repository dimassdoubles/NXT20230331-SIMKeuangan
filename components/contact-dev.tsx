import { Mail, Phone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card"

const ContactDev = () => {
    return <Card className="mt-4">
        <CardHeader className="pb-2">
        <CardDescription>Daftar Kontak Developer</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-row gap-2 my-2">
                <Mail/>
                <p>developer@gmail.com</p>
            </div>
            <div className="flex flex-row gap-2 my-2">
                <Phone/>
                <p>08123456789</p>
            </div>
        </CardContent>
    </Card>
}

export default ContactDev