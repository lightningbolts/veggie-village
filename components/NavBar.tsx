import React from 'react'
import Link from "next/link";

const Navbar = () => {
    return (
        <br />
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex flex-wrap gap-5 justify-between items-center self-stretch w-full text-2xl font-bold text-slate-950 max-md:max-w-full">
                <div className="flex gap-2.5 self-stretch my-auto whitespace-nowrap">
                    <div className="my-auto">
                        <Link href="/">
                            <img src="/webmaster-logo.png" alt="Veggie Village Logo" className="h-8" />
                        </Link>
                    </div>
                    <div className="my-auto">Veggie Villages</div>
                </div>

                <div className="flex items-center gap-5 text-black">
                    <>
                        <Link href="/about-us">
                            <span>About Us</span>
                        </Link>
                        <Link href="/sustainability">
                            <span>Sustainability</span>
                        </Link>
                        <Link href="/menu">
                            <span>Menu</span>
                        </Link>
                    </>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
