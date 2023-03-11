import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div><h1>The LOST</h1></div>
        <div>
            <Link href="/" className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center">
                SIgn Up to my blog
            </Link>
        </div>
    </header>
  )
}

export default Header
