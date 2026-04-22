import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, TrendingUp, Sparkles, Shield } from "lucide-react";
import CostCalculator from "@/components/CostCalculator";

const Home = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground grain min-h-[92vh] flex items-center">
      {/* Glow orbs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-accent/30 blur-3xl animate-pulse-glow" />
      <div className="absolute -bottom-40 -right-32 w-[600px] h-[600px] rounded-full bg-highlight/15 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 md:px-12 lg:py-32">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-highlight animate-pulse" />
            <span className="text-xs font-medium tracking-wider uppercase text-primary-foreground/80">
              Powered by LPT Realty
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-6 text-balance">
            Stop renting your <span className="italic text-sand">success.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed mb-10 max-w-2xl text-balance">
            The Foundation is a system for agents who want lower costs, better tools, and a business that produces results you can count on. No fluff. No theater.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/realtors"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-gold text-highlight-foreground rounded-md text-sm font-semibold shadow-gold hover:scale-[1.02] transition-transform"
            >
              See the agent advantage
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/leadership"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary-foreground/25 text-primary-foreground rounded-md text-sm font-medium hover:bg-primary-foreground/5 transition-colors"
            >
              Leadership invitation
            </Link>
          </div>

          <p className="mt-14 text-xs text-primary-foreground/50">
            Question first? S2 is here. Bottom right corner. Always on.
          </p>
        </div>
      </div>
    </section>

    {/* Stats strip */}
    <section className="bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { num: "$0", label: "Monthly tech fees" },
          { num: "10K+", label: "Agents on the platform" },
          { num: "5", label: "AI agents included" },
          { num: "188+", label: "Marketing pieces shipped" },
        ].map((s) => (
          <div key={s.label}>
            <div className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-1">{s.num}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Two paths */}
    <section className="section-padding bg-gradient-soft">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Two paths in</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground text-balance">
            Pick the door that fits where you are.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Realtor path */}
          <Link
            to="/realtors"
            className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 md:p-10 shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">For working agents</p>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
                The Agent Advantage
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Lower your costs. Pick a plan that fits your production. Plug into AI tools and a marketing department in a box.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                See the model
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          {/* Leadership path */}
          <Link
            to="/leadership"
            className="group relative overflow-hidden rounded-2xl bg-primary text-primary-foreground p-8 md:p-10 shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-highlight/20 rounded-full blur-3xl group-hover:bg-highlight/30 transition-colors" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-foreground/10 text-sand mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <p className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-2">By invitation</p>
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">
                Leadership
              </h3>
              <p className="text-primary-foreground/75 leading-relaxed mb-6">
                A separate conversation for the people building markets, not just closing deals. Quieter room. Different math.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-sand group-hover:gap-3 transition-all">
                Enter the room
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>

    {/* Cost Calculator — sits directly above "Same hours. Different outcome." */}
    <section className="bg-background pt-16 pb-12 md:pt-24 md:pb-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Run your numbers</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4 text-balance">
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
    <section className="pt-12 pb-16 md:pt-20 md:pb-28 px-6 md:px-12 lg:px-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Sparkles className="w-6 h-6 text-sand mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4 text-balance">
            Same hours. Different outcome.
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            You are already putting in the work. The difference is the model you work inside of.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Lower cost", desc: "Keep more of what you earn. Zero monthly tech fees. Real numbers, no surprises." },
            { title: "Better tools", desc: "Five AI agents working 24/7. A CRM, IDX site, and marketing pieces that actually get used." },
            { title: "Consistency", desc: "A workflow that produces predictable results, month after month. Boring on purpose." },
          ].map((item, i) => (
            <div
              key={item.title}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-8 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="text-xs font-mono text-sand mb-4">0{i + 1}</div>
              <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6 text-balance">
          Curious is enough to start.
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          Ask S2 anything. Run the numbers. Or just send a message. No pitch deck on standby.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/s2"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Talk to S2
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 border border-border text-foreground rounded-md text-sm font-medium hover:bg-muted transition-colors"
          >
            Reach Stu directly
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Home;
