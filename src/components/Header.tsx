"use client"
import Image from "next/image"
import Link from "next/link"
export default function Header() {
    return (
        <div>
            <header className="hidden lg:block">
                <div className="py-7 flex items-center justify-between max-w-7xl mx-auto">
                    <Image
                        alt="Digi-NFT Logo"
                        src="/images/logo.svg"
                        width={35}
                        height={35}
                    />

                    <ul className="flex space-x-10 text-neutral-700 text-lg">
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
                        <button className="text-lg text-neutral-800 font-semibold border-r-4 px-4  border-black">
                            Sign up
                        </button>

                        <button className="text-lg text-white font-semibold bg-black py-3 px-3 rounded-full w-44">
                            Connect Wallet
                        </button>
                    </div>
                    
                </div>
            </header>
        </div>
    )
}
