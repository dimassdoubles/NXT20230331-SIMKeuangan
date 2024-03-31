"use client"

import { ReactNode, useState } from "react"
import { Button } from "../ui/button"
import { ChevronDown, ChevronUp, NotebookText } from "lucide-react"

interface NestedSidebarItemProps {
    title: string,
    isSelected: boolean,
    icon: JSX.Element,
    children: ReactNode,
    selectedHref: string,
    href: string,
}

const NestedSidebarItem: React.FC<NestedSidebarItemProps> = ({selectedHref, href, title, isSelected, icon, children}) => {
    const [useOpen, setOpen] = useState(selectedHref.includes(href))

    return (
        <li>
            <div onClick={() => {setOpen(!useOpen)}} className={`${isSelected ? "bg-muted rounded-md" : ""} hover:bg-muted hover:rounded-md w-full`}>
                <div className="flex justify-between items-center pr-2">
                    <div className={`flex items-center p-2 ${isSelected ? "" : "text-muted-foreground"}`}>
                        {icon}
                        <span className={`ms-3 text-sm ${isSelected ? "" : "text-muted-foreground"}`}>{title}</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-muted-foreground ${useOpen ? "hidden" : ""}`}/>
                    <ChevronUp className={`h-5 w-5 text-muted-foreground ${useOpen ? "" : "hidden"}`}/>
                </div>
                
            </div>
            <div className={`${useOpen ? "" : "hidden"}`}>
                {children}
            </div>
        </li>
    )
}

export default NestedSidebarItem