import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Home = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="max-w-2xl mx-auto animate-fade-in">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
          The Foundation
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
          A system for agents who want to reduce cost, use better tools, and build a more consistent business.
        </p>
        <p className="text-sm text-muted-foreground/70 mb-10">
          Powered by LPT Realty.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/leadership"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Leadership
          </Link>
          <Link
            to="/realtors"
            className="px-8 py-3 border border-foreground/20 text-foreground rounded-md text-sm font-medium hover:bg-muted transition-colors"
          >
            Realtors
          </Link>
        </div>

        <p className="mt-16 text-xs text-muted-foreground/50">
          Have a question? S2 is available anytime.
        </p>
      </div>
    </section>

    {/* Brief values */}
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {[
          { title: "Lower cost", desc: "Reduce what you pay to operate. Keep more of what you earn." },
          { title: "Better tools", desc: "Use what works. Learn how to use it properly. Nothing extra." },
          { title: "Consistency", desc: "Build a business that produces steady, predictable results." },
        ].map((item) => (
          <div key={item.title}>
            <h3 className="font-display text-lg font-semibold mb-3">{item.title}</h3>
            <p className="text-sm opacity-70 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Home;
