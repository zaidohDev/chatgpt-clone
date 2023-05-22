import { ReactNode, useState } from "react"
{/**981783399 */}
type Props = {
  children: ReactNode
  open: boolean
  onClose: ()=>void
}

const Sidebar= ({children, open, onClose}:Props) => {
  
  return (
    <section className="fixed left-0 top-0 bottom-0 text-white">

    </section>
  )
}
export default Sidebar
