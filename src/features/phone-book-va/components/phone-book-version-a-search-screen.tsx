import {
  BriefcaseBusiness,
  Home,
  MessageCircleMore,
  Search,
  ScanLine,
  Signal,
  SlidersHorizontal,
  UsersRound,
  Wifi
} from "lucide-react";
import type { ComponentType } from "react";

import { cn } from "@/lib/utils";

import { companyOptions, profile, type Contact } from "../data/phone-book-version-a.data";
import { contactAvatarSrc } from "../../phone-book/shared/mock-image.data";
import { CompanyDropdown } from "./company-dropdown";

type NavItem = {
  key: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  active?: boolean;
  badge?: string;
};

type PhoneBookVersionASearchScreenProps = {
  query: string;
  resultCount: number;
  results: Contact[];
};

const navItems: NavItem[] = [
  { key: "home", label: "Home", icon: Home, active: true },
  { key: "scan", label: "Scan", icon: ScanLine },
  { key: "hrms", label: "HRMS", icon: BriefcaseBusiness },
  { key: "friend", label: "Friend", icon: UsersRound },
  { key: "chat", label: "Chat", icon: MessageCircleMore, badge: "99+" }
];

function AvatarBubble() {
  return (
    <div className="relative size-[60px] shrink-0 rounded-full bg-[#1f76d5]">
      <div className="absolute inset-0 grid place-items-center">
        <img src={contactAvatarSrc} alt="" className="size-[30px]" width={30} height={30} />
      </div>
    </div>
  );
}

function SearchResultCard({ contact }: { contact: Contact }) {
  return (
    <article className="flex w-full gap-2 rounded-[24px] bg-white px-2 py-4 shadow-[0_0_10px_rgba(49,144,247,0.1)] backdrop-blur-[7.2px]">
      <AvatarBubble />
      <div className="min-w-0 flex-1">
        <p className="text-[12px] font-light leading-[1.3] text-black">{contact.employeeId}</p>
        <p className="truncate text-[16px] font-bold leading-[1.3] text-black">{contact.name}</p>
        <p className="mt-1 text-[12px] font-bold leading-[1.3] text-[#4c5564]">{contact.role}</p>
        <p className="mt-2 truncate text-[12px] font-light leading-[1.3] text-[#6b7380]">{contact.division}</p>
      </div>
    </article>
  );
}

export function PhoneBookVersionASearchScreen({ query, resultCount, results }: PhoneBookVersionASearchScreenProps) {
  return (
    <main className="min-h-screen bg-[#e8eaee] sm:py-6">
      <section className="relative mx-auto min-h-screen w-full max-w-[440px] overflow-hidden bg-[#f1f2f4] sm:min-h-[956px] sm:rounded-[28px] sm:shadow-2xl">
        <div className="absolute inset-x-0 top-0 h-[288px] bg-[linear-gradient(180deg,#2e8bd1_0%,#64ddf9_50.96%,rgba(100,221,249,0)_100%)]" />

        <div className="relative z-10 px-4 pt-5 text-[#454545]">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-[20px] font-medium leading-none tracking-[-0.44px]">9:41</p>
            <div className="flex items-center gap-1.5">
              <Signal className="size-5" />
              <Wifi className="size-5" />
              <div className="h-[14px] w-[28px] rounded-[4px] border border-[#454545] p-[2px]">
                <div className="h-full w-[18px] rounded-[2px] bg-[#454545]" />
              </div>
            </div>
          </div>

          <CompanyDropdown companies={companyOptions} defaultCompany={profile.name} />

          <form action="/phone-book-va/search" method="get" className="mt-4 flex items-center gap-3">
            <div className="flex h-[42px] flex-1 items-center justify-between rounded-[8px] bg-[#f4f8fd] px-4">
              <input
                name="q"
                defaultValue={query}
                placeholder="ค้นหารายชื่อ"
                className="w-full bg-transparent text-[16px] font-light leading-[1.3] text-[#454545] placeholder:text-[#d1d4d9] focus:outline-none"
                aria-label="search contact"
              />
              <button type="submit" aria-label="search contact">
                <Search className="size-5 text-[#454545]" />
              </button>
            </div>
            <button
              type="button"
              className="grid size-[32px] place-items-center rounded-full border border-dashed border-[#3190f7] text-[#454545]"
              aria-label="open filter"
            >
              <SlidersHorizontal className="size-4" />
            </button>
          </form>

          <p className="mt-5 text-[16px] font-light leading-[1.3] text-black">{resultCount} รายการ</p>
        </div>

        <section className="relative z-10 px-4 pb-[112px] pt-4">
          <div className="flex flex-col gap-4">
            {results.length ? (
              results.map((contact) => <SearchResultCard key={contact.id} contact={contact} />)
            ) : (
              <div className="rounded-[24px] bg-white px-4 py-6 text-center text-[14px] text-[#6b7380] shadow-[0_0_10px_rgba(49,144,247,0.08)]">
                ไม่พบรายชื่อที่ค้นหา
              </div>
            )}
          </div>
        </section>

        <nav className="absolute inset-x-0 bottom-0 z-20 border-t border-[#d7d9df] bg-white px-[7px] pt-1">
          <ul className="flex items-end justify-between">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.key} className="relative w-[75px]">
                  {item.badge ? (
                    <span className="absolute right-0 top-0 rounded-full border-2 border-white bg-[#fa4d30] px-1.5 text-[14px] font-semibold leading-[20px] text-white">
                      {item.badge}
                    </span>
                  ) : null}
                  <button
                    type="button"
                    className={cn(
                      "flex w-full flex-col items-center gap-[4px] py-[8px]",
                      item.active ? "text-[#00a6e6]" : "text-[#8f9faf]"
                    )}
                  >
                    <Icon className="size-[24px]" />
                    <span className="text-[14.28px] font-light leading-[1.2]">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="h-[40px]" />
        </nav>
      </section>
    </main>
  );
}
