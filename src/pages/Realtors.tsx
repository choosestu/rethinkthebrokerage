import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CostCalculator from "@/components/CostCalculator";
import {
  ArrowRight,
  Check,
  X,
  Bot,
  Megaphone,
  MapPin,
  Briefcase,
  Sparkles,
  TrendingUp,
  DollarSign,
  Zap,
} from "lucide-react";

const Realtors = () => (
  <Layout>
    {/* Pattern interrupt hero */}
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground grain min-h-[80vh] flex items-center">
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-highlight/15 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-accent/25 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-24 lg:py-32 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm mb-8">
          <span className="text-xs font-medium tracking-wider uppercase text-sand">For working agents</span>
        </div>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-8 text-balance max-w-4xl">
          What if your brokerage is <span className="italic text-sand">working against you?</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed max-w-2xl mb-10 text-balance">
          You close the deals. You generate the leads. You build the relationships. And every time you do, a chunk of it walks out the door.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-gold text-highlight-foreground rounded-md text-sm font-semibold shadow-gold hover:scale-[1.02] transition-transform"
          >
            Book a 15-minute call
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("s2:open"))}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary-foreground/25 text-primary-foreground rounded-md text-sm font-medium hover:bg-primary-foreground/5 transition-colors"
          >
            Ask S2 first
          </button>
        </div>
      </div>
    </section>

    {/* Old guard vs LPT */}
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">The Old Guard vs. LPT</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground text-balance">
            Are you a tenant, or a partner?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Old Guard */}
          <div className="rounded-2xl border border-border bg-muted/40 p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-destructive/15 flex items-center justify-center">
                <X className="w-4 h-4 text-destructive" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">The Old Guard</h3>
            </div>
            <ul className="space-y-4 text-sm text-muted-foreground">
              {[
                "High monthly desk fees for tools you barely use",
                "Generic CRM, generic everything",
                "Marketing is your problem and your budget",
                "Income capped by what you close alone",
                "You pay to use their logo",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <X className="w-4 h-4 mt-0.5 text-destructive/70 flex-shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* LPT */}
          <div className="relative rounded-2xl bg-gradient-accent text-primary-foreground p-8 shadow-glow overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-highlight/20 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-highlight flex items-center justify-center">
                  <Check className="w-4 h-4 text-highlight-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold">LPT Realty</h3>
              </div>
              <ul className="space-y-4 text-sm text-primary-foreground/90">
                {[
                  "$0 monthly tech fees. AI tools included.",
                  "188+ marketing pieces shipped to your door",
                  "5 specialized AI agents working 24/7",
                  "Revenue share, equity, 12+ income paths",
                  "Your brand, amplified by a national platform",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <Check className="w-4 h-4 mt-0.5 text-sand flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Two compensation paths */}
    <section className="section-padding bg-gradient-soft">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Choose your path</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4 text-balance">
            Two plans. Your call.
          </h2>
          <p className="text-muted-foreground">
            Switch between them as your business grows. No penalties, no waiting period.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-glow transition-shadow">
            <p className="text-xs uppercase tracking-wider text-accent mb-3">For established producers</p>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-2">Brokerage Partner</h3>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-display text-4xl font-semibold text-foreground">$15,000</span>
              <span className="text-sm text-muted-foreground">cap</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">80/20 split until you cap. Then 100% to you.</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent mt-0.5" /> Maximum earning potential</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent mt-0.5" /> Best for downline builders</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent mt-0.5" /> Move down on your anniversary</li>
            </ul>
          </div>

          <div className="relative bg-primary text-primary-foreground rounded-2xl p-8 shadow-soft overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-highlight/15 rounded-full blur-3xl" />
            <div className="relative">
              <p className="text-xs uppercase tracking-wider text-sand mb-3">Build the business</p>
              <h3 className="font-display text-2xl font-semibold mb-2">Business Builder</h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-display text-4xl font-semibold">$5,000</span>
                <span className="text-sm text-primary-foreground/60">cap</span>
              </div>
              <p className="text-sm text-primary-foreground/70 mb-6">$500/transaction. Money in your pocket, fast.</p>
              <ul className="space-y-3 text-sm text-primary-foreground/80">
                <li className="flex gap-2"><Check className="w-4 h-4 text-sand mt-0.5" /> Lower cap, faster recovery</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-sand mt-0.5" /> Move up anytime, no penalty</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-sand mt-0.5" /> $275 brokerage fee passed to client</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          Not sure which fits? Ask S2 to walk you through it.
        </p>
      </div>
    </section>

    {/* AI Agents */}
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Your 24/7 digital team</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4 text-balance">
            Five AI agents. Zero monthly fee.
          </h2>
          <p className="text-muted-foreground">
            While your competitors juggle five subscriptions, you get a full AI stack included.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: Bot, name: "AI Sales Agent", desc: "A 24/7 ISA that engages leads, answers questions, and books appointments while you sleep." },
            { icon: Megaphone, name: "AI Social Agent", desc: "Pulls from your MLS feed, creates and posts content across every platform. Consistency on autopilot." },
            { icon: MapPin, name: "ZipCode Blast", desc: "Hyper-local farming via postal code targeting. Own your neighbourhood digitally." },
            { icon: Zap, name: "Listing Promoter", desc: "Every new listing fires social posts, email blasts, and digital ads the moment it goes live." },
            { icon: Briefcase, name: "AI Admin", desc: "Database management, task automation, CRM workflow. Your back office on autopilot." },
            { icon: Sparkles, name: "+ IDX Website", desc: "A fully branded, MLS-integrated, lead-capturing site. Yours from day one." },
          ].map((a, i) => (
            <div
              key={a.name}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-accent/40 hover:shadow-soft transition-all"
            >
              <div className="text-xs font-mono text-muted-foreground mb-3">Agent 0{i + 1}</div>
              <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <a.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{a.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-md mx-auto bg-gradient-gold rounded-xl p-6 text-center shadow-gold">
          <p className="text-xs uppercase tracking-wider text-highlight-foreground/70 mb-1">Replaces a</p>
          <p className="font-display text-3xl font-semibold text-highlight-foreground">$2,000/month</p>
          <p className="text-sm text-highlight-foreground/80">human assistant. Included with LPT.</p>
        </div>
      </div>
    </section>

    {/* Pricing transparency */}
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-sand mb-4">True transparency</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4 text-balance">
            No surprises. No hidden costs.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: "Sign-up fees", value: "$0", note: "Just board transfer fees." },
            { label: "Monthly fees", value: "$0", note: "Keep more of what you earn." },
            { label: "Annual fee", value: "$1,150", note: "Withheld from first deal only." },
          ].map((p) => (
            <div key={p.label} className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-8 text-center">
              <p className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-3">{p.label}</p>
              <p className="font-display text-4xl md:text-5xl font-semibold text-sand mb-2">{p.value}</p>
              <p className="text-sm text-primary-foreground/70">{p.note}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-primary-foreground/60 mt-10 italic">
          You don't pay until you make money.
        </p>
      </div>
    </section>

    {/* Calculator + benefits */}
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Money in the bank</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4 text-balance">
            See the difference on paper.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Most agents are shocked when they actually run the math. Not what they think they make. What they actually keep.
          </p>
        </div>

        <CostCalculator />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {[
            { title: "Less taken on every deal", desc: "Low flat cap, then 100% commission. No bleeding all year." },
            { title: "Multiple income streams", desc: "Revenue share, equity, bonus programs. Income that compounds." },
            { title: "Marketing department included", desc: "188+ pieces, IDX site, AI tools, all done for you." },
            { title: "Real human support", desc: "Stu has 30 years in the industry. He picks up the phone." },
          ].map((item, i) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent text-xs font-mono flex items-center justify-center">
                0{i + 1}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Three ways forward CTA */}
    <section className="section-padding bg-gradient-soft">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Three ways forward</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground text-balance">
            Pick what fits where you are.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: TrendingUp, title: "The Strategy Call", desc: "15 minutes. A quick audit. No pitch." },
            { icon: Sparkles, title: "Ask S2 Anything", desc: "Get answers right now. Save the call for later." },
            { icon: DollarSign, title: "Run the Wealth Map", desc: "Real numbers, real projections. Private." },
          ].map((c) => (
            <div key={c.title} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-soft transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                <c.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-md text-sm font-semibold hover:opacity-90 transition-opacity text-center"
          >
            Get in touch with Stu
          </Link>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("s2:open"))}
            className="px-8 py-4 border border-border bg-card text-foreground rounded-md text-sm font-medium hover:bg-muted transition-colors text-center"
          >
            Ask S2
          </button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Realtors;