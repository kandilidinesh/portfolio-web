"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState(null);
    const [particles, setParticles] = useState([]);

    // Detect Mobile
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    useEffect(() => {
        // Reduce particles on mobile
        const totalParticles = isMobile ? 15 : 40;

        const initialParticles = Array.from({ length: totalParticles }).map(
            () => ({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: isMobile ? Math.random() * 2 + 1 : Math.random() * 5 + 2,
                opacity: Math.random() * 0.5 + 0.3,
                id: Math.random()
            })
        );
        setParticles(initialParticles);

        return () => setParticles([]);
    }, [isMobile]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        const res = await fetch("https://formspree.io/f/meoelkyp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        if (res.ok) {
            setStatus("success");
            toast.success("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus(null), 3000);
        } else {
            setStatus("error");
            toast.error("Failed to send message. Try again!");
            setTimeout(() => setStatus(null), 3000);
        }
    };

    return (
        <>
            <title>Dinesh K N | Contact</title>
            <meta
                name="description"
                content="Get in touch with Dinesh K N via email, LinkedIn, or GitHub."
            />
            <Toaster position="bottom-right" reverseOrder={false} />

            {/* Background */}
            <div className="absolute top-0 left-0 w-full min-h-screen pointer-events-none bg-black overflow-hidden">
                {/* Soft Glowing Effect */}
                <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(0, 200, 255, 0.3) 10%, rgba(0,0,0,0) 80%)",
                        filter: "blur(60px)"
                    }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Floating Particles */}
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute bg-cyan-400 rounded-full pointer-events-none"
                        style={{
                            left: `${particle.x}px`,
                            top: `${particle.y}px`,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            opacity: particle.opacity,
                            boxShadow: `0 0 ${
                                particle.size * 2
                            }px rgba(0, 255, 255, 0.3)`
                        }}
                        animate={{
                            y: [
                                particle.y,
                                particle.y - (isMobile ? 20 : 40),
                                particle.y
                            ], // Reduce movement on mobile
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: isMobile
                                ? Math.random() * 4 + 2
                                : Math.random() * 6 + 2, // Faster duration for mobile
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Contact Form */}
            <div className="min-h-screen flex flex-col justify-center items-center px-8 pt-20 relative text-white">
                {" "}
                <motion.h1
                    className="text-4xl font-bold mb-6 flex items-center neon-text"
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: isMobile ? 1.2 : 0.8, // Smoother transition for mobile
                        ease: "easeOut"
                    }}
                    style={{ willChange: "transform, opacity" }} // Optimized for performance
                >
                    Let&apos;s Connect
                </motion.h1>
                {/* Social Links */}
                <motion.div
                    className="flex space-x-8 mb-6"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: isMobile ? 1.1 : 0.7, // Make animation slightly longer on mobile
                        ease: "easeOut"
                    }}
                    style={{ willChange: "transform, opacity" }}>
                    <a
                        href="https://www.linkedin.com/in/kandili/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-4xl text-blue-400 transition-all hover:scale-110">
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/kandilidinesh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-4xl text-gray-300 transition-all hover:scale-110">
                        <FaGithub />
                    </a>
                    <a
                        href="mailto:kandilindinesh@gmail.com"
                        className="text-4xl text-red-400 transition-all hover:scale-110">
                        <FaEnvelope />
                    </a>
                </motion.div>
                {/* Restored Original Form with Cyberpunk Neon Glow */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="bg-opacity-50 p-8 rounded-lg w-full max-w-lg shadow-lg backdrop-blur-md bg-white/5 transition-all duration-300">
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 mb-4 bg-transparent border-b border-cyan-700 text-white placeholder-gray-600 
                   outline-none focus:ring-0 focus:border-cyan-300 transition-all 
                   duration-300 focus:shadow-[0px_0px_10px_#00ffc3]"
                    />

                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 mb-4 bg-transparent border-b border-cyan-700 text-white placeholder-gray-600 
                   outline-none focus:ring-0 focus:border-cyan-300 transition-all 
                   duration-300 focus:shadow-[0px_0px_10px_#00ffc3]"
                    />

                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-3 mb-4 bg-transparent border-b border-cyan-700 text-white placeholder-gray-600 h-32 resize-none 
                   outline-none focus:ring-0 focus:border-cyan-300 transition-all 
                   duration-300 focus:shadow-[0px_0px_10px_#00ffc3]"
                    />

                    <button
                        type="submit"
                        className="w-full bg-cyan-600 text-white py-3 rounded-md transition-all duration-300 
                   hover:opacity-90 focus:shadow-[0px_0px_25px_#00ffc3]">
                        {status === "loading" ? "Sending..." : "Send Message"}
                    </button>
                </motion.form>
            </div>
        </>
    );
}
