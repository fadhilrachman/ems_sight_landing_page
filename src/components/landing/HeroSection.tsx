import { useState } from "react";

export function HeroSection() {
  const [showCTAModal, setShowCTAModal] = useState(false);

  return (
    <>
      {/* ═══════════ HERO SECTION ═══════════ */}
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
                onClick={() => setShowCTAModal(true)}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105"
              >
                <i className="fas fa-rocket mr-2" /> Book a Demo
              </button>
              <button
                onClick={() => setShowCTAModal(true)}
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

      {/* ═══════════ CTA MODAL ═══════════ */}
      {showCTAModal && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          onClick={(e) => { if (e.target === e.currentTarget) setShowCTAModal(false); }}
        >
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-900/75 backdrop-blur-sm" aria-hidden="true" />

            <div className="inline-block align-bottom glass-card rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Get Started
                  </h3>
                  <button
                    onClick={() => setShowCTAModal(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <i className="fas fa-times text-xl" />
                  </button>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Choose how you'd like to connect with us:
                </p>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/6285811144421?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20EMS%2B"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-green-500/50 transition-all transform hover:scale-105 text-center"
                  >
                    <i className="fab fa-whatsapp mr-3 text-xl" /> Chat on WhatsApp
                  </a>
                  <a
                    href="mailto:contact@arnatech.id?subject=EMS%2B%20Demo%20Request"
                    className="block w-full px-6 py-4 glass hover:bg-white/90 dark:hover:bg-gray-800/90 rounded-xl font-semibold shadow-lg transition-all transform hover:scale-105 text-center"
                  >
                    <i className="fas fa-envelope mr-3" /> Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
