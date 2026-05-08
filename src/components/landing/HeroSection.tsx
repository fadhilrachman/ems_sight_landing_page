import { useModal } from "./ModalProvider";

export function HeroSection() {
  const { openCTA } = useModal();

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 dark:bg-blue-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400/30 dark:bg-purple-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-400/30 dark:bg-indigo-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: "4s" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">

          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up">
            <span className="block text-gray-900 dark:text-white">What You'll Love</span>
            <span className="block text-gray-600 dark:text-gray-400 text-3xl md:text-4xl mt-2">
              (But Your Employees Won't)
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Being tracked is never fun. But with AI-powered activity monitoring, KPI
            management, and smart attendance, your business gains{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">sharper productivity</span>,{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">stronger security</span>,
            and{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">smarter insights</span>.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={openCTA}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105"
            >
              <i className="fas fa-rocket mr-2" /> Book a Demo
            </button>
            <button
              onClick={openCTA}
              className="px-8 py-4 glass-card hover:bg-white/90 dark:hover:bg-gray-800/90 rounded-full font-semibold shadow-lg transition-all transform hover:scale-105"
            >
              <i className="fas fa-play-circle mr-2" /> Start Free Trial
            </button>
          </div>

          {/* Strapline */}
          <div
            className="inline-block glass-card px-6 py-3 rounded-full fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="text-lg font-semibold">
              <span className="text-blue-600 dark:text-blue-400">See the Unseen</span>
              <span className="mx-2">-</span>
              <span className="text-purple-600 dark:text-purple-400">Secure the Inside</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
