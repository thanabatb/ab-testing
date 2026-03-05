import { PhoneBookVersionASearchScreen } from "@/features/phone-book-va";
import { filterContacts } from "@/features/phone-book-va/data/phone-book-version-a.data";
import { redirect } from "next/navigation";

type PhoneBookVersionASearchPageProps = {
  searchParams?: {
    q?: string;
  };
};

export default function PhoneBookVersionASearchPage({ searchParams }: PhoneBookVersionASearchPageProps) {
  const submittedQuery = typeof searchParams?.q === "string" ? searchParams.q : "";
  const query = submittedQuery.trim();

  if (!query) {
    redirect("/phone-book-va");
  }

  const results = filterContacts(query);

  if (!results.length) {
    redirect("/phone-book-va");
  }

  return <PhoneBookVersionASearchScreen query={query} resultCount={results.length} results={results} />;
}
