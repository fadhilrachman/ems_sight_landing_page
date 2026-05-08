import { useState, useEffect } from "react";

const slides = [
  {
    src: "https://arnatech.ap-south-1.linodeobjects.com/public%2Fems-dashboard-1.png",
    mobileSrc: "https://arnatech.ap-south-1.linodeobjects.com/public%2Fems-dashboard-mobile-1.png",
    alt: "EMS+ Dashboard - Activity Overview",
    label: "Activity Overview",
  },
  {
    src: "https://arnatech.ap-south-1.linodeobjects.com/public%2Fems-dashboard-2.png",
    mobileSrc: "https://arnatech.ap-south-1.linodeobjects.com/public%2Fems-dashboard-mobile-2.png",
    alt: "EMS+ Dashboard - Risk Detection",
    label: "Risk Detection",
  },
  {
    src: "https://arnatech.ap-south-1.linodeobjects.com/public%2Fems-dashboard-3.png",
    mobileSrc: "https://arnatech.ap-south-1.linodeobjects.com/public%2Fems-dashboard-mobile-3.png",
    alt: "EMS+ Dashboard - Analytics",
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
    <section
      id="product-walkthrough"
      className="section-alt"
      style={{ paddingTop: "5rem", paddingBottom: "5rem", paddingLeft: "1rem", paddingRight: "1rem" }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <div className="text-center" style={{ marginBottom: "4rem" }}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white" style={{ marginBottom: "1rem" }}>
            Real-Time Activity Dashboard
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Everything you need in one secure, intuitive view
          </p>
        </div>

        <div className="glass-card rounded-3xl" style={{ padding: "2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", marginBottom: "2rem" }}>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400" style={{ marginBottom: "0.5rem" }}>24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Real-Time Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400" style={{ marginBottom: "0.5rem" }}>AI</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Powered Analysis</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400" style={{ marginBottom: "0.5rem" }}>99%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Detection Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400" style={{ marginBottom: "0.5rem" }}>&lt;5s</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Alert Response</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden" style={{ padding: "1rem", position: "relative" }}>
            <div style={{ position: "relative", width: "100%", paddingBottom: "44.9%", height: 0, overflow: "hidden", borderRadius: "0.5rem" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "flex", alignItems: "stretch", transition: "transform 0.5s ease-in-out", transform: `translateX(-${current * 100}%)` }}>
                {slides.map((slide, i) => (
                  <div key={i} style={{ minWidth: "100%", height: "100%", flexShrink: 0, position: "relative", overflow: "hidden" }}>
                    <picture style={{ display: "contents" }}>
                      <source media="(max-width: 640px)" srcSet={slide.mobileSrc} />
                      <img src={slide.src} alt={slide.alt} className="rounded-lg shadow-2xl" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} loading={i === 0 ? "eager" : "lazy"} />
                    </picture>
                  </div>
                ))}
              </div>

              <button onClick={prev} aria-label="Previous slide" className="absolute top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all" style={{ left: "1rem", width: "3rem", height: "3rem", border: "none", cursor: "pointer", zIndex: 10 }}>
                <i className="fas fa-chevron-left" />
              </button>

              <button onClick={next} aria-label="Next slide" className="absolute top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all" style={{ right: "1rem", width: "3rem", height: "3rem", border: "none", cursor: "pointer", zIndex: 10 }}>
                <i className="fas fa-chevron-right" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex" style={{ gap: "0.5rem", zIndex: 10 }}>
                {slides.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} aria-label={`Go to slide ${i + 1}`} className="rounded-full transition-all" style={{ width: "0.75rem", height: "0.75rem", border: "none", cursor: "pointer", padding: 0, background: i === current ? "#ffffff" : "rgba(255,255,255,0.5)" }} />
                ))}
              </div>

              <div className="absolute top-4 flex justify-between" style={{ left: "1rem", right: "1rem", zIndex: 10 }}>
                <div className="glass rounded-lg" style={{ padding: "0.5rem 1rem" }}>
                  <span className="text-white text-sm font-medium">{slides[current].label}</span>
                </div>
                <div className="glass rounded-lg" style={{ padding: "0.5rem 1rem" }}>
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
