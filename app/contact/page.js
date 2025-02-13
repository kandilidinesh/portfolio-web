"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState(null);

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
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus(null), 3000); // Auto-hide message
        } else {
            setStatus("error");
            setTimeout(() => setStatus(null), 3000); // Auto-hide message
        }
    };

    return (
        <>
            <title>Dinesh K N | Contact</title>
            <meta
                name="description"
                content="Get in touch with Dinesh K N via email, LinkedIn, or GitHub."
            />

            {/* Page Container */}
            <div className="h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col justify-center items-center px-8 pt-20 relative">
                {/* Page Title with Futuristic Animated Dot */}
                <motion.h1
                    className="text-4xl font-bold mb-6 neon-text flex items-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                    Let&apos;s Connect
                    <motion.span
                        className="ml-1"
                        animate={{
                            opacity: [0.3, 1, 0.3], // Fading effect
                            scale: [1, 1.3, 1], // Pulsating effect
                            y: [0, -2, 0], // Slight floating movement
                            color: ["#00E4FF", "#007BFF", "#9B51E0"] // Neon color transition
                        }}
                        transition={{
                            repeat: Infinity, // Infinite loop
                            duration: 1.5, // Smooth transitions
                            ease: "easeInOut"
                        }}>
                        .
                    </motion.span>
                </motion.h1>

                {/* Floating Social Icons with Glow & Floating Effect */}
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
                        whileTap={{ scale: 0.9 }}
                        animate={{
                            y: [0, -5, 0], // Floating effect
                            transition: {
                                repeat: Infinity,
                                duration: 2,
                                ease: "easeInOut"
                            }
                        }}>
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
                        whileTap={{ scale: 0.9 }}
                        animate={{
                            y: [0, -5, 0],
                            transition: {
                                repeat: Infinity,
                                duration: 2,
                                ease: "easeInOut"
                            }
                        }}>
                        <FaGithub />
                    </motion.a>

                    <motion.a
                        href="mailto:kandilindinesh@gmail.com"
                        className="text-4xl text-red-400 transition-all"
                        whileHover={{
                            scale: 1.2,
                            textShadow: "0px 0px 12px rgba(255, 87, 51, 0.8)"
                        }}
                        whileTap={{ scale: 0.9 }}
                        animate={{
                            y: [0, -5, 0],
                            transition: {
                                repeat: Infinity,
                                duration: 2,
                                ease: "easeInOut"
                            }
                        }}>
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
                        className="w-full p-3 rounded mt-2 bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
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
                        className="w-full p-3 rounded mt-2 bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />

                    <label className="block text-sm font-bold mt-4 text-gray-300">
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded mt-2 bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 h-32"
                    />

                    {/* Submit Button with Animation */}
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

                {/* Floating Success/Error Messages (Moved Outside the Form) */}
                {status === "success" && (
                    <motion.div
                        className="fixed bottom-5 right-5 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}>
                        Message sent successfully! 🎉
                    </motion.div>
                )}
                {status === "error" && (
                    <motion.div
                        className="fixed bottom-5 right-5 bg-red-500 text-white py-3 px-6 rounded-lg shadow-lg"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}>
                        Something went wrong! ❌
                    </motion.div>
                )}
            </div>
        </>
    );
}
