import { useState } from "react";

export function HeroSection() {
  const [showCTAModal, setShowCTAModal] = useState(false);

  return (
    <>
      {/* ═══════════ HERO SECTION ═══════════ */}
      <section
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ paddingTop: "5rem", paddingLeft: "1rem", paddingRight: "1rem" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 dark:bg-blue-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-pulse" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400/30 dark:bg-purple-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-400/30 dark:bg-indigo-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: "4s" }} />
        </div>

        <div className="relative z-10 w-full" style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <div className="text-center">

            <h1 className="text-5xl md:text-7xl font-bold fade-in-up" style={{ marginBottom: "1.5rem" }}>
              <span className="block text-gray-900 dark:text-white">What You'll Love</span>
              <span className="block text-gray-600 dark:text-gray-400 text-3xl md:text-4xl" style={{ marginTop: "0.5rem" }}>
                (But Your Employees Won't)
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 fade-in-up"
              style={{ marginBottom: "2rem", maxWidth: "56rem", margin: "0 auto 2rem", animationDelay: "0.2s" }}
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
              className="flex flex-col sm:flex-row justify-center items-center fade-in-up"
              style={{ gap: "1rem", marginBottom: "3rem", animationDelay: "0.4s" }}
            >
              {/* Book a Demo */}
              <button
                onClick={() => setShowCTAModal(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105"
                style={{ padding: "1rem 2rem", border: "none", cursor: "pointer" }}
              >
                <i className="fas fa-rocket" style={{ marginRight: "0.5rem" }} />
                Book a Demo
              </button>

              {/* Start Free Trial */}
              <button
                onClick={() => setShowCTAModal(true)}
                className="glass-card hover:bg-white/90 dark:hover:bg-gray-800/90 rounded-full font-semibold shadow-lg transition-all transform hover:scale-105"
                style={{ padding: "1rem 2rem", border: "none", cursor: "pointer" }}
              >
                <i className="fas fa-play-circle" style={{ marginRight: "0.5rem" }} />
                Start Free Trial
              </button>
            </div>

            <div
              className="inline-block glass-card rounded-full fade-in-up"
              style={{ padding: "0.75rem 1.5rem", animationDelay: "0.6s" }}
            >
              <p className="text-lg font-semibold">
                <span className="text-blue-600 dark:text-blue-400">See the Unseen</span>
                <span style={{ margin: "0 0.5rem" }}>-</span>
                <span className="text-purple-600 dark:text-purple-400">Secure the Inside</span>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════ CTA MODAL ═══════════ */}
      {showCTAModal && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          onClick={(e) => { if (e.target === e.currentTarget) setShowCTAModal(false); }}
        >
          <div className="fixed inset-0 bg-gray-900/75 backdrop-blur-sm" />
          <div className="flex items-center justify-center min-h-screen" style={{ padding: "1rem" }}>
            <div
              className="relative glass-card shadow-2xl w-full"
              style={{ borderRadius: "1.5rem", maxWidth: "32rem", padding: "2rem" }}
            >
              <div className="flex justify-between items-start" style={{ marginBottom: "1.5rem" }}>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Get Started
                </h3>
                <button
                  onClick={() => setShowCTAModal(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.25rem" }}
                >
                  <i className="fas fa-times" />
                </button>
              </div>

              <p className="text-gray-600 dark:text-gray-400" style={{ marginBottom: "2rem" }}>
                Choose how you'd like to connect with us:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <a
                  href="https://wa.me/6285811144421?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20EMS%2B"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold shadow-lg transition-all transform hover:scale-105 text-center"
                  style={{ padding: "1rem 1.5rem", borderRadius: "0.75rem", textDecoration: "none" }}
                >
                  <i className="fab fa-whatsapp" style={{ marginRight: "0.75rem", fontSize: "1.25rem" }} />
                  Chat on WhatsApp
                </a>

                <a
                  href="mailto:contact@arnatech.id?subject=EMS%2B%20Demo%20Request"
                  className="block w-full glass-card hover:bg-white/90 dark:hover:bg-gray-800/90 font-semibold shadow-lg transition-all transform hover:scale-105 text-center"
                  style={{ padding: "1rem 1.5rem", borderRadius: "0.75rem", textDecoration: "none" }}
                >
                  <i className="fas fa-envelope" style={{ marginRight: "0.75rem" }} />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
