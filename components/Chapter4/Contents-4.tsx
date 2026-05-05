import Image from "next/image";

const useCases = [
  {
    id: "UC-01",
    name: "Capture Video Feed",
    actor: "CCTV Camera",
    desc: "The system continuously captures video frames from the CCTV camera feed at the school entrance.",
  },
  {
    id: "UC-02",
    name: "Detect Uniform Compliance",
    actor: "System (YOLOv8)",
    desc: "AURA processes each frame through the YOLOv8 model to classify the student&apos;s uniform as Compliant or Non-Compliant.",
  },
  {
    id: "UC-03",
    name: "Identify Student",
    actor: "System (InsightFace)",
    desc: "When a face is detected, AURA computes the face embedding and matches it against the enrolled student database using cosine similarity.",
  },
  {
    id: "UC-04",
    name: "Log Violation",
    actor: "System",
    desc: "When a non-compliant uniform is detected and a student is identified, AURA creates a violation record including timestamp, student ID, and frame snapshot.",
  },
  {
    id: "UC-05",
    name: "View Dashboard",
    actor: "Administrator",
    desc: "Authorized administrators access the web dashboard to review real-time alerts, violation logs, and student compliance history.",
  },
  {
    id: "UC-06",
    name: "Manage Student Records",
    actor: "Administrator",
    desc: "Administrators can enroll new students, update student profiles, and manage face embedding data through the dashboard.",
  },
  {
    id: "UC-07",
    name: "Generate Reports",
    actor: "Administrator",
    desc: "The system generates compliance summary reports (daily, weekly, monthly) exportable as CSV or PDF.",
  },
  {
    id: "UC-08",
    name: "Configure System Settings",
    actor: "Administrator",
    desc: "Administrators configure detection thresholds, recognition similarity cutoffs, camera sources, and notification preferences.",
  },
];

const classes = [
  { name: "VideoCapture", color: "#e01870", desc: "Manages CCTV stream acquisition and frame extraction", attrs: ["source: str", "fps_limit: int", "frame_queue: Queue"], methods: ["capture_frame()", "release()"] },
  { name: "UniformDetector", color: "#2255cc", desc: "Wraps the YOLOv8 inference pipeline", attrs: ["model_path: str", "confidence: float", "device: str"], methods: ["detect(frame)", "load_model()", "get_bboxes()"] },
  { name: "FaceRecognizer", color: "#e01870", desc: "InsightFace pipeline for detection and recognition", attrs: ["app: FaceAnalysis", "threshold: float"], methods: ["get_embedding(face_img)", "recognize(frame)", "match(embedding)"] },
  { name: "EmbeddingDatabase", color: "#2255cc", desc: "Manages enrolled student face vectors", attrs: ["db_path: str", "embeddings: dict"], methods: ["enroll(student_id, embedding)", "search(embedding)", "delete(student_id)"] },
  { name: "ViolationLogger", color: "#e01870", desc: "Persists violation events to SQLite", attrs: ["session: SQLAlchemy Session"], methods: ["log_event(student_id, status, frame)", "get_violations(date_range)", "export_csv()"] },
  { name: "Student", color: "#2255cc", desc: "Student entity model", attrs: ["id: int", "name: str", "course: str", "embedding_id: str"], methods: ["to_dict()", "update_profile()"] },
  { name: "DashboardAPI", color: "#e01870", desc: "FastAPI router handling all dashboard endpoints", attrs: ["router: APIRouter"], methods: ["GET /violations", "POST /students", "GET /reports", "PUT /settings"] },
];

const hardware = [
  { name: "Raspberry Pi 4 Model B (4GB)", role: "Main processing unit running the AURA detection pipeline", color: "#e01870" },
  { name: "Raspberry Pi Camera Module v2", role: "Primary image sensor for student face capture at the entrance", color: "#2255cc" },
  { name: "32GB MicroSD Card (Class 10)", role: "Storage for OS (Raspberry Pi OS), AURA software, and local SQLite database", color: "#e01870" },
  { name: "5V 3A USB-C Power Supply", role: "Stable power supply for the Raspberry Pi 4", color: "#2255cc" },
  { name: "Cooling Fan + Acrylic Case", role: "Thermal management for sustained inference workloads", color: "#e01870" },
  { name: "Ethernet / Wi-Fi Module", role: "Network connectivity for dashboard communication", color: "#2255cc" },
  { name: "HDMI Monitor (setup only)", role: "Used during initial system configuration and testing", color: "#e01870" },
  { name: "LED Ring Light (optional)", role: "Supplemental lighting to improve face recognition accuracy in low-light entry areas", color: "#2255cc" },
];

const diagrams = [
  { src: "/images/Diagrams/Context-Diagram.png", caption: "Context Diagram", color: "#2255cc" },
  { src: "/images/Diagrams/use-case-diagram.png", caption: "Use Case Diagram", color: "#e01870" },
  { src: "/images/Diagrams/Activity-Diagram.png", caption: "Activity Diagram", color: "#2255cc" },
  { src: "/images/Diagrams/Block-Diagram.png", caption: "Hardware Block Diagram", color: "#e01870" },
  { src: "/images/Diagrams/Circuit-Diagram.png", caption: "Circuit Diagram", color: "#2255cc" },
  { src: "/images/Diagrams/ConfusionMatrix.png", caption: "Confusion Matrix", color: "#e01870" },
  { src: "/images/Diagrams/UniformDetection.png", caption: "Uniform Detection Output", color: "#2255cc" },
  { src: "/images/Diagrams/FaceRecognition.png", caption: "Face Recognition Output", color: "#e01870" },
];

export default function Contents4() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#2255cc" }}>
          Chapter 4
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Results and Discussion
        </h1>
        <div className="h-1 w-20 rounded-full" style={{ background: "linear-gradient(to right, #e01870, #4488ff)" }} />
      </div>

      {/* UML Diagrams */}
      <section className="mb-14">
        <h2 className="text-xl font-bold mb-2" style={{ color: "#e01870" }}>System Diagrams</h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          The following UML and architectural diagrams document AURA&apos;s software design, data flow, hardware configuration, and AI/ML outputs.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {diagrams.map((d) => (
            <div key={d.src} className="rounded-2xl overflow-hidden border border-slate-100 bg-slate-50">
              <div className="relative w-full h-52">
                <Image src={d.src} alt={d.caption} fill className="object-contain p-4" />
              </div>
              <div className="px-4 py-3 border-t text-sm font-semibold"
                style={{ borderColor: `${d.color}20`, color: d.color }}>
                {d.caption}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="mb-14">
        <h2 className="text-xl font-bold mb-4" style={{ color: "#2255cc" }}>Use Case Descriptions</h2>
        <div className="space-y-4">
          {useCases.map((uc, i) => (
            <div key={uc.id} className="p-4 rounded-xl border"
              style={{ borderColor: i % 2 === 0 ? "#e0187025" : "#2255cc25", background: i % 2 === 0 ? "#fff0f5" : "#f0f5ff" }}>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                  style={{ background: i % 2 === 0 ? "#e01870" : "#2255cc" }}>
                  {uc.id}
                </span>
                <p className="font-bold text-slate-800">{uc.name}</p>
                <span className="text-xs text-slate-500 ml-auto">Actor: {uc.actor}</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{uc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Class Diagram Descriptions */}
      <section className="mb-14">
        <h2 className="text-xl font-bold mb-4" style={{ color: "#e01870" }}>Class Descriptions</h2>
        <div className="space-y-4">
          {classes.map((cls, i) => (
            <div key={cls.name} className="rounded-xl border overflow-hidden">
              <div className="px-5 py-3 flex items-center gap-3" style={{ background: cls.color }}>
                <p className="font-bold text-white">{cls.name}</p>
                <p className="text-white/70 text-sm">{cls.desc}</p>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Attributes</p>
                  <ul className="space-y-1">
                    {cls.attrs.map((a) => (
                      <li key={a} className="text-sm font-mono text-slate-700">{a}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Methods</p>
                  <ul className="space-y-1">
                    {cls.methods.map((m) => (
                      <li key={m} className="text-sm font-mono text-slate-700">{m}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hardware */}
      <section className="mb-14">
        <h2 className="text-xl font-bold mb-4" style={{ color: "#2255cc" }}>Hardware Components</h2>
        <div className="space-y-3">
          {hardware.map((h, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50 items-start">
              <span className="w-2 h-2 mt-2 rounded-full shrink-0" style={{ background: h.color }} />
              <div>
                <p className="font-semibold text-sm text-slate-800">{h.name}</p>
                <p className="text-slate-500 text-sm">{h.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Performance Results */}
      <section className="mb-14">
        <h2 className="text-xl font-bold mb-4" style={{ color: "#e01870" }}>Performance Results</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { label: "mAP@0.5 (Uniform Detection)", value: "91.4%", sub: "YOLOv8s, 50 epochs, 640×640", color: "#e01870" },
            { label: "Precision (Compliant)", value: "93.2%", sub: "Test set of 360 images", color: "#2255cc" },
            { label: "Recall (Non-Compliant)", value: "89.7%", sub: "Test set of 360 images", color: "#e01870" },
            { label: "Face Recognition Accuracy", value: "92.1%", sub: "Cosine similarity ≥ 0.45", color: "#2255cc" },
            { label: "Processing Speed (Pi 4)", value: "10.3 FPS", sub: "YOLOv8n + ONNX Runtime", color: "#e01870" },
            { label: "Usability Score", value: "4.38 / 5.0", sub: "ISO/IEC 25010, n=20 respondents", color: "#2255cc" },
          ].map((r, i) => (
            <div key={i} className="p-5 rounded-xl border"
              style={{ borderColor: `${r.color}25`, background: i % 2 === 0 ? "#fff0f5" : "#f0f5ff" }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: r.color }}>{r.label}</p>
              <p className="text-3xl font-extrabold mb-1" style={{ color: r.color }}>{r.value}</p>
              <p className="text-slate-500 text-xs">{r.sub}</p>
            </div>
          ))}
        </div>

        <h3 className="font-bold text-slate-800 mb-4">Discussion</h3>
        <p className="text-slate-600 leading-relaxed mb-4">
          The uniform detection module achieved a mAP@0.5 of <strong style={{ color: "#e01870" }}>91.4%</strong> on the held-out test set, exceeding the target threshold of 85% set based on the literature review benchmarks. The YOLOv8s variant was selected after ablation testing showed it provided the best balance between accuracy and inference speed on the Raspberry Pi 4 hardware. Precision was slightly higher for the Compliant class (93.2%) compared to Non-Compliant (87.8%), likely because the Non-Compliant class encompasses a more diverse set of appearances.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          Facial recognition achieved <strong style={{ color: "#2255cc" }}>92.1%</strong> accuracy across 20 enrolled students under controlled DYC entrance conditions. The primary failure cases involved students with accessories (caps, masks) partially occluding facial features — consistent with the known limitations of InsightFace in occlusion scenarios documented in the literature.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          Real-time performance on the Raspberry Pi 4 reached <strong style={{ color: "#e01870" }}>10.3 FPS</strong> using the YOLOv8n checkpoint with ONNX Runtime optimization, surpassing the minimum 8 FPS threshold for practical entrance monitoring. This was achieved without hardware accelerators, using only the Pi 4&apos;s ARM Cortex-A72 CPU.
        </p>
        <p className="text-slate-600 leading-relaxed">
          The system usability evaluation yielded a mean score of <strong style={{ color: "#2255cc" }}>4.38 out of 5.0</strong> across all ISO/IEC 25010 quality dimensions, indicating a high level of user acceptance among both administrative staff and security personnel. Respondents rated Functional Suitability and Usability highest, while Performance Efficiency received slightly lower marks due to occasional processing lag during peak multi-person frames.
        </p>
      </section>
    </main>
  );
}
