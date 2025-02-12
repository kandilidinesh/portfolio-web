import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white py-4 fixed top-0 w-full shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6">
                <Link href="/">
                    <Image
                        src="/bg_removed.png" 
                        alt="Dinesh K N Logo"
                        width={50} 
                        height={20} 
                    />
                </Link>
                <div className="space-x-6">
                    <Link
                        href="/"
                        className="hover:text-blue-400 transition duration-300">
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="hover:text-blue-400 transition duration-300">
                        About
                    </Link>
                    <Link
                        href="/projects"
                        className="hover:text-blue-400 transition duration-300">
                        Projects
                    </Link>
                    <Link
                        href="/contact"
                        className="hover:text-blue-400 transition duration-300">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
