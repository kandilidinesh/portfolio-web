export default function About() {
    return (
        <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-8">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg max-w-2xl text-center">
                I&apos;m a **Backend Engineer** with **6+ years of experience**
                in **JavaScript, Node.js, TypeScript, and AWS**. Passionate
                about **scalable APIs, cloud computing, and DevOps**, I
                specialize in building high-performance, secure backend
                architectures.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
                <span className="bg-blue-500 px-4 py-2 rounded-md">
                    Node.js
                </span>
                <span className="bg-blue-500 px-4 py-2 rounded-md">NestJS</span>
                <span className="bg-blue-500 px-4 py-2 rounded-md">
                    AWS Lambda
                </span>
                <span className="bg-blue-500 px-4 py-2 rounded-md">
                    PostgreSQL
                </span>
                <span className="bg-blue-500 px-4 py-2 rounded-md">CI/CD</span>
                <span className="bg-blue-500 px-4 py-2 rounded-md">
                    GraphQL
                </span>
            </div>
        </div>
    );
}
