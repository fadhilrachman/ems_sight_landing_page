import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Features",  href: "#features"  },
  { label: "Security",  href: "#security"  },
  { label: "Use Cases", href: "#use-cases" },
  { label: "FAQ",       href: "#faq"       },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    const isDark = saved !== null ? saved === "true" : false;
    setDarkMode(isDark);
    applyTheme(isDark);
  }, []);

  const applyTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
    document.body.style.color = isDark ? "#f3f4f6" : "#1f2937";
  };

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem("darkMode", String(next));
    applyTheme(next);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-lg">
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem" }}>
        <div className="flex justify-between items-center" style={{ height: "4rem" }}>

          <div className="flex items-center" style={{ gap: "0.75rem" }}>
            <div
              className="rounded-lg flex items-center justify-center shadow-lg overflow-hidden"
              style={{ width: "2.5rem", height: "2.5rem", flexShrink: 0 }}
            >
              <img
                src="https://arnatech.ap-south-1.linodeobjects.com/public%2Femsplus-mark.svg"
                alt="EMS+ logo"
                className="w-full h-full"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EMS+ by Arnatech
            </span>
          </div>

          <div className="hidden md:flex items-center" style={{ gap: "2rem" }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-white/20 dark:hover:bg-gray-800/50 transition-colors duration-200 text-gray-700 dark:text-gray-300"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`} />
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg hover:bg-white/20 dark:hover:bg-gray-800/50 transition-colors text-gray-700 dark:text-gray-300"
            aria-label="Toggle mobile menu"
          >
            <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`} />
          </button>

        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-white/20">
          <div className="px-4 py-4" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
