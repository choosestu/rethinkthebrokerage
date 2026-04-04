import { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const CostCalculator = () => {
  const [gci, setGci] = useState(80000);
  const [currentSplit, setCurrentSplit] = useState(70);

  const currentKeep = gci * (currentSplit / 100);
  const currentFees = gci - currentKeep;
  const lptKeep = gci * 0.85; // simplified LPT model
  const lptFees = gci - lptKeep;
  const savings = lptKeep - currentKeep;

  return (
    <div className="bg-muted rounded-lg p-6 md:p-8">
      <h3 className="font-display text-lg font-semibold text-foreground mb-6">Cost comparison</h3>

      <div className="space-y-5">
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">
            Annual GCI: ${gci.toLocaleString()}
          </label>
          <input
            type="range"
            min={30000}
            max={300000}
            step={5000}
            value={gci}
            onChange={(e) => setGci(Number(e.target.value))}
            className="w-full accent-accent"
          />
        </div>

        <div>
          <label className="text-sm text-muted-foreground mb-2 block">
            Current split: {currentSplit}%
          </label>
          <input
            type="range"
            min={50}
            max={90}
            step={5}
            value={currentSplit}
            onChange={(e) => setCurrentSplit(Number(e.target.value))}
            className="w-full accent-accent"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Current fees</p>
            <p className="text-lg font-semibold text-foreground">${currentFees.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">With LPT</p>
            <p className="text-lg font-semibold text-accent">${lptFees.toLocaleString()}</p>
          </div>
        </div>

        {savings > 0 && (
          <div className="bg-accent/10 rounded-md px-4 py-3">
            <p className="text-sm text-accent font-medium">
              Estimated annual savings: ${savings.toLocaleString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const Realtors = () => (
  <Layout>
    {/* Intro */}
    <section className="section-padding">
      <div className="max-w-2xl mx-auto animate-fade-in">
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
          For working agents.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          This is about improving how you work. Lower costs. Better tools. More consistent results.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          You do not need to recruit anyone. You need to improve your business. Everything else follows.
        </p>
      </div>
    </section>

    {/* How it works */}
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-2xl font-semibold mb-10">What happens when you improve</h2>
        <div className="space-y-6 text-sm leading-relaxed opacity-80">
          <p>You reduce your costs. Your workflow becomes clearer. Your income becomes more predictable.</p>
          <p>Your work becomes more consistent. Your results improve. Your business becomes more stable.</p>
          <p>This becomes visible. People around you notice. Conversations happen naturally.</p>
          <p>Growth of your network is a byproduct. Not the goal.</p>
        </div>
      </div>
    </section>

    {/* Benefits + Calculator */}
    <section className="section-padding">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-8">Daily benefits</h2>
          <div className="space-y-6">
            {[
              { title: "Clearer workflow", desc: "Know what to do each day. No guessing. No wasted steps." },
              { title: "More predictable income", desc: "A system that produces results you can count on." },
              { title: "Less wasted effort", desc: "Stop paying for things you do not use. Stop doing things that do not work." },
              { title: "Tools that work", desc: "CRM, transaction management, marketing. Set up properly. Used daily." },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <CostCalculator />
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-muted">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
          Ready to look at this closer?
        </h2>
        <p className="text-sm text-muted-foreground mb-8">
          S2 can answer practical questions about tools, onboarding, and day-to-day work.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get in touch
          </Link>
          <Link
            to="/s2"
            className="px-8 py-3 border border-border text-foreground rounded-md text-sm font-medium hover:bg-background transition-colors"
          >
            Ask S2
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Realtors;
