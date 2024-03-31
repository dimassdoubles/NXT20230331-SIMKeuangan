import Calendar from "@/components/calendar-dashboard"
import ContactDev from "@/components/contact-dev"
import GrafikPemasukanPengeluaran from "@/components/grafik-pemasukan-pengeluaran"
import InformasiPemasukan from "@/components/informasi-pemasukan"
import InformasiPengeluaran from "@/components/informasi-pengeluaran"
import Sidebar from "@/components/sidebar/sidebar"
import { LogOut } from "lucide-react"

const Demo = () => {
  return (
    <>
      <nav className="bg-[#0054A3] fixed top-0 z-50 w-full text-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <span className="sr-only">Open sidebar</span>
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                  </svg>
              </button>
              <a href="/" className="flex ms-2 md:me-24">
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">SIMKeuangan</span>
              </a>
            </div>

            <div className="flex items-center">
                <div className="flex items-center ms-3">
                  <div>
                    <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                      <span className="sr-only">Open user menu</span>
                      <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
                    </button>
                  </div>
                  <span className="ml-2 font-medium mr-8">Admin</span>
                  <span className="text-sm mr-2">Keluar</span>
                  <LogOut className="h-5 w-5"/>
                </div>
              </div>
          </div>
        </div>
      </nav>

      <Sidebar href="/demo"/>
    </>
  )
}

export default Demo