export default function Contents5() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#e01870" }}>
          Chapter 5
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Conclusion and Recommendations
        </h1>
        <div className="h-1 w-20 rounded-full" style={{ background: "linear-gradient(to right, #e01870, #4488ff)" }} />
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4" style={{ color: "#e01870" }}>Summary of Findings</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          This study successfully developed and evaluated AURA — an AI-based Uniform Detection and Facial Recognition Assistance System for Dr. Yanga&apos;s Colleges Inc. The system integrates a YOLOv8-based uniform detection module with an InsightFace-powered facial recognition pipeline, deployed on a Raspberry Pi 4 edge device and accessible through a web-based administrative dashboard.
        </p>
        <div className="space-y-3 mb-4">
          {[
            { label: "Objective 1 — Uniform Detection", color: "#e01870", bg: "#fff0f5", result: "Achieved mAP@0.5 of 91.4%, exceeding the 85% target. The YOLOv8s model trained on 3,600+ annotated DYC uniform images effectively classifies students as Compliant or Non-Compliant in real time." },
            { label: "Objective 2 — Facial Recognition", color: "#2255cc", bg: "#f0f5ff", result: "Achieved 92.1% recognition accuracy across 20 enrolled students under controlled entrance conditions using InsightFace with a cosine similarity threshold of 0.45." },
            { label: "Objective 3 — Administrative Dashboard", color: "#e01870", bg: "#fff0f5", result: "A fully functional Next.js dashboard was developed, providing real-time violation logging, student management, and compliance report generation (CSV/PDF)." },
            { label: "Objective 4 — System Evaluation", color: "#2255cc", bg: "#f0f5ff", result: "The system achieved 10.3 FPS on Raspberry Pi 4 hardware and received a usability score of 4.38/5.0 from 20 respondents in an ISO/IEC 25010-aligned assessment." },
          ].map((obj, i) => (
            <div key={i} className="p-4 rounded-xl border" style={{ borderColor: `${obj.color}25`, background: obj.bg }}>
              <p className="font-bold text-sm mb-1" style={{ color: obj.color }}>{obj.label}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{obj.result}</p>
            </div>
          ))}
        </div>
        <p className="text-slate-600 leading-relaxed">
          All four specific objectives of the study were met. AURA demonstrates that combining YOLOv8 object detection with InsightFace recognition on affordable edge hardware is technically viable for real-world school uniform monitoring in the Philippine educational context.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4" style={{ color: "#2255cc" }}>Conclusions</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          AURA represents a significant step toward the modernization of school administration processes at Dr. Yanga&apos;s Colleges Inc. The system replaces a labor-intensive, inconsistent manual monitoring process with an automated, data-driven pipeline that is capable of operating in real time on low-cost hardware already compatible with the institution&apos;s CCTV infrastructure.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          The high usability scores received from both administrative staff and security personnel indicate strong end-user acceptance, a critical factor for the successful adoption of any technology-driven institutional system. Respondents specifically noted that the dashboard&apos;s violation logging and reporting features would save significant time compared to current paper-based record-keeping.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          The study also demonstrates that the combination of YOLOv8 and InsightFace in a single pipeline is not only technically feasible but practically effective, with accuracy and speed metrics that compare favorably with related literature. The ArcFace-based recognition approach proved particularly robust under the varied lighting conditions present at DYC&apos;s entrance areas.
        </p>
        <p className="text-slate-600 leading-relaxed">
          AURA contributes to the local body of knowledge on AI applications in Philippine educational institutions and provides a replicable architecture that other schools facing similar uniform enforcement challenges could adapt with minimal modification.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4" style={{ color: "#e01870" }}>Recommendations</h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          Based on the findings and limitations identified during this study, the following recommendations are offered for future development and deployment of AURA:
        </p>
        <div className="space-y-4">
          {[
            {
              title: "Multi-Camera Support",
              color: "#e01870",
              bg: "#fff0f5",
              text: "Extend AURA to support simultaneous processing from multiple CCTV cameras across all DYC campus entry points, providing comprehensive coverage rather than a single-gate prototype.",
            },
            {
              title: "Improved Low-Light Performance",
              color: "#2255cc",
              bg: "#f0f5ff",
              text: "Investigate the integration of low-light image enhancement preprocessing (e.g., Zero-DCE or CLAHE) prior to detection and recognition to improve performance during early-morning and evening entry periods.",
            },
            {
              title: "Occlusion-Robust Recognition",
              color: "#e01870",
              bg: "#fff0f5",
              text: "Explore partial-face recognition models or occlusion-aware training strategies to improve identification accuracy for students wearing face masks, hats, or other accessories that partially occlude facial features.",
            },
            {
              title: "Mobile Notification Integration",
              color: "#2255cc",
              bg: "#f0f5ff",
              text: "Add a push notification system to alert parents or guardians via SMS or mobile app when their child is flagged for a uniform violation, enabling faster corrective action.",
            },
            {
              title: "Replication in Other Institutions",
              color: "#e01870",
              bg: "#fff0f5",
              text: "Future researchers are encouraged to replicate AURA in other Philippine educational institutions, adapting the training dataset to the specific uniform designs of those schools to validate the system&apos;s generalizability.",
            },
            {
              title: "Longitudinal Compliance Study",
              color: "#2255cc",
              bg: "#f0f5ff",
              text: "Once AURA is deployed at scale, conduct a longitudinal study tracking uniform compliance rates over academic terms to measure the system&apos;s behavioral impact on student adherence to the uniform policy.",
            },
          ].map((r, i) => (
            <div key={i} className="p-4 rounded-xl border" style={{ borderColor: `${r.color}25`, background: r.bg }}>
              <p className="font-bold text-sm mb-1" style={{ color: r.color }}>{r.title}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4" style={{ color: "#2255cc" }}>Contributions of the Study</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Practical Contribution", color: "#e01870", text: "AURA provides Dr. Yanga's Colleges Inc. with a working prototype of an automated uniform monitoring system that can be deployed at the institutional level, directly addressing an operational need." },
            { title: "Technical Contribution", color: "#2255cc", text: "The study contributes a replicable pipeline architecture combining YOLOv8 and InsightFace on Raspberry Pi 4 hardware, with documented training procedures, dataset preparation, and optimization techniques." },
            { title: "Knowledge Contribution", color: "#e01870", text: "This is among the first published studies to address automated school uniform monitoring in the Philippine context, filling a gap identified in the literature review." },
            { title: "Ethical Framework", color: "#2255cc", text: "The study demonstrates a privacy-compliant approach to deploying biometric systems in schools under the Data Privacy Act of 2012, providing a model for responsible AI implementation in Philippine educational institutions." },
          ].map((c, i) => (
            <div key={i} className="p-5 rounded-xl border" style={{ borderColor: `${c.color}25`, background: i % 2 === 0 ? "#fff0f5" : "#f0f5ff" }}>
              <p className="font-bold mb-2" style={{ color: c.color }}>{c.title}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team closing */}
      <section className="rounded-2xl px-8 py-10 text-center" style={{ background: "linear-gradient(135deg, #fff0f5 0%, #f0f5ff 100%)", border: "1px solid #e0187020" }}>
        <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#e01870" }}>AURA Research Team</p>
        <p className="text-slate-700 leading-relaxed">
          Mark Dave Zepeda · Jay-M Sabusap · John Adrian Gozun · Adrian Bernardino · Jay Ann Lumanas
        </p>
        <p className="text-slate-500 text-sm mt-2">Dr. Yanga&apos;s Colleges Inc. · 2025</p>
      </section>
    </main>
  );
}
