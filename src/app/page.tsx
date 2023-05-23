"use client"

import { useState } from "react"
import Sidebar from "@/components/Sidebar"

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(true)
  
  const closeSidebar = ()=>{
    setSidebarOpened(false)
  }


  return (
    <main className="flex min-h-screen">
      <Sidebar
      open={sidebarOpened}
      onClose={closeSidebar}
      >

      </Sidebar>
      <section className="flex flex-col w-full">
        <button className="md:hidden" onClick={()=>setSidebarOpened(true)}>Abrir</button>
      </section>
    </main>
  )
}
export default Page

