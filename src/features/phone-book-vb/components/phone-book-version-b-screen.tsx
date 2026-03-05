import { BriefcaseBusiness, Home, MessageCircleMore, ScanLine, Signal, UsersRound, Wifi } from "lucide-react";
import Link from "next/link";
import type { ComponentType } from "react";

import { cn } from "@/lib/utils";

import { companyCards, helpSection } from "../data/phone-book-version-b.data";

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

function CompanyCard({ name, logoSrc }: { name: string; logoSrc: string }) {
  return (
    <Link
      href={`/phone-book-vb/search?company=${encodeURIComponent(name)}`}
      className="grid h-[139px] w-full content-between rounded-[24px] bg-white p-4 text-left shadow-[0_4px_10px_rgba(49,144,247,0.1)]"
      aria-label={`open ${name}`}
    >
      <div className="relative h-[60px] w-[60px] overflow-hidden rounded-[16px]">
        <img src={logoSrc} alt={name} className="size-full object-cover" width={60} height={60} />
      </div>
      <p className="text-[18px] font-bold leading-[1.3] text-[#111111]">{name}</p>
    </Link>
  );
}

export function PhoneBookVersionBScreen() {
  return (
    <main className="min-h-screen bg-[#e8eaee] sm:py-6">
      <section className="relative mx-auto min-h-screen w-full max-w-[440px] overflow-hidden bg-[#f1f2f4] sm:min-h-[956px] sm:rounded-[28px] sm:shadow-2xl">
        <div className="absolute inset-x-0 top-0 h-[288px] bg-[linear-gradient(180deg,#2e8bd1_0%,#64ddf9_50.96%,rgba(100,221,249,0)_100%)]" />

        <header className="relative z-10 px-4 pt-5 text-[#454545]">
          <div className="mb-9 flex items-center justify-between">
            <p className="text-[20px] font-medium leading-none tracking-[-0.44px]">9:41</p>
            <div className="flex items-center gap-1.5">
              <Signal className="size-5" />
              <Wifi className="size-5" />
              <div className="h-[14px] w-[28px] rounded-[4px] border border-[#454545] p-[2px]">
                <div className="h-full w-[18px] rounded-[2px] bg-[#454545]" />
              </div>
            </div>
          </div>

          <h1 className="text-center text-[32px] font-bold leading-[1.3] text-white">Phone book</h1>
        </header>

        <section className="relative z-10 px-4 pb-[112px] pt-5">
          <div className="grid grid-cols-2 gap-2">
            {companyCards.map((card) => (
              <CompanyCard key={card.id} name={card.name} logoSrc={card.logoSrc} />
            ))}
          </div>

          <article className="mt-52 rounded-[24px] bg-[#f3f4f6] px-4 py-4">
            <h2 className="text-[18px] font-bold leading-[1.3] text-[#111111]">{helpSection.title}</h2>
            <p className="mt-1 text-[16px] font-light leading-[1.3] text-[#6b7380]">{helpSection.description}</p>
            <button
              type="button"
              className="mt-3 inline-flex h-[32px] items-center justify-center rounded-[99px] bg-[#1f76d5] px-4 text-[16px] font-bold text-[#effff4]"
            >
              {helpSection.callCta}
            </button>
          </article>
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
