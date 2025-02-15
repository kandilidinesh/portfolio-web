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
            className={`fixed top-0 left-0 w-full transition-all duration-300 px-4 flex items-center justify-between ${
                scrolled ? "bg-opacity-90 backdrop-blur-md" : "bg-transparent"
            }`}
            style={{ height: "60px", zIndex: "50" }}>
            <div className="container mx-auto flex items-center justify-between px-4 md:px-6 h-full">
                {/* LOGO */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/favico.svg"
                        alt="Dinesh K N Logo"
                        width={32}
                        height={32}
                        className="nav-logo transition-transform duration-300 transform hover:scale-110 md:w-10 md:h-10 sm:w-8 sm:h-8"
                    />
                </Link>

                {/* NAVIGATION LINKS WITH HOVER NEON GLOW */}
                <div className="hidden md:flex space-x-6 md:space-x-8">
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
                                    } hover:text-[#00ffc3] relative 
    hover:shadow-[0_0_10px_#00ffc3] hover:brightness-125`}>
                                    {item}
                                </Link>
                            );
                        }
                    )}
                </div>

                {/* MOBILE NAVIGATION WITH NEON GLOW */}
                <div className="flex md:hidden w-full justify-around absolute top-0 left-0 right-0 h-full items-center bg-[#0a0a0a] py-3 z-50">
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
                                    className={`relative text-sm transition duration-300 px-4 py-2 flex items-center justify-center ${
                                        isActive
                                            ? "text-[#00ffc3] font-semibold border-b-2 border-[#00ffc3] pb-1"
                                            : "text-gray-300"
                                    } hover:text-[#00ffc3] 
                                    
                                    after:absolute after:inset-0 after:w-full after:h-full after:rounded-md 
                                    after:border after:border-[#00ffc3] after:opacity-0 after:transition-all after:duration-300 
                                    hover:after:opacity-100 
                                    
                                    hover:after:shadow-[0px_0px_15px_#00ffc3, 0px_0px_30px_#00ffc3, 0px_0px_45px_#00ffc3]"`}>
                                    <span className="relative z-10">
                                        {item}
                                    </span>
                                </Link>
                            );
                        }
                    )}
                </div>
            </div>
        </nav>
    );
}
