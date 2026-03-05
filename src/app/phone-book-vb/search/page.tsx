import { PhoneBookScreenTracker } from "@/components/analytics/phone-book-screen-tracker";
import { PhoneBookVersionBSearchHomeScreen } from "@/features/phone-book-vb";
import { companyCards, filterVersionBContacts } from "@/features/phone-book-vb/data/phone-book-version-b.data";
import { redirect } from "next/navigation";

type PhoneBookVersionBSearchPageProps = {
  searchParams?: {
    company?: string;
    q?: string;
  };
};

export default function PhoneBookVersionBSearchPage({ searchParams }: PhoneBookVersionBSearchPageProps) {
  const companyName = typeof searchParams?.company === "string" ? searchParams.company : "";
  const selectedCompany = companyCards.find((company) => company.name === companyName);
  if (!selectedCompany) {
    redirect("/phone-book-vb");
  }

  const recentContacts = filterVersionBContacts("", selectedCompany.name).slice(0, 3);

  return (
    <>
      <PhoneBookScreenTracker
        version="B"
        screenName="vb_search_home"
        properties={{
          selected_company: selectedCompany.name,
          recent_contacts_count: recentContacts.length
        }}
      />
      <PhoneBookVersionBSearchHomeScreen selectedCompany={selectedCompany} recentContacts={recentContacts} />
    </>
  );
}
