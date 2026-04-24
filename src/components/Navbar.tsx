import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Leadership", path: "/leadership" },
  { label: "Realtors", path: "/realtors" },
  { label: "Transition", path: "/transition" },
  { label: "S2", path: "/s2" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(96%,72rem)]">
      <div className="glass-card glow-border flex items-center justify-between px-6 py-3 shadow-soft">
        <Link to="/" className="font-display text-xl font-semibold text-foreground tracking-tight flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-accent shadow-[0_0_12px_hsl(var(--accent))]" />
          The Foundation
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === item.path ? "text-accent" : "text-foreground/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-card mt-2 animate-fade-in">
          <div className="flex flex-col px-6 py-4 gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium py-2 transition-colors ${
                  location.pathname === item.path ? "text-accent" : "text-foreground/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
