import Image from "next/image"
import Link from "next/link"
export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto pt-8 md:px-4 px-7">
      <Image
        alt="Digi-NFT Logo"
        src="/images/logo.svg"
        width={35}
        height={35}
      />

      <div className="flex flex-col text-left md:flex-row justify-between gap-4 border-t py-8 my-8">
        <h1 className="lg:text-2xl text-lg font-semibold">Create Explore & Collect Digital  NFTs</h1>
        <ul className="flex space-x-10 text-neutral-700 sm:text-md text-sm font-medium items-center">
          <Link href="/" className="cursor-pointer hover:text-black">
            Privacy
          </Link>
          <Link href="/" className="cursor-pointer hover:text-black">
            Terms & Conditions                        </Link>
          <Link href="/" className="cursor-pointer hover:text-black">
            About Us
          </Link>
        </ul>
      </div>
    </footer>
  )
}
