import { useState, useEffect } from "react";

const slides = [
  {
    src: "https://arnatech.ap-south-1.linodeobjects.com/public%2Fems-dashboard-1.png",
    mobileSrc: "https://arnatech.ap-south-1.linodeobjects.com/public%2Fems-dashboard-mobile-1.png",
    alt: "EMSight Dashboard - Activity Overview",
    label: "Activity Overview",
  },
  {
    src: "https://arnatech.ap-south-1.linodeobjects.com/public%2Fems-dashboard-2.png",
    mobileSrc: "https://arnatech.ap-south-1.linodeobjects.com/public%2Fems-dashboard-mobile-2.png",
    alt: "EMSight Dashboard - Risk Detection",
    label: "Risk Detection",
  },
  {
    src: "https://arnatech.ap-south-1.linodeobjects.com/public%2Fems-dashboard-3.png",
    mobileSrc: "https://arnatech.ap-south-1.linodeobjects.com/public%2Fems-dashboard-mobile-3.png",
    alt: "EMSight Dashboard - Analytics",
    label: "Analytics Dashboard",
  },
];

export function ProductWalkthroughSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((s) => (s + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((s) => (s === 0 ? slides.length - 1 : s - 1));
  const next = () => setCurrent((s) => (s + 1) % slides.length);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-dark-secondary/50">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real-Time Activity Dashboard
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Everything you need in one secure, intuitive view
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Real-Time Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">AI</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Powered Analysis</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">99%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Detection Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">&lt;5s</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Alert Response</div>
            </div>
          </div>

          {/* Slider */}
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 md:p-8 overflow-hidden">
            <div className="relative slider-aspect">
              {/* Images track */}
              <div
                className="flex transition-transform duration-500 ease-in-out items-stretch"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {slides.map((slide, i) => (
                  <div key={i} className="w-full flex-shrink-0 relative overflow-hidden rounded-lg h-full">
                    <picture>
                      <source media="(max-width: 640px)" srcSet={slide.mobileSrc} />
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-full object-cover rounded-lg shadow-2xl"
                        loading={i === 0 ? "eager" : "lazy"}
                      />
                    </picture>
                  </div>
                ))}
              </div>

              {/* Arrows */}
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
              >
                <i className="fas fa-chevron-left" />
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
              >
                <i className="fas fa-chevron-right" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-white" : "bg-white/50"}`}
                  />
                ))}
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 right-4 flex justify-between">
                <div className="glass px-4 py-2 rounded-lg">
                  <span className="text-white text-sm font-medium">{slides[current].label}</span>
                </div>
                <div className="glass px-4 py-2 rounded-lg">
                  <span className="text-white text-sm font-medium">{current + 1} / {slides.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
