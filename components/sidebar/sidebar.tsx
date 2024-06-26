import { Divide, Home, NotebookText, Play, Settings } from "lucide-react"
import SidebarItem from "./sidebar-item"
import NestedSidebarItem from "./nested-sidebar-item"

interface SidebarProps {
    href: string,
}

const Sidebar = (props: SidebarProps) => {
    return (
        <>
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li className="border-b border-gray-200 py-2 mb-6">
                        <div className="flex flex-row items-center p-2">
                            <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
                            </button>
                            <div className="flex flex-col ml-2">
                                <span className="font-medium">Admin</span>
                                <div className="flex flex-row items-center gap-1">
                                    <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                                    <span className="font-normal text-xs">Online</span>
                                </div>
                            </div>
                        </div>
                        </li>

                        <SidebarItem selectedHref={props.href}  href="/" title="Dashboard" icon={<Home className="h-5 w-5"/>}/>
                        <SidebarItem selectedHref={props.href}  href="/demo" title="Master Demo" icon={<Play className="h-5 w-5"/>}/>
                        <NestedSidebarItem selectedHref={props.href} href="/laporan" title="Laporan" icon={<NotebookText className="h-5 w-5"/>} isSelected={false}>
                            <SidebarItem selectedHref={props.href}  href="/laporan/laba-rugi" title="Laba Rugi" icon={<div className="h-5 w-5"></div>}/> 
                            <SidebarItem selectedHref={props.href}  href="/laporan/neraca" title="Neraca" icon={<div className="h-5 w-5"></div>}/> 
                            <SidebarItem selectedHref={props.href}  href="/laporan/arus-kas" title="Arus Kas" icon={<div className="h-5 w-5"></div>}/> 
                            <SidebarItem selectedHref={props.href}  href="/laporan/buku-besar" title="Buku Besar" icon={<div className="h-5 w-5"></div>}/> 
                        </NestedSidebarItem>
                        <NestedSidebarItem selectedHref={props.href} href="/jurnal" title="Jurnal" icon={<NotebookText className="h-5 w-5"/>} isSelected={false}>
                            <SidebarItem selectedHref={props.href}  href="/jurnal/transaksi" title="Jurnal Transaksi" icon={<div className="h-5 w-5"></div>}/> 
                            <SidebarItem selectedHref={props.href}  href="/jurnal/penyesuaian" title="Jurnal Penyesuaian" icon={<div className="h-5 w-5"></div>}/> 
                        </NestedSidebarItem>
                        <NestedSidebarItem selectedHref={props.href} href="/outstanding" title="Outstanding Report" icon={<NotebookText className="h-5 w-5"/>} isSelected={false}>
                            <SidebarItem selectedHref={props.href}  href="/outstanding/piutang" title="OS Piutang" icon={<div className="h-5 w-5"></div>}/> 
                            <SidebarItem selectedHref={props.href}  href="/outstanding/hutang" title="OS Hutang" icon={<div className="h-5 w-5"></div>}/> 
                        </NestedSidebarItem>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar