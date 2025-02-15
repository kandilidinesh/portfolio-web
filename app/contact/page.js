"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast"; // Import toast

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState(null);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Generate particles on client only
            const generatedParticles = Array.from({ length: 20 }, () => ({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 1.5 + 0.5, // Ensure minimum scale
                id: Math.random()
            }));
            setParticles(generatedParticles);
        }
    }, []);

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
            toast.success("Message sent successfully!"); // Show success toast
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus(null), 3000);
        } else {
            setStatus("error");
            toast.error("Failed to send message. Try again!"); // Show error toast
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

            {/* Toast Notification */}
            <Toaster position="bottom-right" reverseOrder={false} />
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-50"
                        initial={{
                            x: particle.x,
                            y: particle.y,
                            scale: particle.scale
                        }}
                        animate={{
                            y: [particle.y, particle.y + 50, particle.y],
                            x: [particle.x, particle.x + 50, particle.x],
                            opacity: [0.4, 0.8, 0.4],
                            scale: [0.8, 1.5, 0.8]
                        }}
                        transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Page Container */}
            <div className="h-screen flex flex-col justify-center items-center px-8 pt-20 relative text-white">
                {/* Page Title */}
                <motion.h1
                    className="text-4xl font-bold mb-6 neon-text flex items-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                    Let&apos;s connect
                </motion.h1>

                {/* Floating Social Icons */}
                <motion.div
                    className="flex space-x-10 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                    <motion.a
                        href="https://www.linkedin.com/in/kandili/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-4xl text-blue-400 transition-all"
                        whileHover={{
                            scale: 1.2,
                            textShadow: "0px 0px 12px rgba(10, 102, 194, 0.8)"
                        }}
                        whileTap={{ scale: 0.9 }}>
                        <FaLinkedin />
                    </motion.a>

                    <motion.a
                        href="https://github.com/kandilidinesh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-4xl text-gray-300 transition-all"
                        whileHover={{
                            scale: 1.2,
                            textShadow: "0px 0px 12px rgba(255, 255, 255, 0.8)"
                        }}
                        whileTap={{ scale: 0.9 }}>
                        <FaGithub />
                    </motion.a>

                    <motion.a
                        href="mailto:kandilindinesh@gmail.com"
                        className="text-4xl text-red-400 transition-all"
                        whileHover={{
                            scale: 1.2,
                            textShadow: "0px 0px 12px rgba(255, 87, 51, 0.8)"
                        }}
                        whileTap={{ scale: 0.9 }}>
                        <FaEnvelope />
                    </motion.a>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="mt-6 w-full max-w-lg bg-black bg-opacity-50 p-8 rounded-lg shadow-lg backdrop-blur-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                    <label className="block text-sm font-bold text-gray-300">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded mt-2 bg-gray-800 text-white border border-gray-600 focus:ring-cyan-400"
                    />

                    <label className="block text-sm font-bold mt-4 text-gray-300">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded mt-2 bg-gray-800 text-white border border-gray-600 focus:ring-cyan-400"
                    />

                    <label className="block text-sm font-bold mt-4 text-gray-300">
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded mt-2 bg-gray-800 text-white border border-gray-600 focus:ring-cyan-400 h-32"
                    />

                    <motion.button
                        type="submit"
                        className="mt-6 w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 py-3 rounded text-white font-bold text-lg shadow-md transition-all"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.8)"
                        }}>
                        {status === "loading" ? "Sending..." : "Send Message"}
                    </motion.button>
                </motion.form>
            </div>
        </>
    );
}
