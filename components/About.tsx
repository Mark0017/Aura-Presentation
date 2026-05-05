const tags = [
  { label: "YOLOv8",          color: "#e01870", bg: "#fff0f5", border: "#e01870" },
  { label: "InsightFace",     color: "#2255cc", bg: "#f0f5ff", border: "#2255cc" },
  { label: "Python",          color: "#e01870", bg: "#fff0f5", border: "#e01870" },
  { label: "OpenCV",          color: "#2255cc", bg: "#f0f5ff", border: "#2255cc" },
  { label: "Deep Learning",   color: "#e01870", bg: "#fff0f5", border: "#e01870" },
  { label: "Computer Vision", color: "#2255cc", bg: "#f0f5ff", border: "#2255cc" },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">About the Project</h2>
        <div className="section-divider" />
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-3" style={{ color: "#e01870" }}>What is AURA?</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              AURA is a capstone thesis developed for{" "}
              <strong style={{ color: "#e01870" }}>Dr. Yanga&apos;s Colleges Inc.</strong> that addresses
              the challenges of manual school uniform monitoring. Traditional approaches are
              labor-intensive and prone to human error. AURA replaces this with an automated,
              AI-driven pipeline.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              At its core, AURA uses{" "}
              <strong style={{ color: "#e01870" }}>YOLOv8-based uniform detection</strong> to
              identify whether students are wearing the correct attire, and{" "}
              <strong style={{ color: "#2255cc" }}>InsightFace recognition</strong> to verify student
              identity — all in real time from standard CCTV footage.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {tags.map((tag) => (
                <span
                  key={tag.label}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ color: tag.color, background: tag.bg, border: `1px solid ${tag.border}30` }}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <h3 className="text-lg font-bold mb-4" style={{ color: "#2255cc" }}>Advisory Credits</h3>
            <div className="flex flex-col gap-4 text-sm text-slate-600">
              <div className="flex gap-3 items-start">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-xs font-bold text-white"
                  style={{ background: "#e01870" }}
                >
                  T
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Engr. Alberto Cruz</p>
                  <p className="text-slate-500">Technical Adviser</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-xs font-bold text-white"
                  style={{ background: "#2255cc" }}
                >
                  T
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Engr. Henry De Guzman</p>
                  <p className="text-slate-500">Thesis Adviser</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
