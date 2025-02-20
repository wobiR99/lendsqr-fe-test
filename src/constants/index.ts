import {
  audit_logs,
  decision,
  fees,
  fees_pricing,
  guarantors,
  karma,
  loans,
  messages,
  preferences,
  reports,
  savingProduct,
  savings,
  service_account,
  services,
  settlements,
  switchImg,
  transaction,
  users,
  whitelist,
} from "../assets";

export const customerOptions: { option: string; icon: string }[] = [
  {
    option: "Users",
    icon: users,
  },
  {
    option: "Guarantors",
    icon: guarantors,
  },
  {
    option: "Loans",
    icon: loans,
  },
  {
    option: "Decision Models",
    icon: decision,
  },
  {
    option: "Savings",
    icon: savings,
  },
  {
    option: "Loan Requests",
    icon: loans,
  },
  {
    option: "Whitelist",
    icon: whitelist,
  },
  {
    option: "Karma",
    icon: karma,
  },
];

export const businessOptions = [
  {
    option: "Organization",
    icon: switchImg,
  },
  {
    option: "Loan Products",
    icon: loans,
  },
  {
    option: "Savings Products",
    icon: savingProduct,
  },
  {
    option: "Fees and Charges",
    icon: fees,
  },
  {
    option: "Transactions",
    icon: transaction,
  },
  {
    option: "Services",
    icon: services,
  },
  {
    option: "Service Account",
    icon: service_account,
  },
  {
    option: "Settlements",
    icon: settlements,
  },
  {
    option: "Reports",
    icon: reports,
  },
];

export const settingsOption = [
  {
    option: "Preferences",
    icon: preferences,
  },
  {
    option: "Fees and Pricing",
    icon: fees_pricing,
  },
  {
    option: "Audit Logs",
    icon: audit_logs,
  },
  {
    option: "Systems Messages",
    icon: messages,
  },
];
