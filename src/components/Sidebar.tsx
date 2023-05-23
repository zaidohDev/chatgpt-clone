import { ReactNode, useState } from "react"
import IconClose from "./icons/IconClose"
{/**981783399 */}
type Props = {
  children: ReactNode
  open: boolean
  onClose: ()=>void
}

const Sidebar= ({children, open, onClose}:Props) => {
  
  return (
    <section className={`fixed left-0 top-0 bottom-0 text-white 
    ${open ? 'w-screen bg-gray-600/75':'w-0'} md:w-64 md:static`}>
     
      <div className={`transition-all duration-200 flex h-screen ${open ? 'ml-0':'-ml-96'} md:ml-0`}>
        <div className="flex flex-col w-64 p-2 bg-gray-900"></div>
        <div onClick={onClose}  className="flex items-center justify-center w-10 h-10 cursor-pointer md:hidden">
          <IconClose width={24} hanging={24} />
        </div>
      </div>
    </section>
  )
}
export default Sidebar
