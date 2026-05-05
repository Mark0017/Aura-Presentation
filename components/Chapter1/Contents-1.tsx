export default function Contents1() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">

      {/* Chapter Header */}
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#e01870" }}>
          Chapter 1
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Introduction and Background
        </h1>
        <div className="h-1 w-20 rounded-full" style={{ background: "linear-gradient(to right, #e01870, #4488ff)" }} />
      </div>

      {/* 1.1 Background of the Study */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-5 text-slate-900">
          <span style={{ color: "#e01870" }}>1.1</span> Background of the Study
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          The Department of Education (DepEd) of the Philippines mandates that all students in public and private schools wear proper school uniforms as a means of promoting discipline, equality, and a sense of school identity. Despite this policy, enforcing uniform compliance remains a persistent challenge for school administrators, particularly in large institutions with high student populations.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          Traditional methods of monitoring student uniform compliance rely heavily on manual inspection by security guards, teachers, or school personnel stationed at school entrances. This approach is labor-intensive, inconsistent, and prone to human error. Personnel fatigue, subjective judgment, and the sheer volume of students entering campus simultaneously make comprehensive uniform enforcement practically impossible using conventional means.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          Advances in artificial intelligence, particularly in the domains of computer vision and deep learning, present a compelling opportunity to automate and improve this process. Object detection models such as YOLOv8 (You Only Look Once, version 8) are capable of identifying and classifying objects in real-time video streams with high accuracy. Similarly, facial recognition technologies powered by models like InsightFace can reliably identify individuals from camera footage.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Dr. Yanga&apos;s Colleges Inc. (DYC), a private higher education institution in Bocaue, Bulacan, faces these same challenges. The institution currently relies on manual checks at its entrance gates, which often results in bottlenecks during peak hours and inconsistent enforcement of the uniform policy. This study proposes AURA — an AI-based Uniform Detection and Facial Recognition Assistance System — as a technology-driven solution to modernize and streamline the uniform monitoring process at DYC.
        </p>
      </section>

      {/* 1.2 Statement of the Problem */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-5 text-slate-900">
          <span style={{ color: "#2255cc" }}>1.2</span> Statement of the Problem
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Monitoring school uniform compliance continues to be a labor-intensive and inefficient process at Dr. Yanga&apos;s Colleges Inc. Teachers and staff are often required to visually inspect each student daily, consuming valuable instructional time and creating opportunities for inconsistency and human bias. These challenges underscore the need for an automated and objective approach capable of verifying both student identity and uniform compliance accurately and efficiently.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          While the current trend in educational institutions leans toward smart campus technologies and automated attendance, the primary issue is that these systems operate in silos. The identifiable research gap lies in the lack of an integrated, edge-computing solution that seamlessly combines both biometric identity verification and attire compliance monitoring into a single, real-time actuation mechanism for entry gates.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          Although facial recognition has been increasingly adopted in school attendance and access systems, most existing implementations focus solely on identity verification. There remains a significant gap in research and application for systems that integrate attire detection and facial recognition into a single automated device. The lack of such integrated technology limits schools from achieving consistent policy enforcement and operational efficiency.
        </p>
        <p className="text-slate-600 leading-relaxed">
          This study seeks to address these limitations by developing AURA, an AI-powered school uniform compliance scanner system that leverages computer vision and automation technologies. The system will integrate uniform detection, facial recognition, and real-time monitoring through a PC-based interface, while also linking to an automated door mechanism for controlled access. Through this innovation, the study aims to enhance school discipline management, streamline monitoring procedures, and promote fairness and accountability in enforcing uniform policies.
        </p>
      </section>

      {/* 1.3 Objectives of the Study */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-5 text-slate-900">
          <span style={{ color: "#e01870" }}>1.3</span> Objectives of the Study
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          The general objective of this study is to design and develop AURA — an AI-based Uniform Detection and Facial Recognition Assistance System for Dr. Yanga&apos;s Colleges Inc. — that automates the monitoring and recording of student uniform compliance.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4 font-semibold">Specifically, this study aims to:</p>
        <div className="space-y-4">
          {[
            { num: "01", text: "Develop a YOLOv8-based uniform detection module capable of classifying students as compliant or non-compliant with the school uniform policy in real time from standard CCTV footage." },
            { num: "02", text: "Integrate an InsightFace-powered facial recognition module to identify individual students captured by the detection system and associate violations with specific student records." },
            { num: "03", text: "Build an administrative web dashboard that logs uniform violations, generates compliance reports, and enables authorized personnel to manage student identity data and review flagged incidents." },
            { num: "04", text: "Evaluate the system's performance in terms of detection accuracy, facial recognition accuracy, real-time processing speed (frames per second), and end-user acceptability using an ISO/IEC 25010-aligned usability assessment." },
          ].map((obj, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-xl border"
              style={{ borderColor: i % 2 === 0 ? "#e0187030" : "#2255cc30", background: i % 2 === 0 ? "#fff0f5" : "#f0f5ff" }}>
              <span className="text-2xl font-extrabold shrink-0 leading-none"
                style={{ color: i % 2 === 0 ? "#e01870" : "#2255cc", opacity: 0.4 }}>{obj.num}</span>
              <p className="text-slate-700 text-sm leading-relaxed">{obj.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 1.4 Scope and Limitations */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-5 text-slate-900">
          <span style={{ color: "#2255cc" }}>1.4</span> Scope and Limitations
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          AURA is scoped specifically for deployment at Dr. Yanga&apos;s Colleges Inc. The system is designed to operate using the institution&apos;s existing CCTV infrastructure at designated entry and exit points. The uniform detection model is trained exclusively on the official DYC student uniform.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border border-slate-100 bg-slate-50">
            <h3 className="font-bold mb-3" style={{ color: "#e01870" }}>Within Scope</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {[
                "Real-time uniform classification (compliant / non-compliant)",
                "Student identity verification via facial recognition",
                "Violation logging and reporting dashboard",
                "Performance evaluation under DYC entry conditions",
                "Raspberry Pi 4 edge deployment prototype",
              ].map((s, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#e01870" }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5 rounded-xl border border-slate-100 bg-slate-50">
            <h3 className="font-bold mb-3" style={{ color: "#2255cc" }}>Limitations</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {[
                "Accuracy may degrade under poor lighting or extreme angles",
                "Does not cover accessories or partial components in detail",
                "Facial recognition requires pre-enrollment of student photos",
                "Network-dependent dashboard; no offline mode in current version",
                "Dataset limited to DYC uniform variants collected during the study",
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

      {/* 1.5 Significance of the Study */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-5 text-slate-900">
          <span style={{ color: "#e01870" }}>1.5</span> Significance of the Study
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          The development of AURA holds significant implications for multiple stakeholders within and beyond Dr. Yanga&apos;s Colleges Inc.:
        </p>
        <div className="space-y-4">
          {[
            { group: "School Administration", color: "#e01870", bg: "#fff0f5", text: "Provides an automated, data-driven mechanism for monitoring uniform compliance, reducing the need to dedicate personnel to manual inspection and enabling evidence-based policy decisions." },
            { group: "Security Personnel", color: "#2255cc", bg: "#f0f5ff", text: "Reduces workload and fatigue associated with manually screening students, allowing security staff to focus on more complex campus safety responsibilities." },
            { group: "Students", color: "#e01870", bg: "#fff0f5", text: "Creates a transparent and consistent enforcement environment where all students are held to the same standard, reducing perceptions of favoritism." },
            { group: "Parents and Guardians", color: "#2255cc", bg: "#f0f5ff", text: "Increases confidence that the institution actively enforces its policies and maintains a structured learning environment conducive to discipline." },
            { group: "Future Researchers", color: "#e01870", bg: "#fff0f5", text: "Contributes a replicable model for deploying AI-based compliance monitoring in Philippine educational institutions, advancing the local body of knowledge in applied computer vision." },
          ].map((sig, i) => (
            <div key={i} className="p-4 rounded-xl border" style={{ borderColor: `${sig.color}25`, background: sig.bg }}>
              <p className="font-bold text-sm mb-1" style={{ color: sig.color }}>{sig.group}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{sig.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 1.6 Conceptual Framework */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-5 text-slate-900">
          <span style={{ color: "#2255cc" }}>1.6</span> Conceptual Framework
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          The conceptual framework of AURA follows an Input-Process-Output (IPO) model. Raw CCTV video frames serve as inputs; the AI processing pipeline performs uniform detection and identity recognition; and the system outputs violation alerts, student identification, and compliance reports accessible through the administrative dashboard.
        </p>
        <div className="rounded-2xl overflow-hidden border border-slate-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Diagrams/conceptual-framework.png"
            alt="Conceptual Framework"
            className="w-full object-contain p-6 bg-slate-50"
          />
          <div className="px-6 py-3 border-t text-sm font-semibold text-center"
            style={{ borderColor: "#e0187020", color: "#e01870" }}>
            Figure 1.1 — AURA Conceptual Framework
          </div>
        </div>
      </section>

    </main>
  );
}
