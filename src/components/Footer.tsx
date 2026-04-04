import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-primary text-primary-foreground">
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-lg font-semibold mb-3">The Foundation</h3>
          <p className="text-sm opacity-70 leading-relaxed max-w-xs">
            Powered by LPT Realty. A system built for agents who want to work better.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 opacity-80">Navigate</h4>
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
                className="text-sm opacity-60 hover:opacity-100 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 opacity-80">Have a question?</h4>
          <p className="text-sm opacity-60 leading-relaxed">
            S2 is available anytime to answer questions about tools, onboarding, and workflow.
          </p>
          <Link
            to="/s2"
            className="inline-block mt-4 text-sm font-medium text-secondary hover:opacity-80 transition-opacity"
          >
            Talk to S2
          </Link>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-primary-foreground/10 text-center">
        <p className="text-xs opacity-40">
          &copy; {new Date().getFullYear()} The Foundation. Powered by LPT Realty.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
