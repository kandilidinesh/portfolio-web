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
                {/* Page Title */}
                <motion.h1
                    className="text-4xl font-bold mb-6 neon-text"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                    Let&apos;s Connect!
                </motion.h1>

                {/* Floating Social Icons */}
                <div className="flex space-x-8 text-3xl mb-6">
                    <motion.a
                        href="https://www.linkedin.com/in/kandili/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, color: "#0A66C2" }}
                        transition={{ type: "spring", stiffness: 200 }}>
                        <FaLinkedin className="text-blue-400 hover:text-blue-500 transition-all" />
                    </motion.a>

                    <motion.a
                        href="https://github.com/kandilidinesh"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, color: "#ffffff" }}
                        transition={{ type: "spring", stiffness: 200 }}>
                        <FaGithub className="text-gray-300 hover:text-white transition-all" />
                    </motion.a>

                    <motion.a
                        href="mailto:kandilindinesh@gmail.com"
                        whileHover={{ scale: 1.2, color: "#FF5733" }}
                        transition={{ type: "spring", stiffness: 200 }}>
                        <FaEnvelope className="text-red-400 hover:text-red-500 transition-all" />
                    </motion.a>
                </div>

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
