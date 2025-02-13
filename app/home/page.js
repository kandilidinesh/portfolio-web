export const metadata = {
    title: "Dinesh K N | Home",
    description:
        "Welcome to my portfolio. I am a Backend Engineer specializing in Node.js, AWS, and GraphQL."
};

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Welcome to My Portfolio 🚀</h1>
            <p className="mt-4 text-gray-300">
                I build scalable backend systems and cloud applications.
            </p>
        </div>
    );
}
