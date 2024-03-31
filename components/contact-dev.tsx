import { Mail, Phone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card"

const ContactDev = () => {
    return <Card className="mt-4 bg-green-500 bg-opacity-15">
        <CardHeader className="pb-2">
        <CardDescription>Daftar Kontak Developer</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-row gap-2 my-2 text-sm mb-4">
                <Mail className="w-5 h-5"/>
                <p className="">developer@gmail.com</p>
            </div>
            <div className="flex flex-row gap-2 my-2 text-sm">
                <Phone className="w-5 h-5"/>
                <p className="pt-[2px]">08123456789</p>
            </div>
        </CardContent>
    </Card>
}

export default ContactDev