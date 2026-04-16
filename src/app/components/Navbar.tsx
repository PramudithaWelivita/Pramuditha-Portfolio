import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { Home, Briefcase, Music, Gamepad2 } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { path: "/", label: "Home", icon: Home },
    { path: "/work", label: "Work", icon: Briefcase },
    { path: "/music", label: "Music", icon: Music },
    { path: "/gaming", label: "Gaming", icon: Gamepad2 },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              PW
            </span>
          </Link>

          <div className="flex items-center gap-8">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span
                      className={`transition-colors ${
                        isActive
                          ? "text-purple-400"
                          : "text-gray-400 group-hover:text-white"
                      }`}
                    >
                      {link.label}
                    </span>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
