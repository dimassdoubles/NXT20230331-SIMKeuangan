import { Home, NotebookText, Play, Settings } from "lucide-react"
import SidebarItem from "./sidebar-item"

const Sidebar = () => {
    return (
        <>
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <SidebarItem title="Dashboard" icon={<Home className="h-5 w-5"/>} isSelected={true}/>
                        <SidebarItem title="Master Demo" icon={<Play className="h-5 w-5"/>}/>
                        <SidebarItem title="Laporan" icon={<NotebookText className="h-5 w-5"/>}/>
                        <SidebarItem title="Jurnal" icon={<NotebookText className="h-5 w-5"/>}/>
                        <SidebarItem title="Outstanding Report" icon={<NotebookText className="h-5 w-5"/>}/>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar