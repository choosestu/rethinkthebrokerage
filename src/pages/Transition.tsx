import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Prepare",
    description:
      "Understand what the move looks like before you make it. Review costs, tools, and timelines. Get clear on what changes and what stays the same.",
  },
  {
    number: "02",
    title: "Exit",
    description:
      "Handle your current brokerage transition cleanly. We walk through the paperwork, notice periods, and anything that needs attention before you move.",
  },
  {
    number: "03",
    title: "Onboard",
    description:
      "Set up your LPT account, CRM, transaction tools, and marketing. Everything gets configured properly from the start so it works from day one.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Start working with your new setup. Your first transactions go through smoothly. Support is available. S2 is available for quick answers anytime.",
  },
];

const Transition = () => (
  <Layout>
    <section className="section-padding">
      <div className="max-w-2xl mx-auto animate-fade-in">
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Making the switch.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-16">
          It is simpler than it seems. Four clear steps. No surprises.
        </p>

        <div className="space-y-12">
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

        <div className="mt-16 bg-muted rounded-lg p-6 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            S2 can assist with questions at any step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Start the conversation
            </Link>
            <Link
              to="/s2"
              className="px-8 py-3 border border-border text-foreground rounded-md text-sm font-medium hover:bg-background transition-colors"
            >
              Ask S2
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Transition;
