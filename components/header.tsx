"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const chapters = [
  { id: "chapter-1", label: "Chapter 1: Introduction" },
  { id: "chapter-2", label: "Chapter 2: Literature Review" },
  { id: "chapter-3", label: "Chapter 3: Methodology" },
  { id: "chapter-4", label: "Chapter 4: Results & Discussion" },
  { id: "chapter-5", label: "Chapter 5: Conclusion" },
];


export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [chaptersOpen, setChaptersOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const href = (anchor: string) => isHome ? anchor : `/${anchor}`;

  const closeAll = () => {
    setMobileOpen(false);
    setChaptersOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 text-white shadow-lg" style={{ background: "#0d0d2e" }}>
      {/* thin split accent bar at bottom of header */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{ background: "linear-gradient(to right, #e01870, #4488ff)" }} />

      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={href("#home")} className="flex items-center gap-3" onClick={closeAll}>
          <Image
            src="/images/aura-logo.png"
            alt="AURA Logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span className="text-xl font-bold tracking-widest">
            <span style={{ color: "#e01870" }}>AU</span>
            <span style={{ color: "#4488ff" }}>RA</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href={href("#home")} className="transition-colors hover:text-[#e01870]">Home</Link>
          <Link href={href("#about")} className="transition-colors hover:text-[#e01870]">About</Link>
          <Link href={href("#diagrams")} className="transition-colors hover:text-[#4488ff]">Diagrams</Link>

          <div className="relative">
            <button
              onClick={() => setChaptersOpen(!chaptersOpen)}
              className="flex items-center gap-1 transition-colors hover:text-[#4488ff] cursor-pointer"
            >
              Chapters
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${chaptersOpen ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {chaptersOpen && (
              <div className="absolute top-full right-0 mt-2 w-60 bg-white text-gray-800 rounded-lg shadow-xl border border-gray-100 py-1 z-50 overflow-hidden">
                {chapters.map((ch, i) => (
                  <Link
                    key={ch.id}
                    href={`/${ch.id}`}
                    onClick={() => setChaptersOpen(false)}
                    className="block px-4 py-2.5 text-sm transition-colors"
                    style={{}}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = i % 2 === 0 ? "#e01870" : "#2255cc";
                      (e.currentTarget as HTMLElement).style.background = i % 2 === 0 ? "#fff0f5" : "#f0f5ff";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "";
                      (e.currentTarget as HTMLElement).style.background = "";
                    }}
                  >
                    {ch.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href={href("#contact")} className="transition-colors hover:text-[#4488ff]">Contact</Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 py-4 border-t border-white/10" style={{ background: "#08081e" }}>
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li>
              <Link href={href("#home")} onClick={closeAll} className="hover:text-[#e01870] transition-colors">Home</Link>
            </li>
            <li>
              <Link href={href("#about")} onClick={closeAll} className="hover:text-[#e01870] transition-colors">About</Link>
            </li>
            <li>
              <button
                onClick={() => setChaptersOpen(!chaptersOpen)}
                className="flex items-center gap-1 hover:text-[#4488ff] transition-colors"
              >
                Chapters
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${chaptersOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {chaptersOpen && (
                <ul className="mt-2 pl-4 flex flex-col gap-2">
                  {chapters.map((ch, i) => (
                    <li key={ch.id}>
                      <Link
                        href={`/${ch.id}`}
                        onClick={closeAll}
                        className="text-sm transition-colors"
                        style={{ color: i % 2 === 0 ? "#ff6aaa" : "#7aaaff" }}
                      >
                        {ch.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link href={href("#contact")} onClick={closeAll} className="hover:text-[#4488ff] transition-colors">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
