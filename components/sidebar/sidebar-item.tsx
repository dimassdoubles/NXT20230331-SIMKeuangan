import Link from "next/link"

interface SidebarItemProp {
  title: string,
  href: string,
  icon?: JSX.Element,
  selectedHref: string,
}

const SidebarItem = (props: SidebarItemProp) => {
    return (
      <div className={`${props.href === props.selectedHref ? "bg-muted rounded-md" : ""} hover:bg-muted hover:rounded-md`}>
        <Link href={props.href} className={`flex items-center p-2 ${props.href === props.selectedHref ? "" : "text-muted-foreground"}`}>
        {props.icon}
        <span className={`ms-3 text-sm ${props.href === props.selectedHref ? "" : "text-muted-foreground"}`}>{props.title}</span>
        </Link>
      </div>
    )
}

export default SidebarItem