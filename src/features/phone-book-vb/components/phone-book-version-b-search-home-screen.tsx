import {
  BriefcaseBusiness,
  ChevronLeft,
  Home,
  MessageCircleMore,
  ScanLine,
  Signal,
  SlidersHorizontal,
  UserSearch,
  UsersRound,
  Wifi
} from "lucide-react";
import Link from "next/link";
import type { ComponentType } from "react";

import { cn } from "@/lib/utils";

import type { CompanyCard, VersionBContact } from "../data/phone-book-version-b.data";

const imgVectorAvatar = "https://www.figma.com/api/mcp/asset/572f164f-3003-411d-b646-af9a8a369e8f";

type NavItem = {
  key: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  active?: boolean;
  badge?: string;
};

type PhoneBookVersionBSearchHomeScreenProps = {
  selectedCompany: CompanyCard;
  recentContacts: VersionBContact[];
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
        <img src={imgVectorAvatar} alt="" className="size-[30px]" width={30} height={30} />
      </div>
    </div>
  );
}

function RecentContactCard({ contact }: { contact: VersionBContact }) {
  return (
    <article className="flex w-full items-center gap-4 rounded-[24px] bg-white px-2 py-4 shadow-[0_0_10px_rgba(49,144,247,0.1)] backdrop-blur-[7.2px]">
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

export function PhoneBookVersionBSearchHomeScreen({ selectedCompany, recentContacts }: PhoneBookVersionBSearchHomeScreenProps) {
  return (
    <main className="min-h-screen bg-[#e8eaee] sm:py-6">
      <section className="relative mx-auto min-h-screen w-full max-w-[440px] overflow-hidden bg-[#f1f2f4] sm:min-h-[956px] sm:rounded-[28px] sm:shadow-2xl">
        <div className="absolute inset-x-0 top-0 h-[288px] bg-[linear-gradient(180deg,#2e8bd1_0%,#64ddf9_50.96%,rgba(100,221,249,0)_100%)]" />

        <div className="relative z-10 px-4 pt-5 text-[#454545]">
          <div className="mb-1 flex items-center justify-between">
            <p className="text-[20px] font-medium leading-none tracking-[-0.44px]">9:41</p>
            <div className="flex items-center gap-1.5">
              <Signal className="size-5" />
              <Wifi className="size-5" />
              <div className="h-[14px] w-[28px] rounded-[4px] border border-[#454545] p-[2px]">
                <div className="h-full w-[18px] rounded-[2px] bg-[#454545]" />
              </div>
            </div>
          </div>

          <Link
            href="/phone-book-vb"
            className="inline-flex h-[34px] items-center gap-2 rounded-[20px] bg-white/40 px-[10px] py-[3px] text-[16px] font-light text-[#202938] backdrop-blur-[4.7px]"
          >
            <ChevronLeft className="size-4" />
            กลับ
          </Link>

          <div className="mt-4 flex items-center gap-6 rounded-[24px] shadow-[0_0_10px_rgba(49,144,247,0.1)] backdrop-blur-[7.2px]">
            <div className="relative size-[60px] overflow-hidden rounded-[16px] bg-[#f3a7ad]">
              <img src={selectedCompany.logoSrc} alt={selectedCompany.name} className="size-full object-cover" width={60} height={60} />
            </div>
            <p className="text-[22px] font-bold leading-[1.3] text-black">{selectedCompany.name}</p>
          </div>

          <form action="/phone-book-vb/search/results" method="get" className="mt-4 flex items-center gap-3">
            <input type="hidden" name="company" value={selectedCompany.name} />
            <div className="flex h-[42px] w-[358px] items-center justify-between rounded-[8px] bg-[#f4f8fd] px-4">
              <input
                name="q"
                placeholder="placeholder"
                className="w-full bg-transparent text-[16px] font-light leading-[1.3] text-[#454545] placeholder:text-[#d1d4d9] focus:outline-none"
                aria-label="search contact"
              />
              <button type="submit" aria-label="search contact">
                <UserSearch className="size-5 text-[#454545]" />
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
        </div>

        <section className="relative z-10 px-4 pb-[112px] pt-4">
          <h2 className="text-[18px] font-bold leading-[1.3] text-[#111111]">ล่าสุด</h2>
          <div className="mt-4 flex flex-col gap-4">
            {recentContacts.map((contact) => (
              <RecentContactCard key={contact.id} contact={contact} />
            ))}
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
