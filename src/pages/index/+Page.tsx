import { Navbar } from "@/components/landing/Navbar";

// Landing Page — components added one by one
export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero, Features, Dashboard, etc — coming soon */}
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-white">
              EMS<span className="text-purple-500">+</span>
            </h1>
            <p className="text-zinc-400 text-lg">Monitor. Align. Attend.</p>
          </div>
        </div>
      </main>
    </>
  );
}
