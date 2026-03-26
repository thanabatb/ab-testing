import { createCompanyLogoSvg } from "./mock-image.data";

export type CompanyMock = {
  id: string;
  name: string;
  logoSrc: string;
};

export const phoneBookCompanies: CompanyMock[] = [
  {
    id: "company-1",
    name: "Teddy bank",
    logoSrc: createCompanyLogoSvg("TB", { bg: "#F3A7AD", accent: "#FFFFFF", text: "#7A0F1B" })
  },
  {
    id: "company-2",
    name: "CTK",
    logoSrc: createCompanyLogoSvg("CK", { bg: "#1F76D5", accent: "#7CE3F8", text: "#FFFFFF" })
  },
  {
    id: "company-3",
    name: "Infinity",
    logoSrc: createCompanyLogoSvg("IN", { bg: "#27324A", accent: "#F8C14C", text: "#F7FAFC" })
  },
  {
    id: "company-4",
    name: "Arai",
    logoSrc: createCompanyLogoSvg("AR", { bg: "#E8EEF9", accent: "#1F76D5", text: "#1E3561" })
  }
];
