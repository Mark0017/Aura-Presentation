export default function Contents3() {
  const tools = [
    { name: "Python 3.10", role: "Primary programming language", color: "#e01870" },
    { name: "YOLOv8 (Ultralytics)", role: "Uniform detection model", color: "#2255cc" },
    { name: "InsightFace", role: "Facial recognition pipeline", color: "#e01870" },
    { name: "OpenCV", role: "Video capture and frame processing", color: "#2255cc" },
    { name: "FastAPI", role: "Backend REST API framework", color: "#e01870" },
    { name: "Next.js / React", role: "Administrative web dashboard", color: "#2255cc" },
    { name: "SQLite / SQLAlchemy", role: "Local database and ORM", color: "#e01870" },
    { name: "Roboflow", role: "Dataset annotation and augmentation", color: "#2255cc" },
    { name: "Raspberry Pi 4 (4GB)", role: "Edge deployment hardware", color: "#e01870" },
    { name: "ONNX Runtime", role: "Optimized model inference", color: "#2255cc" },
  ];

  const budget = [
    { item: "Raspberry Pi 4 Model B (4GB RAM)", qty: 1, unit: "₱4,200.00", total: "₱4,200.00" },
    { item: "Raspberry Pi Camera Module v2", qty: 1, unit: "₱1,100.00", total: "₱1,100.00" },
    { item: "32GB MicroSD Card (Class 10)", qty: 1, unit: "₱350.00", total: "₱350.00" },
    { item: "5V 3A USB-C Power Supply", qty: 1, unit: "₱450.00", total: "₱450.00" },
    { item: "Raspberry Pi 4 Acrylic Case with Fan", qty: 1, unit: "₱280.00", total: "₱280.00" },
    { item: "HDMI to Micro-HDMI Cable", qty: 1, unit: "₱180.00", total: "₱180.00" },
    { item: "Ethernet Cable (Cat6, 2m)", qty: 1, unit: "₱120.00", total: "₱120.00" },
    { item: "USB Keyboard and Mouse (temporary)", qty: 1, unit: "₱500.00", total: "₱500.00" },
  ];
  const budgetTotal = "₱7,180.00";

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#e01870" }}>
          Chapter 3
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Methodology
        </h1>
        <div className="h-1 w-20 rounded-full" style={{ background: "linear-gradient(to right, #e01870, #4488ff)" }} />
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4" style={{ color: "#e01870" }}>Research Design</h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          This study employs a <strong style={{ color: "#e01870" }}>Developmental Research Design</strong> combined with an <strong style={{ color: "#2255cc" }}>Evaluative Research Design</strong>. The developmental phase covers the iterative design, construction, and testing of the AURA system. The evaluative phase measures the system&apos;s performance against defined metrics and assesses user acceptability.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border" style={{ borderColor: "#e0187030", background: "#fff0f5" }}>
            <h3 className="font-bold mb-3" style={{ color: "#e01870" }}>Phase 1 — Developmental</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {[
                "Dataset collection and annotation using Roboflow",
                "YOLOv8 model training and validation",
                "InsightFace integration and embedding database setup",
                "FastAPI backend and SQLite database development",
                "Next.js dashboard development and integration",
                "Raspberry Pi 4 edge deployment and optimization",
              ].map((s, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#e01870" }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5 rounded-xl border" style={{ borderColor: "#2255cc30", background: "#f0f5ff" }}>
            <h3 className="font-bold mb-3" style={{ color: "#2255cc" }}>Phase 2 — Evaluative</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {[
                "Uniform detection accuracy testing (precision, recall, mAP)",
                "Facial recognition accuracy testing (cosine similarity threshold)",
                "Real-time performance benchmarking (FPS on Raspberry Pi 4)",
                "System usability evaluation with ISO/IEC 25010 survey",
                "Comparative analysis with existing literature benchmarks",
              ].map((s, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#2255cc" }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4" style={{ color: "#2255cc" }}>Tools and Technologies</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {tools.map((t, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ background: t.color }} />
              <div>
                <p className="font-semibold text-sm text-slate-800">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4" style={{ color: "#e01870" }}>System Functional Design (IPO)</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              label: "Input",
              color: "#e01870",
              bg: "#fff0f5",
              items: ["Live CCTV video stream (720p/1080p)", "Pre-enrolled student face embeddings", "Registered student profile database"],
            },
            {
              label: "Process",
              color: "#9933ee",
              bg: "#f8f0ff",
              items: [
                "Frame extraction at configurable FPS",
                "YOLOv8 inference → uniform classification",
                "InsightFace detection + embedding extraction",
                "Cosine similarity matching against enrolled faces",
                "Violation event construction and logging",
              ],
            },
            {
              label: "Output",
              color: "#2255cc",
              bg: "#f0f5ff",
              items: [
                "Real-time annotated video feed",
                "Identified student + compliance status overlay",
                "Violation records stored in SQLite",
                "Dashboard alerts for non-compliant students",
                "CSV/PDF compliance reports",
              ],
            },
          ].map((col, i) => (
            <div key={i} className="p-5 rounded-xl border" style={{ borderColor: `${col.color}30`, background: col.bg }}>
              <p className="font-bold mb-3" style={{ color: col.color }}>{col.label}</p>
              <ul className="space-y-2 text-sm text-slate-600">
                {col.items.map((item, j) => (
                  <li key={j} className="flex gap-2 items-start">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: col.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4" style={{ color: "#2255cc" }}>Data Collection</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Training data for the YOLOv8 uniform detection model was collected through two methods:
        </p>
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl border" style={{ borderColor: "#e0187030", background: "#fff0f5" }}>
            <p className="font-bold text-sm mb-1" style={{ color: "#e01870" }}>Controlled Photo Sessions</p>
            <p className="text-slate-600 text-sm leading-relaxed">With informed consent from student volunteers at Dr. Yanga&apos;s Colleges Inc., photographs and short video clips were taken in various on-campus lighting and background conditions. Both compliant (full uniform) and non-compliant (missing or incorrect items) scenarios were captured. Total: 1,200+ annotated images across 2 classes.</p>
          </div>
          <div className="p-4 rounded-xl border" style={{ borderColor: "#2255cc30", background: "#f0f5ff" }}>
            <p className="font-bold text-sm mb-1" style={{ color: "#2255cc" }}>Data Augmentation via Roboflow</p>
            <p className="text-slate-600 text-sm leading-relaxed">The collected dataset was augmented using Roboflow&apos;s augmentation pipeline (horizontal flip, brightness ±25%, rotation ±10°, mosaic) to increase dataset diversity and reduce overfitting. The final training dataset comprised approximately 3,600 images after augmentation.</p>
          </div>
        </div>
        <p className="text-slate-600 leading-relaxed">
          For the facial recognition module, face images of enrolled students were collected separately with explicit written consent. At least 3 reference photos per student were captured under different lighting conditions. Embeddings were generated using InsightFace&apos;s ArcFace model and stored in the local SQLite database.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4" style={{ color: "#e01870" }}>Data Gathering Procedures and Formulas</h2>
        <div className="space-y-6">
          {[
            {
              title: "Uniform Detection Accuracy",
              color: "#e01870",
              bg: "#fff0f5",
              formula: "mAP@0.5 = (1/N) × Σ AP_i",
              desc: "Mean Average Precision at IoU threshold 0.5, averaged across N classes (compliant, non-compliant). Precision = TP / (TP + FP); Recall = TP / (TP + FN).",
            },
            {
              title: "Facial Recognition Accuracy",
              color: "#2255cc",
              bg: "#f0f5ff",
              formula: "similarity = (A · B) / (‖A‖ × ‖B‖)",
              desc: "Cosine similarity between query embedding A and enrolled embedding B. A student is identified when similarity ≥ 0.45 (empirically determined threshold).",
            },
            {
              title: "Real-Time Processing Speed",
              color: "#9933ee",
              bg: "#f8f0ff",
              formula: "FPS = frames_processed / elapsed_time_seconds",
              desc: "Frames per second measured over a 60-second benchmark clip on the Raspberry Pi 4 hardware. Target: ≥ 8 FPS for acceptable real-time performance.",
            },
            {
              title: "Usability Score (ISO/IEC 25010)",
              color: "#e01870",
              bg: "#fff0f5",
              formula: "Score = (Σ responses) / (n × max_scale) × 100",
              desc: "Five-point Likert-scale survey administered to 20 respondents (10 admin staff + 10 security personnel). Dimensions: Functional Suitability, Usability, Performance Efficiency, Reliability.",
            },
          ].map((f, i) => (
            <div key={i} className="p-5 rounded-xl border" style={{ borderColor: `${f.color}25`, background: f.bg }}>
              <p className="font-bold mb-2" style={{ color: f.color }}>{f.title}</p>
              <code className="block text-sm font-mono px-4 py-2 rounded-lg mb-3 text-slate-800 border"
                style={{ background: "white", borderColor: `${f.color}20` }}>
                {f.formula}
              </code>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4" style={{ color: "#2255cc" }}>Bill of Materials / Budget</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "#0d0d2e", color: "white" }}>
                <th className="px-4 py-3 text-left font-semibold">Item</th>
                <th className="px-4 py-3 text-center font-semibold">Qty</th>
                <th className="px-4 py-3 text-right font-semibold">Unit Price</th>
                <th className="px-4 py-3 text-right font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              {budget.map((b, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="px-4 py-3 text-slate-700">{b.item}</td>
                  <td className="px-4 py-3 text-center text-slate-600">{b.qty}</td>
                  <td className="px-4 py-3 text-right text-slate-600 font-mono">{b.unit}</td>
                  <td className="px-4 py-3 text-right text-slate-700 font-semibold font-mono">{b.total}</td>
                </tr>
              ))}
              <tr style={{ background: "#0d0d2e", color: "white" }}>
                <td className="px-4 py-3 font-bold" colSpan={3}>Total Project Hardware Cost</td>
                <td className="px-4 py-3 text-right font-bold font-mono">{budgetTotal}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4" style={{ color: "#e01870" }}>Ethical Considerations</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          The development and deployment of AURA involves the collection and processing of biometric data (facial images and embeddings), which is classified as sensitive personal information under the Data Privacy Act of 2012 (Republic Act 10173) of the Philippines. The following ethical safeguards were implemented:
        </p>
        <div className="space-y-3">
          {[
            { point: "Informed Consent", detail: "All students, faculty, and staff whose images or biometric data were collected signed informed consent forms prior to data collection. Participation in data collection was entirely voluntary." },
            { point: "Data Minimization", detail: "Only face embeddings (numerical vectors) are stored in the operational database — raw face images are not retained after enrollment processing." },
            { point: "On-Premise Storage", detail: "All student data, violation logs, and embeddings are stored exclusively on the institution's local server. No data is transmitted to external cloud services." },
            { point: "Access Control", detail: "The administrative dashboard is accessible only to authorized school personnel with role-based authentication. Audit logs track all data access events." },
            { point: "IRB Approval", detail: "This study was conducted under the approval of Dr. Yanga's Colleges Inc.'s internal review process, ensuring compliance with institutional research ethics standards." },
          ].map((e, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50">
              <span className="w-2 h-2 mt-2 rounded-full shrink-0" style={{ background: i % 2 === 0 ? "#e01870" : "#2255cc" }} />
              <div>
                <p className="font-semibold text-sm text-slate-800">{e.point}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{e.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
