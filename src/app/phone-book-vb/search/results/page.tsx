import { PhoneBookVersionBSearchScreen } from "@/features/phone-book-vb";
import { companyCards, filterVersionBContacts } from "@/features/phone-book-vb/data/phone-book-version-b.data";
import { redirect } from "next/navigation";

type PhoneBookVersionBSearchResultsPageProps = {
  searchParams?: {
    company?: string;
    q?: string;
  };
};

export default function PhoneBookVersionBSearchResultsPage({ searchParams }: PhoneBookVersionBSearchResultsPageProps) {
  const companyName = typeof searchParams?.company === "string" ? searchParams.company : "";
  const query = typeof searchParams?.q === "string" ? searchParams.q.trim() : "";

  const selectedCompany = companyCards.find((company) => company.name === companyName);
  if (!selectedCompany) {
    redirect("/phone-book-vb");
  }

  const results = filterVersionBContacts(query, selectedCompany.name);

  return <PhoneBookVersionBSearchScreen query={query} selectedCompany={selectedCompany} results={results} />;
}

