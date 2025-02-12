"use client"; // Required for handling form submission in Next.js app router
import { useState } from "react";

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
        } else {
            setStatus("error");
        }
    };

    return (
        <>
            <>
                <title>Dinesh K N | Contact</title>
                <meta
                    name="description"
                    content="Get in touch with Dinesh K N via email, LinkedIn, or GitHub."
                />
            </>
            <div className="h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-8">
                <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

                {/* Social Links */}
                <div className="flex space-x-6">
                    <a
                        href="https://www.linkedin.com/in/kandili/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline">
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/dineshkn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline">
                        GitHub
                    </a>
                    <a
                        href="mailto:kandilindinesh@gmail.com"
                        className="text-blue-400 hover:underline">
                        Email
                    </a>
                </div>

                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-8 w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
                    <label className="block text-sm font-bold">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 rounded mt-1 bg-gray-700 text-white border border-gray-600 focus:outline-none"
                    />

                    <label className="block text-sm font-bold mt-4">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 rounded mt-1 bg-gray-700 text-white border border-gray-600 focus:outline-none"
                    />

                    <label className="block text-sm font-bold mt-4">
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-2 rounded mt-1 bg-gray-700 text-white border border-gray-600 focus:outline-none h-32"
                    />

                    <button
                        type="submit"
                        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 py-2 rounded text-white font-bold">
                        {status === "loading" ? "Sending..." : "Send Message"}
                    </button>

                    {/* Success & Error Messages */}
                    {status === "success" && (
                        <p className="text-green-400 mt-2">
                            Message sent successfully!
                        </p>
                    )}
                    {status === "error" && (
                        <p className="text-red-400 mt-2">
                            Something went wrong. Try again.
                        </p>
                    )}
                </form>
            </div>
        </>
    );
}
