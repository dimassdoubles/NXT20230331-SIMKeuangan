"use client"

import { Settings, SquareArrowOutUpRight } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "./ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import Link from "next/link"

interface CardUangProps {
    title: string,
    amount: string,
    subtitle: string,
}

const CardUang = (props: CardUangProps) => {
    return (
        <Card className="bg-[#0054A3] text-gray-200">
            <CardHeader className="pb-2">
            <div className="flex justify-between">
                <CardDescription className="text-gray-200">{props.title}</CardDescription>    
                <SquareArrowOutUpRight className="w-4 h-4 text-gray-200"/>  
            </div>
            
            <CardTitle className="text-2xl">{props.amount}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-xs">
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
