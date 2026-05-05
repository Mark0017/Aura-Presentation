const objectives = {
  general:
    "To design and develop an AI-based Uniform Detection and Facial Recognition Assistance System for Dr. Yanga's Colleges Inc. that automates uniform compliance monitoring and enhances school security.",
  specific: [
    "Develop a YOLOv8-based model trained on a custom dataset of school uniforms.",
    "Integrate InsightFace for real-time facial recognition and student identification.",
    "Build a monitoring dashboard for administrators to review alerts and logs.",
    "Evaluate the system's accuracy using standard performance metrics.",
    "Deploy the system in a real school environment and gather user feedback.",
  ],
};

export default function ProblemObjectives() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Problem Statement &amp; Objectives</h2>
        <div className="section-divider" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Problems */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl p-6" style={{ background: "#fff0f5", border: "1px solid #e0187030" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "#e0187015", color: "#e01870" }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="font-bold" style={{ color: "#b01050" }}>Inefficiency</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Manual monitoring of school uniform compliance is a labor-intensive and inefficient process,
                placing additional burden on teachers and security personnel.
              </p>
            </div>

            <div className="rounded-2xl p-6" style={{ background: "#f0f5ff", border: "1px solid #2255cc30" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "#2255cc15", color: "#2255cc" }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-bold" style={{ color: "#1a3d99" }}>Technology Gap</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                There is a significant gap in integrated systems that combine uniform detection and facial
                recognition, particularly tailored for Philippine educational institutions.
              </p>
            </div>
          </div>

          {/* Objectives */}
          <div>
            <h3 className="text-lg font-bold mb-2" style={{ color: "#e01870" }}>General Objective</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">{objectives.general}</p>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#2255cc" }}>Specific Objectives</h3>
            <ul className="flex flex-col gap-3">
              {objectives.specific.map((obj, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-600">
                  <span
                    className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: i % 2 === 0 ? "#e01870" : "#2255cc" }}
                  >
                    {i + 1}
                  </span>
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
