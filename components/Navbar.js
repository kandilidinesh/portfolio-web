"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

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
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-gray-900 bg-opacity-90 shadow-lg"
                    : "bg-transparent"
            } backdrop-blur-lg border-b border-gray-700`}>
            <div className="container mx-auto flex justify-between items-center px-6 py-3">
                {/* Logo with futuristic effect */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/bg_removed.png"
                        alt="Dinesh K N Logo"
                        width={60}
                        height={30}
                        className="transition-transform duration-300 hover:scale-110"
                    />
                </Link>

                {/* Navigation Links */}
                <div className="flex space-x-6">
                    {["Home", "About", "Projects", "Contact"].map(
                        (item, index) => (
                            <Link
                                key={index}
                                href={`/${item.toLowerCase()}`}
                                className="relative text-white text-lg font-semibold tracking-wide uppercase 
                       transition-all duration-300 hover:text-neon-blue 
                       hover:scale-110 transform">
                                <span className="relative z-10">{item}</span>
                                <span
                                    className={`absolute left-0 bottom-0 w-full h-[2px] bg-neon-blue scale-x-0 transition-transform duration-300 origin-center group-hover:scale-x-100`}></span>
                                {/* Glowing Effect */}
                                <span className="absolute inset-0 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </Link>
                        )
                    )}
                </div>
            </div>

            {/* Neon Glow Effect */}
            <style jsx>{`
                nav {
                    box-shadow: 0 0 15px rgba(0, 255, 204, 0.4);
                    transition: box-shadow 0.3s ease-in-out;
                }
                nav:hover {
                    box-shadow: 0 0 25px rgba(0, 255, 204, 0.8);
                }
            `}</style>
        </nav>
    );
}
