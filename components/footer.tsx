import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  "Mark Dave Zepeda",
  "Jay-M Sabusap",
  "John Adrian Gozun",
  "Adrian Bernardino",
  "Jay Ann Lumanas",
];

export default function Footer() {
  return (
    <footer className="text-white" style={{ background: "#0d0d2e" }}>
      {/* top split accent bar */}
      <div className="h-0.75" style={{ background: "linear-gradient(to right, #e01870, #4488ff)" }} />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="#home" className="flex items-center gap-3 w-fit">
              <Image
                src="/images/aura-logo.png"
                alt="AURA Logo"
                width={44}
                height={44}
                className="rounded-full object-cover"
              />
              <span className="text-xl font-bold tracking-widest">
                <span style={{ color: "#e01870" }}>AU</span>
                <span style={{ color: "#4488ff" }}>RA</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              AI-based Uniform Detection and Facial Recognition Assistance System for Dr. Yanga&apos;s Colleges Inc.
            </p>

            {/* Social Links — Facebook/YouTube blue, Instagram/Email pink */}
            <div className="flex gap-4 mt-1">
              <a href="#" aria-label="Facebook" className="aura-social-blue">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="aura-social-pink">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="aura-social-blue">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="mailto:aura@school.edu" aria-label="Email" className="aura-social-pink">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-xs uppercase tracking-wider" style={{ color: "#e01870" }}>
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-white/50">
              <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#chapters" className="hover:text-white transition-colors">Chapters</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Team Credits */}
          <div>
            <h4 className="font-semibold mb-4 text-xs uppercase tracking-wider" style={{ color: "#4488ff" }}>
              The Team
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-white/50">
              {teamMembers.map((member, i) => (
                <li key={member} style={{ color: i % 2 === 0 ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.45)" }}>
                  {member}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-white/30">
              Technical Adviser: Engr. Jose Reyes<br />
              Thesis Adviser: Prof. Maria Garcia
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/30">© 2025 AURA · Dr. Yanga&apos;s Colleges Inc. All rights reserved.</p>
          <a href="#home"
            className="text-sm flex items-center gap-1.5 transition-colors text-white/40 hover:text-white"
          >
            Back to top
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
