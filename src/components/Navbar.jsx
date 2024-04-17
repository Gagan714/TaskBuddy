import React from 'react'
const Navbar = () => {
  return (
    <nav className="flex h-12 w-full text-white bg-blue-900 items-center justify-between px-16">
      <span className="logo font-bold text-xl">TaskBuddy</span>
        <ul className="flex gap-5">
            <li className="cursor-pointer hover:font-semibold">Home</li>
            <li className="cursor-pointer hover:font-semibold">Your tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar