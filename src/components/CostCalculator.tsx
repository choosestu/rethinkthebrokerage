import { useState, useMemo, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { Copy, TrendingDown, Building2, Sparkles } from "lucide-react";
import {
  BrokerageInputs, LptInputs,
  calcBrokerage, calcLpt, formatCurrency,
} from "@/lib/calculator";

const defaultBrokerage: BrokerageInputs = {
  dealsPerYear: 5, avgGciPerDeal: 20000, splitPercent: 20,
  annualCap: 20000, monthlyOfficeFee: 0, transactionFee: 0, royaltyPercent: 0,
};

const defaultLpt: LptInputs = {
  annualTechFee: 1150, crmSetupFee: 99, companyDollarPerDeal: 500,
  companyDollarCap: 5000, txnAdminFee: 275, monthlyCrmFee: 0, royaltyPercent: 0,
};

function CurrencyInput({ label, value, onChange, id }: { label: string; value: number; onChange: (v: number) => void; id: string }) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-sm font-medium text-muted-foreground">{label}</Label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
        <Input id={id} type="number" min={0} value={value} onChange={e => onChange(Number(e.target.value) || 0)} className="pl-7" />
      </div>
    </div>
  );
}

function SliderInput({ label, value, onChange, min, max, step, suffix, id }: {
  label: string; value: number; onChange: (v: number) => void;
  min: number; max: number; step: number; suffix: string; id: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <Label htmlFor={id} className="text-sm font-medium text-muted-foreground">{label}</Label>
        <div className="flex items-center gap-1.5">
          <Input id={id} type="number" min={min} max={max} step={step} value={value}
            onChange={e => onChange(Math.min(max, Math.max(min, Number(e.target.value) || 0)))}
            className="w-20 h-8 text-right text-sm" />
          <span className="text-sm text-muted-foreground w-4">{suffix}</span>
        </div>
      </div>
      <Slider value={[value]} onValueChange={([v]) => onChange(v)} min={min} max={max} step={step} className="mt-1" />
    </div>
  );
}

function BreakdownTable({ items }: { items: { label: string; value: number }[] }) {
  const total = items.reduce((s, i) => s + i.value, 0);
  return (
    <div className="rounded-xl border overflow-hidden shadow-sm">
      <table className="w-full text-sm">
        <tbody>
          {items.map((item, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-muted/30" : "bg-background"}>
              <td className="px-4 py-3 text-muted-foreground">{item.label}</td>
              <td className="px-4 py-3 text-right font-medium text-foreground">{formatCurrency(item.value)}</td>
            </tr>
          ))}
          <tr className="border-t-2 border-primary/20 bg-primary/5">
            <td className="px-4 py-3.5 font-semibold text-foreground">Total</td>
            <td className="px-4 py-3.5 text-right font-bold text-foreground text-base">{formatCurrency(total)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function CostCalculator() {
  const { toast } = useToast();
  const [brokerage, setBrokerage] = useState<BrokerageInputs>(defaultBrokerage);
  const [lpt, setLpt] = useState<LptInputs>(defaultLpt);

  const updateB = useCallback(<K extends keyof BrokerageInputs>(key: K, val: BrokerageInputs[K]) => {
    setBrokerage(prev => ({ ...prev, [key]: val }));
  }, []);
  const updateL = useCallback(<K extends keyof LptInputs>(key: K, val: LptInputs[K]) => {
    setLpt(prev => ({ ...prev, [key]: val }));
  }, []);

  const annualGci = brokerage.dealsPerYear * brokerage.avgGciPerDeal;
  const brokerageResult = useMemo(() => calcBrokerage(brokerage), [brokerage]);
  const lptResult = useMemo(() => calcLpt(brokerage.dealsPerYear, annualGci, lpt), [brokerage.dealsPerYear, annualGci, lpt]);
  const savings = brokerageResult.total - lptResult.total;

  const buildSummary = () => [
    `THE FOUNDATION | LPT Cost Calculator Summary`,
    `Annual GCI: ${formatCurrency(annualGci)} (${brokerage.dealsPerYear} deals × ${formatCurrency(brokerage.avgGciPerDeal)})`,
    `Your Brokerage: ${formatCurrency(brokerageResult.total)}`,
    `LPT Realty: ${formatCurrency(lptResult.total)}`,
    `Savings: ${formatCurrency(savings)}/year`,
  ].join('\n');

  const copySummary = async () => {
    await navigator.clipboard.writeText(buildSummary());
    toast({ title: "Copied!", description: "Summary copied to clipboard." });
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="text-center border-0 shadow-lg bg-card">
          <CardContent className="pt-6 pb-6">
            <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mx-auto mb-3">
              <Building2 className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-[0.15em]">Your Brokerage</p>
            <p className="text-3xl md:text-4xl font-bold font-display mt-1.5 text-foreground">{formatCurrency(brokerageResult.total)}</p>
            <p className="text-xs text-muted-foreground mt-1">estimated annual cost</p>
          </CardContent>
        </Card>
        <Card className="text-center border-0 shadow-lg bg-gradient-to-b from-accent/5 to-accent/10">
          <CardContent className="pt-6 pb-6">
            <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-[0.15em]">LPT Realty</p>
            <p className="text-3xl md:text-4xl font-bold font-display mt-1.5 text-foreground">{formatCurrency(lptResult.total)}</p>
            <p className="text-xs text-muted-foreground mt-1">estimated annual cost</p>
          </CardContent>
        </Card>
        <Card className={`text-center border-0 shadow-lg ${savings > 0 ? 'bg-gradient-gold' : 'bg-muted'}`}>
          <CardContent className="pt-6 pb-6">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 ${savings > 0 ? 'bg-highlight-foreground/15' : 'bg-muted-foreground/15'}`}>
              <TrendingDown className={`w-5 h-5 ${savings > 0 ? 'text-highlight-foreground' : 'text-muted-foreground'}`} />
            </div>
            <p className={`text-xs font-semibold uppercase tracking-[0.15em] ${savings > 0 ? 'text-highlight-foreground/80' : 'text-muted-foreground'}`}>
              {savings >= 0 ? 'Your Savings' : 'Additional Cost'}
            </p>
            <p className={`text-3xl md:text-4xl font-bold font-display mt-1.5 ${savings > 0 ? 'text-highlight-foreground' : 'text-foreground'}`}>
              {formatCurrency(Math.abs(savings))}
            </p>
            <p className={`text-xs mt-1 ${savings > 0 ? 'text-highlight-foreground/70' : 'text-muted-foreground'}`}>per year</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center">
        <Button variant="outline" onClick={copySummary} className="gap-2 rounded-full px-6 shadow-sm">
          <Copy className="w-4 h-4" /> Copy Summary
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Your Brokerage */}
        <Card className="border-0 shadow-lg rounded-2xl h-full">
          <CardHeader className="pb-4 border-b border-border/50">
            <CardTitle className="flex items-center gap-2.5 text-xl">
              <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                <Building2 className="w-4 h-4 text-muted-foreground" />
              </div>
              Your Brokerage
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 pt-6">
            <SliderInput id="deals" label="Deals per year" value={brokerage.dealsPerYear} onChange={v => updateB('dealsPerYear', v)} min={1} max={100} step={1} suffix="" />
            <CurrencyInput id="avg-gci" label="Average GCI per deal" value={brokerage.avgGciPerDeal} onChange={v => updateB('avgGciPerDeal', v)} />
            <SliderInput id="split" label="Split % paid to brokerage" value={brokerage.splitPercent} onChange={v => updateB('splitPercent', v)} min={0} max={50} step={1} suffix="%" />
            <CurrencyInput id="cap" label="Annual cap on split" value={brokerage.annualCap} onChange={v => updateB('annualCap', v)} />
            <CurrencyInput id="office-fee" label="Monthly office fee" value={brokerage.monthlyOfficeFee} onChange={v => updateB('monthlyOfficeFee', v)} />
            <CurrencyInput id="txn-fee" label="Transaction fee per deal" value={brokerage.transactionFee} onChange={v => updateB('transactionFee', v)} />
            <SliderInput id="royalty" label="Franchise / royalty fee %" value={brokerage.royaltyPercent} onChange={v => updateB('royaltyPercent', v)} min={0} max={10} step={0.5} suffix="%" />

            <div className="pt-3">
              <h4 className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-[0.15em]">Cost Breakdown</h4>
              <BreakdownTable items={[
                { label: "Commission Split", value: brokerageResult.splitCost },
                { label: "Office Fees (12 mo)", value: brokerageResult.officeCost },
                { label: "Transaction Fees", value: brokerageResult.transactionCost },
                { label: "Royalty / Franchise", value: brokerageResult.royaltyCost },
              ]} />
            </div>
          </CardContent>
        </Card>

        {/* LPT Realty */}
        <Card className="border-0 shadow-lg rounded-2xl ring-1 ring-accent/20 h-full">
          <CardHeader className="pb-4 border-b border-accent/20">
            <CardTitle className="flex items-center gap-2.5 text-xl">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-accent" />
              </div>
              LPT Realty
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <p className="text-sm text-muted-foreground">Based on {brokerage.dealsPerYear} deals and {formatCurrency(annualGci)} annual GCI.</p>

            <Accordion type="single" collapsible>
              <AccordionItem value="assumptions">
                <AccordionTrigger className="text-sm font-medium">Edit LPT Assumptions</AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2">
                  <CurrencyInput id="lpt-tech" label="Annual Tech / E&O Fee" value={lpt.annualTechFee} onChange={v => updateL('annualTechFee', v)} />
                  <CurrencyInput id="lpt-crm-setup" label="One-time CRM Setup Fee" value={lpt.crmSetupFee} onChange={v => updateL('crmSetupFee', v)} />
                  <CurrencyInput id="lpt-company" label="Company Dollar per deal" value={lpt.companyDollarPerDeal} onChange={v => updateL('companyDollarPerDeal', v)} />
                  <CurrencyInput id="lpt-cap" label="Cap on Company Dollar" value={lpt.companyDollarCap} onChange={v => updateL('companyDollarCap', v)} />
                  <CurrencyInput id="lpt-admin" label="Transaction Admin Fee per deal" value={lpt.txnAdminFee} onChange={v => updateL('txnAdminFee', v)} />
                  <CurrencyInput id="lpt-monthly-crm" label="Optional monthly CRM fee" value={lpt.monthlyCrmFee} onChange={v => updateL('monthlyCrmFee', v)} />
                  <SliderInput id="lpt-royalty" label="Optional royalty / franchise %" value={lpt.royaltyPercent} onChange={v => updateL('royaltyPercent', v)} min={0} max={10} step={0.5} suffix="%" />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="pt-3">
              <h4 className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-[0.15em]">Cost Breakdown</h4>
              <BreakdownTable items={[
                { label: "Company Dollar", value: lptResult.companyDollar },
                { label: "Transaction Admin", value: lptResult.txnAdmin },
                { label: "Annual Tech / E&O", value: lptResult.annualFee },
                { label: "CRM Setup (one-time)", value: lptResult.setupFee },
                { label: "Monthly CRM (12 mo)", value: lptResult.crmCost },
                { label: "Royalty / Franchise", value: lptResult.royaltyCost },
              ]} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}