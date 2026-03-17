import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, FolderGit2, FileText, Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Projects", path: "/project", icon: FolderGit2 },
  { name: "Resume", path: "/resume", icon: FileText },
];

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "py-3 bg-white/80 backdrop-blur-xl border-b border-brand-border shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tighter text-brand-light flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
           <span className="flex items-center gap-2">
  <img
    src="https://futureinterns.com/wp-content/uploads/2025/05/cropped-cropped-Future-Interns-Site-Logo.png"
    alt="Future Interns Logo"
    className="w-10 h-10 object-contain"
  />

  <span className="text-3xl font-semibold whitespace-nowrap">
    Future <span className="text-green-500">Interns</span>
  </span>
</span>
          </motion.div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={cn(
                    "relative flex items-center gap-2 text-sm font-medium transition-colors hover:text-brand-primary group",
                    isActive ? "text-brand-primary" : "text-brand-light/60"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-[2px] bg-brand-primary transition-all duration-300 rounded-full",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </Link>
              </motion.div>
            );
          })}
        </nav>

        <button
          className="md:hidden text-brand-light/80 hover:text-brand-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-2xl border-b border-brand-border"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={cn(
                      "flex items-center gap-3 py-2 text-lg font-medium transition-colors",
                      isActive ? "text-brand-primary" : "text-brand-light/70 hover:text-brand-primary"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default NavBar;
