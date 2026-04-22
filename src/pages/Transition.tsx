import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Prepare",
    description:
      "Look at what the move actually changes. Costs, tools, timelines, paperwork. No pressure, no pitch. Just a clear picture before you decide.",
  },
  {
    number: "02",
    title: "Exit",
    description:
      "Handle your current brokerage cleanly. We walk through notice, releases, and anything that needs a signature. Nothing gets missed.",
  },
  {
    number: "03",
    title: "Onboard",
    description:
      "Set up your LPT account, IDX site, CRM, the 5 AI agents, and your marketing pack. Configured properly from day one so it works when you need it.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "First deals run through your new setup. Support is there when you want it. S2 is there when you do not feel like calling anyone.",
  },
];

const advantages = [
  { title: "0 monthly fees", desc: "No desk fees. No tech subscriptions stacked on top." },
  { title: "0 sign up fee", desc: "Just board and association transfer fees. Annual 1,150 comes out of your first deal." },
  { title: "Two plans", desc: "Brokerage Partner at 80/20 with a 15K cap, or Business Builder at 500 per deal with a 5K cap. Move between them as your business changes." },
  { title: "5 AI agents included", desc: "Sales, Social, ZipCode Blast, Listing Promoter, and Admin. Replaces a 2K per month assistant." },
  { title: "188+ marketing pieces", desc: "Printed, branded, shipped to your door before your first listing goes live." },
  { title: "Three pillars of wealth", desc: "Commission for today. HybridShare rev share for tomorrow. Pre IPO equity stock for the long game." },
];

const Transition = () => (
  <Layout>
    <section className="section-padding">
      <div className="max-w-3xl mx-auto animate-fade-in">
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Making the switch.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          It is simpler than it seems. Four steps. No surprises.
        </p>
        <p className="text-sm text-muted-foreground/80 leading-relaxed mb-16">
          The Foundation, powered by LPT Realty, is built to lower your cost, sharpen your tools, and make your business steady. The list below is what you actually get when you make the move.
        </p>

        {/* Steps */}
        <div className="space-y-12 mb-20">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="flex gap-6 items-start"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-semibold">
                {step.number}
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-2">{step.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* What you get */}
        <div className="mb-20">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-2">What you get.</h2>
          <p className="text-sm text-muted-foreground mb-8">
            The short version. Ask S2 if you want the long one.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((a) => (
              <div key={a.title} className="border border-border rounded-md p-5">
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Honest note */}
        <div className="mb-16 border-l-2 border-accent pl-6">
          <p className="text-sm text-muted-foreground leading-relaxed mb-2">
            A quick honest note.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This is not a recruitment pitch. If the model does not fit you, it does not fit you. The point of The Foundation is to give you a clear picture so you can decide without anyone leaning on you.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-muted rounded-lg p-6 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Got a specific question? S2 has the numbers, the contacts, and the plain English version.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("s2:open"))}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Ask S2
            </button>
            <Link
              to="/contact"
              className="px-8 py-3 border border-border text-foreground rounded-md text-sm font-medium hover:bg-background transition-colors"
            >
              Talk to Stu
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Transition;
