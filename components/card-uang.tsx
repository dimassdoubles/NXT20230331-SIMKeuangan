import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "./ui/progress"

interface CardUangProps {
    title: string,
    amount: string,
    subtitle: string,
}

const CardUang = (props: CardUangProps) => {
    return (
        <Card>
            <CardHeader className="pb-2">
            <CardDescription>{props.title}</CardDescription>
            <CardTitle className="text-2xl">{props.amount}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-xs text-muted-foreground">
                    {props.subtitle}
                </div>
            </CardContent>
            {/* <CardFooter>
                <Button className="w-full" size="sm">Selengkapnya</Button>
            </CardFooter> */}
        </Card>
    )
}

export default CardUang
