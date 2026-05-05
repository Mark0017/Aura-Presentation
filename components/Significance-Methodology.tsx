const stakeholders = [
  {
    label: "Administrators",
    desc: "Gain automated, real-time monitoring that reduces manual workload and improves campus oversight.",
  },
  {
    label: "Students",
    desc: "Experience faster, contactless entry verification while maintaining a culture of proper dress code.",
  },
  {
    label: "Teachers",
    desc: "Focus on teaching rather than manual uniform inspection at the start of each school day.",
  },
  {
    label: "Researchers",
    desc: "Access a novel application of computer vision and deep learning in an educational security context.",
  },
];

const techStack = [
  { label: "Language",       value: "Python 3.10", accent: "#e01870" },
  { label: "Detection",      value: "YOLOv8",      accent: "#4488ff" },
  { label: "Recognition",    value: "InsightFace", accent: "#e01870" },
  { label: "Vision Library", value: "OpenCV",      accent: "#4488ff" },
];

export default function SignificanceMethodology() {
  return (
    <section
      className="py-20 px-4 text-white"
      style={{ background: "linear-gradient(135deg, #1a0028 0%, #0d0d2e 50%, #091a40 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-2">Significance &amp; Methodology</h2>
        <div className="section-divider" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Significance */}
          <div>
            <h3 className="text-xl font-bold mb-6" style={{ color: "#ff6aaa" }}>Who Benefits?</h3>
            <div className="flex flex-col gap-4">
              {stakeholders.map((s, i) => (
                <div key={s.label} className="flex gap-4 items-start">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: i % 2 === 0 ? "#e0187025" : "#2255cc25",
                      color: i % 2 === 0 ? "#ff6aaa" : "#7aaaff",
                    }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{s.label}</p>
                    <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Methodology */}
          <div>
            <h3 className="text-xl font-bold mb-6" style={{ color: "#7aaaff" }}>Development Approach</h3>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              AURA follows a{" "}
              <strong className="text-white">two-phase Developmental and Evaluative</strong> research
              methodology. The development phase covers system design, dataset collection, model training,
              and integration. The evaluative phase measures performance through standard metrics.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {techStack.map((tech) => (
                <div
                  key={tech.label}
                  className="rounded-xl p-4"
                  style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${tech.accent}40` }}
                >
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: tech.accent }}>
                    {tech.label}
                  </p>
                  <p className="font-semibold text-white">{tech.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
