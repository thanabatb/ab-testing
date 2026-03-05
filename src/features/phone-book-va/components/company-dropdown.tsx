"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import type { CompanyMock } from "../../phone-book/shared/company-mock.data";

type CompanyDropdownProps = {
  companies: CompanyMock[];
  defaultCompany: string;
};

export function CompanyDropdown({ companies, defaultCompany }: CompanyDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const fallbackCompany: CompanyMock = companies[0] ?? { id: "company-fallback", name: defaultCompany, logoSrc: "" };
  const defaultSelection = companies.find((company) => company.name === defaultCompany) ?? fallbackCompany;
  const [selectedCompany, setSelectedCompany] = useState(defaultSelection);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative flex items-center gap-6">
      <div className="relative size-[60px] overflow-hidden rounded-[16px] bg-[#f3a7ad]">
        <img src={selectedCompany.logoSrc} alt={selectedCompany.name} className="size-full object-cover" width={60} height={60} />
      </div>

      <div className="relative">
        <button
          type="button"
          className="flex items-center gap-2"
          aria-label="choose company"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <p className="text-[22px] font-bold leading-[1.3] text-black">{selectedCompany.name}</p>
          <ChevronDown className="size-5 text-[#4c5564]" />
        </button>

        {isOpen ? (
          <ul className="absolute left-0 z-30 mt-2 w-[220px] rounded-[16px] border border-[#dbe2eb] bg-white p-2 shadow-[0_8px_24px_rgba(49,144,247,0.18)]">
            {companies.map((company) => (
              <li key={company.id}>
                <button
                  type="button"
                  className="flex w-full items-center gap-2 rounded-[10px] px-3 py-2 text-left text-[14px] text-[#111111] hover:bg-[#f4f8fd]"
                  onClick={() => {
                    setSelectedCompany(company);
                    setIsOpen(false);
                  }}
                >
                  <img src={company.logoSrc} alt={company.name} className="size-6 rounded-[6px] object-cover" width={24} height={24} />
                  {company.name}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
