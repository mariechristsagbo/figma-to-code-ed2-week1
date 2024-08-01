"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Desktop Header */}
            <header className="hidden lg:block">
                <div className="py-7 flex items-center justify-between max-w-7xl mx-auto px-4 border-b">
                    <Image
                        alt="Digi-NFT Logo"
                        src="/images/logo.svg"
                        width={35}
                        height={35}
                    />

                    <ul className="flex space-x-10 text-neutral-700 text-md">
                        <Link href="/" className="cursor-pointer font-semibold hover:text-black">
                            Home
                        </Link>
                        <Link href="/" className="cursor-pointer font-semibold hover:text-black">
                            Top sales
                        </Link>
                        <Link href="/" className="cursor-pointer font-semibold hover:text-black">
                            Collections
                        </Link>
                        <Link href="/" className="cursor-pointer font-semibold hover:text-black">
                            Our Blog
                        </Link>
                        <Link href="/" className="cursor-pointer font-semibold hover:text-black">
                            About us
                        </Link>
                    </ul>

                    <div className="flex space-x-5">
                        <button className="text-md text-neutral-800 font-semibold border-r-2 px-4 border-black">
                            Sign up
                        </button>

                        <button className="text-md text-white font-semibold bg-black py-3 px-3 rounded-full w-40 hover:bg-opacity-80">
                            Connect Wallet
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Header */}
            <header className="lg:hidden flex items-center justify-between py-7 px-10">
                <Image
                    alt="Digi-NFT Logo"
                    src="/images/logo.svg"
                    width={35}
                    height={35}
                />
                <button onClick={toggleMenu} className="text-2xl">
                    {isOpen ? <Image
                        alt="Close"
                        src='/icons/close.svg'
                        width={36}
                        height={36} /> : <Image
                        alt="Hamburger"
                        src='/icons/hamburger.svg'
                        width={36}
                        height={36}
                    />}
                </button>
            </header>

            <div className={`fixed inset-0 z-50 transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"} bg-white w-[85%] shadow-xl`}>
                <div className="flex items-center justify-end p-4 border-b">
                    <button onClick={toggleMenu} className="text-2xl">
                        <Image
                            alt="Close"
                            src='/icons/close.svg'
                            width={36}
                            height={36}
                            className="flex float-end"
                            />
                    </button>

                </div>
                <nav className="flex flex-col p-4 space-y-8 px-8">
                    <Link href="/" className="cursor-pointer font-semibold hover:text-black">
                        Home
                    </Link>
                    <Link href="/" className="cursor-pointer font-semibold hover:text-black">
                        Top sales
                    </Link>
                    <Link href="/" className="cursor-pointer font-semibold hover:text-black">
                        Collections
                    </Link>
                    <Link href="/" className="cursor-pointer font-semibold hover:text-black">
                        Our Blog
                    </Link>
                    <Link href="/" className="cursor-pointer font-semibold hover:text-black">
                        About us
                    </Link>
                </nav>
                <div className="flex space-x-5 sm:px-8 px-4 py-10">
                    <button className="text-md text-neutral-800 font-semibold border-r-2 px-4 border-black">
                        Sign up
                    </button>

                    <button className="text-md text-white font-semibold bg-black py-3 px-3 rounded-full w-40 hover:bg-opacity-80">
                        Connect Wallet
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-40" onClick={toggleMenu}></div>
            )}
        </div>
    );
}
