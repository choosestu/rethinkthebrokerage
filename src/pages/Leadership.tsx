import { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const Leadership = () => {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim().toLowerCase() === "founders") {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!unlocked) {
    return (
      <Layout>
        <section className="min-h-[85vh] flex items-center justify-center relative">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-primary/5 backdrop-blur-lg" />

          {/* Password dialog */}
          <div className="relative z-10 bg-background border border-border rounded-lg shadow-xl p-8 max-w-sm w-full mx-6 animate-fade-in">
            <h2 className="font-display text-xl font-semibold text-foreground mb-2">Leadership</h2>
            <p className="text-sm text-muted-foreground mb-6">This area is for invited conversations.</p>
            <form onSubmit={handleSubmit}>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                placeholder="Enter password"
                className="w-full bg-muted rounded-md px-4 py-3 text-sm outline-none text-foreground placeholder:text-muted-foreground/50 mb-3"
                autoFocus
              />
              {error && <p className="text-xs text-destructive mb-3">Incorrect password.</p>}
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground rounded-md py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Enter
              </button>
            </form>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding animate-fade-in">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
            You were approached for a reason.
          </h1>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              This is not a mass invitation. You are here because someone believes you think differently about this business.
            </p>
            <p>
              The Foundation exists to build markets properly. Not to fill rosters. Not to chase numbers. To find the right people and give them the infrastructure to do better work.
            </p>
            <p>
              This is not for everyone. It is for people who want structure, clarity, and a long-term approach to building something real.
            </p>
            <p>
              If that resonates, the next step is simple. Start a conversation. No pitch. No timeline. Just a direct discussion about what this looks like.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity text-center"
            >
              Start a conversation
            </Link>
            <Link
              to="/s2"
              className="px-8 py-3 border border-border text-foreground rounded-md text-sm font-medium hover:bg-muted transition-colors text-center"
            >
              Ask S2 a question
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Leadership;
