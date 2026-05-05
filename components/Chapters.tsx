const chapters = [
  {
    id: "chapter-1",
    number: 1,
    title: "Introduction and Background",
    description:
      "Covers the research background, the significance of automating uniform monitoring, scope and limitations, and the conceptual framework underlying AURA.",
  },
  {
    id: "chapter-2",
    number: 2,
    title: "Literature Review",
    description:
      "Reviews related studies on YOLO-based object detection, facial recognition systems, and existing school management technologies both locally and internationally.",
  },
  {
    id: "chapter-3",
    number: 3,
    title: "Methodology",
    description:
      "Details the two-phase Developmental and Evaluative approach, dataset preparation, model training pipeline using Python, OpenCV, and YOLOv8, and system architecture.",
  },
  {
    id: "chapter-4",
    number: 4,
    title: "Results and Discussion",
    description:
      "Presents detection accuracy results, confusion matrices, sample outputs, and a comparative analysis of AURA's performance against established benchmarks.",
  },
  {
    id: "chapter-5",
    number: 5,
    title: "Conclusion",
    description:
      "Summarizes key findings, contributions of the study, recommendations for future development, and potential deployment scenarios for AURA.",
  },
];

export default function Chapters() {
  return (
    <section id="chapters" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Chapters</h2>
        <div className="section-divider" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((ch, i) => {
            const accent = i % 2 === 0 ? "#e01870" : "#2255cc";
            const lightBg = i % 2 === 0 ? "#fff0f5" : "#f0f5ff";
            return (
              <div
                key={ch.id}
                id={ch.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="text-white px-6 py-4 flex items-center gap-3" style={{ background: accent }}>
                  <span className="text-2xl font-extrabold text-white/40 leading-none">{ch.number}</span>
                  <h3 className="text-sm font-bold leading-tight">{ch.title}</h3>
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">{ch.description}</p>
                  <a
                    href={`/${ch.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70"
                    style={{ color: accent }}
                  >
                    Explore
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <div className="h-1" style={{ background: lightBg, borderTop: `2px solid ${accent}20` }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
