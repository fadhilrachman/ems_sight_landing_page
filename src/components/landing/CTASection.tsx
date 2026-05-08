import { useModal } from "./ModalProvider";

export function CTASection() {
  const { openCTA } = useModal();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass-card rounded-3xl p-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to See the Unseen?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Transform your organization with comprehensive monitoring, aligned goals, and smart attendance-all in one platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={openCTA}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105"
            >
              <i className="fas fa-calendar-check mr-2" /> Book a Demo
            </button>
            <button
              onClick={openCTA}
              className="px-8 py-4 glass hover:bg-white/90 dark:hover:bg-gray-800/90 rounded-full font-semibold shadow-lg transition-all transform hover:scale-105"
            >
              <i className="fas fa-rocket mr-2" /> Start Free Trial
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <i className="fas fa-check-circle text-green-500 mr-2" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-check-circle text-green-500 mr-2" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-check-circle text-green-500 mr-2" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
