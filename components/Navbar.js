"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full transition-all duration-300 ${
                scrolled ? "bg-opacity-90 backdrop-blur-md" : "bg-transparent"
            }`}
            style={{ height: "60px" }}>
            <div className="container mx-auto flex justify-between items-center px-6 h-full">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/favico.svg"
                        alt="Dinesh K N Logo"
                        width={40}
                        height={40}
                        className="nav-logo transition-transform duration-300 transform hover:scale-110"
                    />
                </Link>

                {/* Navigation Links */}
                <div className="flex space-x-8">
                    {["Home", "About", "Projects", "Contact"].map(
                        (item, index) => {
                            const itemPath =
                                item === "Home"
                                    ? "/"
                                    : `/${item.toLowerCase()}`;
                            const isActive = pathname === itemPath;
                            return (
                                <Link
                                    key={index}
                                    href={itemPath}
                                    className={`group transition duration-300 text-sm ${
                                        isActive
                                            ? "text-[#00ffc3]"
                                            : "text-gray-300"
                                    } hover:text-[#00ffc3] relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#00ffc3] after:bottom-[-5px] after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300`}>
                                    {item}
                                </Link>
                            );
                        }
                    )}
                </div>
            </div>
        </nav>
    );
}
