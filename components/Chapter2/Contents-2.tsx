export default function Contents2() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">

      {/* Chapter Header */}
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#2255cc" }}>
          Chapter 2
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Review of Related Literature
        </h1>
        <div className="h-1 w-20 rounded-full" style={{ background: "linear-gradient(to right, #e01870, #4488ff)" }} />
      </div>

      {/* 2.1 Overview */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-5 text-slate-900">
          <span style={{ color: "#2255cc" }}>2.1</span> Overview of Intelligent Door Systems for Access Control
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          The evolution of access control systems in educational institutions reflects a broader shift from mechanical locks and manual security checks toward intelligent, sensor-driven automation. Early access control relied on physical keys and human gatekeepers — methods that are inherently prone to inconsistency, tailgating, and unauthorized entry. The introduction of RFID and keycard systems in the 1990s marked the first generation of scalable electronic access control, but these systems authenticate tokens rather than individuals, offering no protection against credential sharing or loss.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          The second generation introduced biometric authentication — fingerprint scanners and iris recognition — which tied access credentials to the individual. However, standalone biometric systems remain limited to identity verification and do not assess behavioral or policy compliance attributes such as uniform adherence. This creates a functional gap in institutions that require both identity verification and attire compliance as conditions for entry.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          The emergence of deep learning-powered computer vision in the 2010s enabled a third generation of intelligent door systems capable of simultaneously analyzing multiple attributes of an approaching individual — identity, attire, carried items, and behavioral cues — in real time from standard camera feeds. These systems can be integrated with electronic door actuators, alert systems, and centralized dashboards, creating a comprehensive access control and compliance monitoring pipeline.
        </p>
        <p className="text-slate-600 leading-relaxed">
          AURA is positioned within this third generation. By combining YOLOv8-based uniform detection with InsightFace-powered facial recognition on an edge device connected to an automated door mechanism, AURA represents an application of intelligent door system architecture to the specific governance needs of Dr. Yanga&apos;s Colleges Inc. This chapter reviews the existing literature across the key technical and operational domains that underpin AURA&apos;s design.
        </p>
      </section>

      {/* 2.2 Review Methods */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-5 text-slate-900">
          <span style={{ color: "#e01870" }}>2.2</span> Review Methods
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          A structured literature review was conducted to identify, evaluate, and synthesize studies relevant to the development of AURA. The review followed an adapted Preferred Reporting Items for Systematic Reviews (PRISMA) approach, covering electronic databases including IEEE Xplore, ACM Digital Library, Google Scholar, Scopus, and ResearchGate.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          Search queries were constructed using Boolean combinations of the following terms: <em>facial recognition access control</em>, <em>YOLOv8 object detection</em>, <em>school uniform compliance</em>, <em>InsightFace recognition</em>, <em>IoT smart lock</em>, <em>RFID attendance system</em>, <em>edge computing surveillance</em>, and <em>automated entry system school</em>. The search was limited to peer-reviewed journal articles, conference proceedings, and technical reports published between 2018 and 2024.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          Initial screening yielded 87 candidate papers. After applying inclusion and exclusion criteria — including relevance to access control, biometric recognition, attire detection, or IoT integration — 23 papers were selected for full review and synthesis.
        </p>

        {/* 2.2.3 Categorization */}
        <div className="pl-4 border-l-2 mb-2" style={{ borderColor: "#e01870" }}>
          <h3 className="text-lg font-bold mb-4 text-slate-900">
            <span style={{ color: "#e01870" }}>2.2.3</span> Categorization and Quality Assessment
          </h3>
        </div>
        <p className="text-slate-600 leading-relaxed mb-4">
          The 23 selected papers were categorized into five thematic groups to align with the core functional components of AURA:
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "#0d0d2e", color: "white" }}>
                <th className="px-4 py-3 text-left font-semibold">Theme</th>
                <th className="px-4 py-3 text-left font-semibold">Papers</th>
                <th className="px-4 py-3 text-left font-semibold">Focus Area</th>
              </tr>
            </thead>
            <tbody>
              {[
                { theme: "Facial Recognition & Anti-Spoofing", count: "7", focus: "ArcFace, InsightFace, liveness detection" },
                { theme: "Uniform / Attire Compliance", count: "4", focus: "YOLO-based clothing detection, dress-code enforcement" },
                { theme: "IoT Smart Locks & Sensing", count: "5", focus: "Automated door actuators, solenoid locks, alert systems" },
                { theme: "Legacy Multi-Factor Baselines", count: "4", focus: "RFID, keypad, Bluetooth access control" },
                { theme: "Ethics & Governance", count: "3", focus: "Privacy, data protection, consent frameworks" },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="px-4 py-3 font-medium text-slate-700">{row.theme}</td>
                  <td className="px-4 py-3 text-center">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                      style={{ background: i % 2 === 0 ? "#e01870" : "#2255cc" }}>
                      {row.count}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-500">{row.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-slate-600 leading-relaxed">
          Quality assessment was conducted using a modified Mixed Methods Appraisal Tool (MMAT), evaluating each paper on methodological rigor, reproducibility of results, clarity of experimental conditions, and relevance to the Philippine educational context. Papers scoring below 60% on the quality criteria were excluded from the synthesis, leaving the final set of 23 papers used throughout this chapter.
        </p>
      </section>

      {/* 2.3 Thematic Findings */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-5 text-slate-900">
          <span style={{ color: "#2255cc" }}>2.3</span> Thematic Findings
        </h2>
        <p className="text-slate-600 leading-relaxed mb-8">
          The following subsections synthesize the key findings from the reviewed literature, organized by the five thematic categories identified during quality assessment.
        </p>

        {/* 2.3.1 */}
        <div className="mb-10">
          <div className="pl-4 border-l-2 mb-4" style={{ borderColor: "#e01870" }}>
            <h3 className="text-lg font-bold text-slate-900">
              <span style={{ color: "#e01870" }}>2.3.1</span> Facial Recognition for Door Access and Anti-Spoofing
            </h3>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">
            Facial recognition has become the dominant biometric modality for automated access control due to its contactless nature and high accuracy under controlled conditions. The ArcFace loss function (Deng et al., 2019), which introduces an additive angular margin to improve discriminability of face embeddings, has become a standard backbone for high-accuracy recognition. InsightFace, which implements ArcFace alongside optimized detection and landmark alignment pipelines, consistently achieves top-tier performance on LFW, IJB-B, and IJB-C benchmarks.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Several studies have deployed InsightFace-based systems in controlled entry scenarios, reporting recognition accuracy between 91–96% under well-lit conditions. Performance degrades significantly under partial occlusion (masks, sunglasses), extreme pose angles exceeding 40°, and low-light environments below 50 lux. These findings directly inform AURA&apos;s scope limitations and the placement of supplemental lighting at DYC&apos;s entrance gates.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Anti-spoofing — the detection of presentation attacks using printed photos, video replays, or 3D masks — is an active research area. Passive liveness detection methods using texture analysis (LBP, CNN-based) achieve over 98% accuracy on standard spoof datasets. AURA&apos;s current implementation does not include an anti-spoofing module, which is noted as a future enhancement recommendation.
          </p>
        </div>

        {/* 2.3.2 */}
        <div className="mb-10">
          <div className="pl-4 border-l-2 mb-4" style={{ borderColor: "#2255cc" }}>
            <h3 className="text-lg font-bold text-slate-900">
              <span style={{ color: "#2255cc" }}>2.3.2</span> Uniform / Attire Compliance at Entry
            </h3>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">
            Research on automated attire compliance detection is less mature than facial recognition but has accelerated with the adoption of YOLO-family detectors for clothing analysis. Studies on PPE (Personal Protective Equipment) detection in industrial settings — structurally analogous to uniform detection — demonstrate that YOLOv8 achieves mAP@0.5 scores exceeding 88% on well-annotated datasets with diverse backgrounds and lighting conditions.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            School uniform-specific studies are limited. A CNN-based uniform classifier deployed in a Japanese secondary school achieved 85% accuracy under controlled gate conditions. A Faster R-CNN implementation in a Thai university demonstrated 79% mAP but required high-performance GPU hardware incompatible with edge deployment goals. Both systems operated in isolation from any identity verification component.
          </p>
          <p className="text-slate-600 leading-relaxed">
            No reviewed study combined uniform detection with facial recognition in a unified real-time pipeline, nor was any system deployed on Raspberry Pi-class hardware for Philippine school environments. This gap is the primary technical motivation for AURA&apos;s integrated design.
          </p>
        </div>

        {/* 2.3.3 */}
        <div className="mb-10">
          <div className="pl-4 border-l-2 mb-4" style={{ borderColor: "#e01870" }}>
            <h3 className="text-lg font-bold text-slate-900">
              <span style={{ color: "#e01870" }}>2.3.3</span> IoT Integration: Smart Locks, Sensing, and Alerts
            </h3>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">
            The integration of computer vision systems with IoT actuators — particularly electromagnetic solenoid locks and servo-driven door mechanisms — has been demonstrated in several prototypes. Studies show that GPIO-controlled relay modules on Raspberry Pi hardware can reliably actuate 12V solenoid locks with latency under 200ms from detection trigger to physical response, which is acceptable for pedestrian gate control scenarios.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Real-time alert systems using SMS gateways (e.g., Semaphore, Twilio) and push notifications have been successfully integrated with Python-based detection pipelines in prior work. Alert delivery latency averages 1.5–3 seconds over mobile networks, sufficient for administrative notification use cases though not for immediate gate actuation decisions.
          </p>
          <p className="text-slate-600 leading-relaxed">
            AURA&apos;s hardware design draws on these findings, using a Raspberry Pi 4 GPIO interface to control the door relay module and a FastAPI webhook endpoint to trigger push notifications to the administrative dashboard. The combination of edge inference and IoT actuation in a single device has been validated by prior work as technically feasible within the hardware constraints.
          </p>
        </div>

        {/* 2.3.4 */}
        <div className="mb-10">
          <div className="pl-4 border-l-2 mb-4" style={{ borderColor: "#2255cc" }}>
            <h3 className="text-lg font-bold text-slate-900">
              <span style={{ color: "#2255cc" }}>2.3.4</span> Legacy & Multi-Factor Baselines (RFID, Keypad, Bluetooth)
            </h3>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">
            RFID-based attendance and access systems remain the most widely deployed technology in Philippine schools and universities due to their low cost and ease of implementation. However, literature consistently documents their core limitations: cards can be shared, lost, or cloned; the system authenticates the card rather than the cardholder; and no compliance information beyond presence is captured.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Keypad PIN systems offer similar functionality with similar vulnerabilities — PINs can be shared and observed. Bluetooth proximity-based access, while convenient, requires students to have registered smartphones with active Bluetooth, introducing dependency on personal devices and battery life as failure points.
          </p>
          <p className="text-slate-600 leading-relaxed">
            These legacy systems serve as the performance and usability baseline against which AURA is evaluated. The key advantage AURA offers over all legacy approaches is the simultaneous verification of identity and uniform compliance in a single, touchless interaction — a capability no RFID, keypad, or Bluetooth system can provide without additional hardware components.
          </p>
        </div>

        {/* 2.3.5 */}
        <div className="mb-10">
          <div className="pl-4 border-l-2 mb-4" style={{ borderColor: "#e01870" }}>
            <h3 className="text-lg font-bold text-slate-900">
              <span style={{ color: "#e01870" }}>2.3.5</span> Operational, Ethical, and Governance Considerations
            </h3>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">
            The deployment of biometric surveillance systems in educational settings raises important ethical and governance questions. Reviewed literature highlights three primary concerns: student privacy, data security, and potential for discriminatory outcomes. In the Philippine context, these concerns are governed by the Data Privacy Act of 2012 (RA 10173), which classifies biometric data as sensitive personal information requiring explicit consent, proportionality of collection, and stringent storage controls.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Studies from European and East Asian institutions that have deployed facial recognition in schools report that student and parental consent processes, transparency in data use, and clearly defined data retention policies are the most critical governance requirements for successful and legally compliant deployment. Several studies note that systems storing raw biometric images rather than derived embeddings face greater regulatory scrutiny.
          </p>
          <p className="text-slate-600 leading-relaxed">
            AURA&apos;s ethical framework — storing only face embeddings, implementing role-based access control, obtaining written informed consent, and maintaining on-premise data storage — was designed in direct response to these governance requirements identified in the literature. This approach aligns with best practices documented across the reviewed studies.
          </p>
        </div>
      </section>

      {/* 2.4 Synthesis and Identified Gaps */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-5 text-slate-900">
          <span style={{ color: "#2255cc" }}>2.4</span> Synthesis and Identified Gaps
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          The reviewed literature collectively demonstrates the technical feasibility of each individual component of AURA — facial recognition, uniform detection, IoT door actuation, and administrative dashboards — but reveals a consistent absence of integrated systems that combine all these components. Three specific gaps motivate this study:
        </p>
        <div className="space-y-4">
          {[
            {
              num: "Gap 1",
              color: "#e01870",
              bg: "#fff0f5",
              title: "No Integrated Detection + Recognition Pipeline for Schools",
              text: "All reviewed uniform detection and facial recognition systems operate as independent modules. No study combines both into a single real-time pipeline designed specifically for school entry monitoring. AURA directly addresses this gap by integrating YOLOv8 and InsightFace in a unified processing chain that produces both a compliance status and a student identity in a single camera frame.",
            },
            {
              num: "Gap 2",
              color: "#2255cc",
              bg: "#f0f5ff",
              title: "Absence of Philippine-Context School Uniform Research",
              text: "Published research on automated uniform monitoring is concentrated in Japanese, South Korean, and Thai institutions. No study addresses the specific uniform designs, student demographics, CCTV infrastructure quality, or governance requirements of Philippine schools. AURA contributes the first documented implementation and evaluation of such a system in the Philippine educational context.",
            },
            {
              num: "Gap 3",
              color: "#e01870",
              bg: "#fff0f5",
              title: "Edge Deployment Gap for Resource-Constrained Environments",
              text: "Existing integrated vision systems for access control assume GPU-equipped servers or cloud inference pipelines. This makes them inaccessible for most Philippine schools operating on limited IT budgets. AURA validates the deployment of a combined detection and recognition pipeline on a Raspberry Pi 4 edge device — a sub-₱5,000 hardware platform — using ONNX Runtime optimization to achieve the minimum viable FPS for entrance monitoring.",
            },
          ].map((g, i) => (
            <div key={i} className="p-5 rounded-xl border" style={{ borderColor: `${g.color}25`, background: g.bg }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                  style={{ background: g.color }}>{g.num}</span>
                <p className="font-bold text-slate-800">{g.title}</p>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{g.text}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
