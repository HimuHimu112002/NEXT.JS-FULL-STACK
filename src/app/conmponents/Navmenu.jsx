import Image from 'next/image'
import React from 'react'

const Navmenu = () => {
  return (
    <div className="container navbar bg-base-100 shadow m-auto">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Home</a></li>
                    <li><a>Team</a></li>
                    <li><a>Service</a></li>
                    <li><a>Project</a></li>
                    <li><a>Testimonial</a></li>
                </ul>
            </div>
            {/* <Image width={100} height={0} src='image/logo.png' className="w-100" alt='logo'/> */}
            <h1>agency</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-4">
                <li><a>Home</a></li>
                <li><a>Team</a></li>
                <li><a>Service</a></li>
                <li><a>Project</a></li>
                <li><a>Testimonial</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navmenu