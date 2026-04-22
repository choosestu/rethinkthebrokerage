export interface BrokerageInputs {
  dealsPerYear: number;
  avgGciPerDeal: number;
  splitPercent: number;
  annualCap: number;
  monthlyOfficeFee: number;
  transactionFee: number;
  royaltyPercent: number;
}

export interface LptInputs {
  annualTechFee: number;
  crmSetupFee: number;
  companyDollarPerDeal: number;
  companyDollarCap: number;
  txnAdminFee: number;
  monthlyCrmFee: number;
  royaltyPercent: number;
}

export interface BrokerageBreakdown {
  splitCost: number;
  officeCost: number;
  transactionCost: number;
  royaltyCost: number;
  total: number;
}

export interface LptBreakdown {
  companyDollar: number;
  txnAdmin: number;
  annualFee: number;
  setupFee: number;
  crmCost: number;
  royaltyCost: number;
  total: number;
}

export function calcBrokerage(inputs: BrokerageInputs): BrokerageBreakdown {
  const annualGci = inputs.dealsPerYear * inputs.avgGciPerDeal;
  const splitCostRaw = annualGci * (inputs.splitPercent / 100);
  const splitCost = inputs.annualCap > 0 ? Math.min(splitCostRaw, inputs.annualCap) : splitCostRaw;
  const officeCost = inputs.monthlyOfficeFee * 12;
  const transactionCost = inputs.dealsPerYear * inputs.transactionFee;
  const royaltyCost = annualGci * (inputs.royaltyPercent / 100);
  return { splitCost, officeCost, transactionCost, royaltyCost, total: splitCost + officeCost + transactionCost + royaltyCost };
}

export function calcLpt(deals: number, annualGci: number, inputs: LptInputs): LptBreakdown {
  const companyDollar = Math.min(deals * inputs.companyDollarPerDeal, inputs.companyDollarCap);
  const txnAdmin = deals * inputs.txnAdminFee;
  const annualFee = inputs.annualTechFee;
  const setupFee = inputs.crmSetupFee;
  const crmCost = inputs.monthlyCrmFee * 12;
  const royaltyCost = annualGci * (inputs.royaltyPercent / 100);
  return { companyDollar, txnAdmin, annualFee, setupFee, crmCost, royaltyCost, total: companyDollar + txnAdmin + annualFee + setupFee + crmCost + royaltyCost };
}

export function formatCurrency(value: number): string {
  return '$' + value.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}