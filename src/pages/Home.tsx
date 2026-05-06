import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, TrendingUp, Sparkles, Shield } from "lucide-react";
import CostCalculator from "@/components/CostCalculator";

const Home = () => (
  <Layout>
    {/* Hero — solid deep green, editorial */}
    <section className="relative bg-primary text-primary-foreground min-h-[88vh] flex items-center border-b border-border/30">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 md:px-12 lg:py-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-10">
            <span className="w-6 h-px bg-primary-foreground/50" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/70">
              Powered by LPT Realty
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] mb-8 text-balance">
            Why are you funding a brokerage you <span className="italic font-medium">don't use?</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-12 max-w-2xl">
            You're paying for an office you don't enter, training you don't take, and a brand you didn't build. The Foundation is a different kind of operating system. Lower cost, better tools, and a structure built around how you actually work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/realtors"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-primary rounded-sm text-sm font-semibold tracking-wide hover:bg-background/90 transition-colors"
            >
              See the agent advantage
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/leadership"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary-foreground/40 text-primary-foreground rounded-sm text-sm font-medium tracking-wide hover:bg-primary-foreground/5 transition-colors"
            >
              Leadership invitation
            </Link>
          </div>

          <p className="mt-16 text-xs tracking-wide text-primary-foreground/50">
            Question first? S2 is here. Bottom right corner. Always on.
          </p>
        </div>
      </div>
    </section>

    {/* Stats strip */}
    <section className="relative bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
        {[
          { num: "$0", label: "Monthly tech fees" },
          { num: "10K+", label: "Agents on the platform" },
          { num: "5", label: "AI agents included" },
          { num: "188+", label: "Marketing pieces shipped" },
        ].map((s) => (
          <div key={s.label} className="bg-background px-4 py-8 text-center">
            <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">{s.num}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-[0.15em]">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Two paths */}
    <section className="section-padding bg-background relative">
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-4">Two paths in</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-balance">
            Pick the door that fits where you are.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Realtor path */}
          <Link
            to="/realtors"
            className="group relative bg-card border border-border p-8 md:p-10 transition-colors hover:border-primary"
          >
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-sm bg-accent/20 text-primary mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">For working agents</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                The Agent Advantage
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're building, coasting, or somewhere in between — pick a structure that matches how you actually work. Lower cost, better tools, zero wasted overhead.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                See the model
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          {/* Leadership path */}
          <Link
            to="/leadership"
            className="group relative bg-primary text-primary-foreground p-8 md:p-10 transition-colors hover:bg-[hsl(var(--forest-deep))]"
          >
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-sm bg-primary-foreground/15 text-primary-foreground mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <p className="text-xs uppercase tracking-[0.15em] text-primary-foreground/70 mb-2">By invitation</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Leadership
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                A separate conversation for the people building markets, not just closing deals. Quieter room. Different math.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground group-hover:gap-3 transition-all">
                Enter the room
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>

    {/* Cost Calculator — sits directly above "Same hours. Different outcome." */}
    <section className="relative bg-muted/40 pt-16 pb-16 md:pt-24 md:pb-24 px-6 md:px-12 border-y border-border">
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-4">Run your numbers</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            See what you would actually keep.
          </h2>
          <p className="text-muted-foreground">
            Plug in your real splits, fees, and deal flow. The math doesn't lie.
          </p>
        </div>
        <CostCalculator />
      </div>
    </section>

    {/* Three pillars — flows directly out of the calculator */}
    <section className="pt-16 pb-20 md:pt-24 md:pb-28 px-6 md:px-12 lg:px-24 bg-primary text-primary-foreground relative">
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-4">The model</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-balance">
            Same hours. Different outcome.
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            You are already putting in the work. The difference is the model you work inside of.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Lower cost", desc: "Keep more of what you earn. Zero monthly fees, zero surprise bills. Whether you close 3 deals a year or 30, you're not subsidizing a model built for someone else." },
            { title: "Better tools", desc: "Five AI agents. A full CRM. An IDX site. 188+ marketing pieces. All included. Work from your kitchen table, your car, or a beach in Costa Rica. Same tools, everywhere." },
            { title: "Consistency", desc: "A workflow you can run at full speed or at 4 deals a year. No pressure. No performance reviews. A structure that works for your business, not the brokerage's growth targets." },
          ].map((item, i) => (
            <div
              key={item.title}
              className="border border-primary-foreground/20 p-8"
            >
              <div className="text-xs font-mono text-accent mb-6 tracking-wider">0{i + 1}</div>
              <h3 className="font-display text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Curious is enough to start.
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          Ask S2 anything. Run the numbers. Or just send a message. No pitch deck on standby.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("s2:open"))}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-sm text-sm font-semibold tracking-wide hover:bg-[hsl(var(--forest-deep))] transition-colors"
          >
            Talk to S2
          </button>
          <Link
            to="/contact"
            className="px-8 py-4 border border-foreground text-foreground rounded-sm text-sm font-medium tracking-wide hover:bg-muted transition-colors"
          >
            Reach Stu directly
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Home;
