import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="relative bg-gradient-graphite text-foreground overflow-hidden">
    {/* Curvy top edge */}
    <div className="absolute -top-12 left-0 right-0 h-24 bg-gradient-graphite rounded-[50%/100%] -translate-y-1/2" />
    {/* Glow blobs */}
    <div className="blob bg-accent/20 w-[500px] h-[500px] -top-40 -left-40" />
    <div className="blob bg-primary/20 w-[400px] h-[400px] -bottom-32 -right-32" />

    <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-accent shadow-[0_0_12px_hsl(var(--accent))]" />
            The Foundation
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Powered by LPT Realty. A system built for agents who want to work better.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 text-foreground/80">Navigate</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Leadership", path: "/leadership" },
              { label: "Realtors", path: "/realtors" },
              { label: "Transition", path: "/transition" },
              { label: "S2 Assistant", path: "/s2" },
              { label: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 text-foreground/80">Have a question?</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            S2 is available anytime to answer questions about tools, onboarding, and workflow.
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("s2:open"))}
            className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full bg-gradient-accent text-accent-foreground text-sm font-semibold shadow-glow hover:scale-[1.03] transition-transform"
          >
            Talk to S2
          </button>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border/50 text-center">
        <p className="text-xs text-muted-foreground/70">
          &copy; {new Date().getFullYear()} The Foundation. Powered by LPT Realty.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
