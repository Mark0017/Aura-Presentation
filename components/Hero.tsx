import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative text-white py-28 px-4 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a0028 0%, #0d0d2e 50%, #091a40 100%)" }}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true"
        style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #e01870 0%, transparent 70%)", transform: "translate(-30%, -30%)" }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #4488ff 0%, transparent 70%)", transform: "translate(30%, 30%)" }} />

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            <span style={{ color: "#e01870" }}>AU</span>
            <span style={{ color: "#4488ff" }}>RA</span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed max-w-xl text-white/80">
            <strong className="font-semibold" style={{ color: "#e01870" }}>A</strong>I-based{" "}
            <strong className="font-semibold" style={{ color: "#e01870" }}>U</strong>niform Detection and Facial{" "}
            <strong className="font-semibold" style={{ color: "#4488ff" }}>R</strong>ecognition{" "}
            <strong className="font-semibold" style={{ color: "#4488ff" }}>A</strong>ssistance System for Dr. Yanga&apos;s Colleges Inc.
          </p>

          <p className="text-white/55 leading-relaxed max-w-lg">
            A capstone thesis developed for{" "}
            <span className="text-white/80 font-medium">Dr. Yanga&apos;s Colleges Inc.</span> — an
            intelligent, real-time system that automates school uniform compliance monitoring and
            student identification using computer vision and deep learning.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full shadow-lg transition-opacity hover:opacity-90"
              style={{ background: "#e01870", color: "#fff" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Paper
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full transition-colors hover:bg-white/10"
              style={{ border: "1.5px solid #4488ff", color: "#4488ff" }}
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="shrink-0">
          <div
            className="w-52 h-52 md:w-64 md:h-64 rounded-full flex items-center justify-center shadow-2xl p-4"
            style={{
              background: "rgba(255,255,255,0.05)",
              boxShadow: "0 0 0 3px #e01870, 0 0 0 6px #4488ff, 0 25px 50px rgba(0,0,0,0.5)",
            }}
          >
            <Image
              src="/images/aura-logo.png"
              alt="AURA System Logo"
              width={200}
              height={200}
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
