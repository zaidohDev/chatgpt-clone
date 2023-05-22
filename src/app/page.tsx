"use client"

import { useState } from "react"
import Sidebar from "@/components/Sidebar"

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false)
  
  const closeSidebar = ()=>{}


  return (
    <main className="flex min-h-screen">
      <Sidebar
      open={sidebarOpened}
      onClose={closeSidebar}
      >

      </Sidebar>
      <section className="flex flex-col w-full">
        ...
      </section>
    </main>
  )
}
export default Page

