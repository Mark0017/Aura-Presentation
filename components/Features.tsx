const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI-Powered Detection",
    description: "Leverages YOLOv8, a state-of-the-art object detection model, to accurately identify school uniform compliance in real time.",
    accent: "#e01870",
    bgAccent: "#fff0f5",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Seamless Integration",
    description: "Easily integrates with existing school CCTV infrastructure and entry systems for minimal deployment overhead.",
    accent: "#9933ee",
    bgAccent: "#f8f0ff",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Enhanced Security",
    description: "Combines InsightFace recognition with uniform detection to provide dual-layer verification at school entry points.",
    accent: "#2255cc",
    bgAccent: "#f0f5ff",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Why AURA?</h2>
        <div className="section-divider" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col gap-4 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ background: f.bgAccent, color: f.accent }}
              >
                {f.icon}
              </div>
              <h3 className="text-lg font-bold" style={{ color: f.accent }}>{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
