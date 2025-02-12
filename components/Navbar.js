import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white py-4 fixed top-0 w-full shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6">
                <h1 className="text-2xl font-bold">Dinesh K N</h1>
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
