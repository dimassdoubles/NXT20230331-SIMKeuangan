interface SidebarItemProp {
  title: string,
  icon: JSX.Element
}

const SidebarItem = (props: SidebarItemProp) => {
    return (
      <li>
        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        {props.icon}
        <span className="ms-3">{props.title}</span>
        </a>
      </li>
    )
}

export default SidebarItem