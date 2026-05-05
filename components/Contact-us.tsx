"use client";

import { useState } from "react";

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    variant: "blue" as const,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    variant: "pink" as const,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    variant: "blue" as const,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:aura@school.edu",
    variant: "pink" as const,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const inputBase =
  "w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all focus:border-[#e01870] focus:ring-2 focus:ring-[#e01870]/20 bg-white";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">Contact Us</h2>
        <div className="section-divider" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — info + social */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#e01870" }}>Get in Touch</h3>
              <p className="text-slate-600 leading-relaxed">
                Have questions about the AURA project, want to collaborate, or interested in our
                research? Fill out the form or reach us through any of the channels below.
              </p>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "#fff0f5", color: "#e01870" }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Dr. Yanga&apos;s Colleges Inc., Bocaue, Bulacan</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "#f0f5ff", color: "#2255cc" }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>aura@school.edu</span>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className={link.variant === "pink" ? "aura-social-pink" : "aura-social-blue"}
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "0.75rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: link.variant === "pink" ? "#fff0f5" : "#f0f5ff",
                      color: link.variant === "pink" ? "#e01870" : "#2255cc",
                    }}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <p className="text-slate-400 text-xs">
              Dr. Yanga&apos;s Colleges Inc. · College of Computer Studies · 2025
            </p>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "#fff0f5" }}>
                  <svg className="w-8 h-8" fill="none" stroke="#e01870" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-800">Message Sent!</h3>
                <p className="text-slate-500 text-sm">
                  Thank you for reaching out. We&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm font-semibold transition-opacity hover:opacity-70"
                  style={{ color: "#e01870" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name + Phone row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-600">
                      Full Name <span style={{ color: "#e01870" }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Juan dela Cruz"
                      className={inputBase}
                      suppressHydrationWarning
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-600">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+63 912 345 6789"
                      className={inputBase}
                      suppressHydrationWarning
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-600">
                    Email Address <span style={{ color: "#e01870" }}>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="juan@example.com"
                    className={inputBase}
                    suppressHydrationWarning
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-600">
                    Subject <span style={{ color: "#e01870" }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Collaboration Inquiry"
                    className={inputBase}
                    suppressHydrationWarning
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-600">
                    Message <span style={{ color: "#e01870" }}>*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    className={inputBase}
                    style={{ resize: "none" }}
                    suppressHydrationWarning
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-white font-semibold text-sm transition-opacity hover:opacity-90 mt-1"
                  style={{ background: "linear-gradient(to right, #e01870, #4488ff)" }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
