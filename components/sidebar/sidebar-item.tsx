interface SidebarItemProp {
  title: string,
  icon: JSX.Element,
  isSelected?: boolean | false,
}

const SidebarItem = (props: SidebarItemProp) => {
    return (
      <li className={`${props.isSelected ? "bg-muted rounded-md" : ""}`}>
        <a href="#" className={`flex items-center p-2 ${props.isSelected ? "" : "text-muted-foreground"}`}>
        {props.icon}
        <span className={`ms-3 text-sm ${props.isSelected ? "" : "text-muted-foreground"}`}>{props.title}</span>
        </a>
      </li>
    )
}

export default SidebarItem