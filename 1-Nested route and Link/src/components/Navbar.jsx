'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"

const Navbar = () => {
    const router = useRouter()
  return (
    <div className="bg-gradient-to-br from-blue-50  to-indigo-50 p-6 flex items-center gap-x-6 text-lg font-semibold text-gray-800">
        
       
            <button className="cursor-pointer hover:underline" onClick={()=>router.back()}>Back</button>
            <Link className="hover:underline" href='/'>Home</Link>
        
    </div>
  )
}
export default Navbar