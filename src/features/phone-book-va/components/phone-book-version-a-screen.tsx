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
import Link from "next/link";
import type { ComponentType } from "react";

import { cn } from "@/lib/utils";

import { companyOptions, favoriteContacts, latestContacts, profile, type Contact } from "../data/phone-book-version-a.data";
import { contactAvatarSrc } from "../../phone-book/shared/mock-image.data";
import { CompanyDropdown } from "./company-dropdown";

type NavItem = {
  key: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  active?: boolean;
  badge?: string;
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

function LatestContactCard({ contact }: { contact: Contact }) {
  return (
    <article className="flex min-w-[272px] gap-4 rounded-[24px] bg-white px-2 py-4 shadow-[0_0_10px_rgba(49,144,247,0.1)] backdrop-blur-[7.2px]">
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

function FavoriteContactItem({ contact }: { contact: Contact }) {
  return (
    <div className="w-[68px] shrink-0" title={contact.name}>
      <AvatarBubble />
      <p className="mt-2 text-center text-[11px] font-medium leading-[1.2] text-[#111111] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
        {contact.name}
      </p>
    </div>
  );
}

export function PhoneBookVersionAScreen() {
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

          <form action="/phone-book-va/search" method="get" className="mt-14 flex items-center gap-3">
            <div className="flex h-[42px] flex-1 items-center justify-between rounded-[8px] bg-[#f4f8fd] px-4">
              <input
                name="q"
                placeholder="ค้นหารายชื่อ"
                className="w-full bg-transparent text-[16px] font-light leading-[1.3] text-[#454545] placeholder:text-[#d1d4d9] focus:outline-none"
                aria-label="search contact"
              />
              <button type="submit" aria-label="open search flow">
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
        </div>

        <div className="relative z-10 px-4 pt-[22px] pb-[112px]">
          <section>
            <h2 className="text-[18px] font-bold leading-[1.3] text-[#111111]">รายการโปรด</h2>
            <div className="mt-4 flex items-start gap-4">
              {favoriteContacts.map((contact) => (
                <FavoriteContactItem key={contact.id} contact={contact} />
              ))}
              <Link
                href="/phone-book-va/favorites"
                aria-label="open more favorites"
                className="grid size-[60px] shrink-0 place-items-center rounded-full border border-dashed border-[#3190f7] bg-transparent text-[14px] font-semibold text-[#3190f7]"
              >
                more
              </Link>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-[18px] font-bold leading-[1.3] text-[#111111]">ล่าสุด</h2>
            <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
              {latestContacts.map((contact) => (
                <LatestContactCard key={contact.id} contact={contact} />
              ))}
            </div>
          </section>
        </div>

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
