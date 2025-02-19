import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-black/90 p-2 shadow-md px-5">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
        <img src="/CosmeticLogo.png" alt="" className="h-24" />
        </Link>

        <div className='text-gray-300 flex gap-10 text-2xl'>
          <Link href="/" className='hover:text-[#FFB22C]'>Home</Link>
          <Link href="#Products" className='hover:text-[#FFB22C]'>Products</Link>
          
          <Link href="#About" className='hover:text-[#FFB22C]'>About</Link>
          <Link href="#Contact" className='hover:text-[#FFB22C]'>Contact</Link>

        </div>
        <Link href="/cart"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/shopping-cart.png" alt="shopping-cart"/></Link>
      </div>
    </nav>
  )
}