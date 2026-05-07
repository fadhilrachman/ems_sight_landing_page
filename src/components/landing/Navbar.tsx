import { useState, useEffect } from "react";
import { Settings, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Security", href: "#security" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#07070f]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            aria-label="EMS+ Home"
          >
            <img
              src="/emsplus-mark.svg"
              alt="EMS+ Logo"
              className="w-7 h-7 transition-transform duration-200 group-hover:scale-110"
            />
            <span className="text-white font-semibold text-base tracking-tight">
              EMS<span className="text-purple-400">+</span>{" "}
              <span className="text-zinc-400 font-normal">by Arnatech</span>
            </span>
          </a>

          {/* ── Desktop Nav Links ── */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-4 py-2 text-sm text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Right: Settings Icon + Mobile Toggle ── */}
          <div className="flex items-center gap-2">
            <button
              aria-label="Settings"
              className="hidden md:flex items-center justify-center w-9 h-9 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* Mobile menu toggle */}
            <button
              aria-label="Toggle menu"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              {isMobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>

        {/* ── Mobile Menu ── */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMobileOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          <ul className="flex flex-col gap-1 pt-2 border-t border-white/5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-4 py-2.5 text-sm text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
