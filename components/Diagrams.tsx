"use client";

import { useState } from "react";
import Image from "next/image";

const groups = [
  {
    label: "Conceptual Framework",
    accent: "#e01870",
    items: [
      { src: "/images/Diagrams/conceptual-framework.png", caption: "Conceptual Framework" },
    ],
  },
  {
    label: "Software Diagrams",
    accent: "#2255cc",
    items: [
      { src: "/images/Diagrams/Context-Diagram.png",   caption: "Context Diagram" },
      { src: "/images/Diagrams/use-case-diagram.png",  caption: "Use Case Diagram" },
      { src: "/images/Diagrams/Activity-Diagram.png",  caption: "Activity Diagram" },
      { src: "/images/Diagrams/UCS1.png",              caption: "Use Case Scenario 1" },
      { src: "/images/Diagrams/UCS2.png",              caption: "Use Case Scenario 2" },
      { src: "/images/Diagrams/UCS3.png",              caption: "Use Case Scenario 3" },
      { src: "/images/Diagrams/UCS4.png",              caption: "Use Case Scenario 4" },
      { src: "/images/Diagrams/UCS5.png",              caption: "Use Case Scenario 5" },
      { src: "/images/Diagrams/UCS6.png",              caption: "Use Case Scenario 6" },
      { src: "/images/Diagrams/UCS7.png",              caption: "Use Case Scenario 7" },
      { src: "/images/Diagrams/UCS8.png",              caption: "Use Case Scenario 8" },
    ],
  },
  {
    label: "AI / ML Results",
    accent: "#9933ee",
    items: [
      { src: "/images/Diagrams/labelling-image.png",   caption: "Labelling Image" },
      { src: "/images/Diagrams/ConfusionMatrix.png",   caption: "Confusion Matrix" },
      { src: "/images/Diagrams/UniformDetection.png",  caption: "Uniform Detection Output" },
      { src: "/images/Diagrams/FaceRecognition.png",   caption: "Face Recognition Output" },
    ],
  },
  {
    label: "Hardware",
    accent: "#e01870",
    items: [
      { src: "/images/Diagrams/3D-model.png",          caption: "3D Model" },
      { src: "/images/Diagrams/Block-Diagram.png",     caption: "Block Diagram" },
      { src: "/images/Diagrams/Circuit-Diagram.png",   caption: "Circuit Diagram" },
      { src: "/images/Diagrams/budget.png",            caption: "Bill of Materials" },
    ],
  },
];

export default function Diagrams() {
  const [activeTab, setActiveTab] = useState(0);
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

  const group = groups[activeTab];

  return (
    <section id="diagrams" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Diagrams</h2>
        <div className="section-divider" />

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {groups.map((g, i) => (
            <button
              key={g.label}
              onClick={() => setActiveTab(i)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border"
              style={
                activeTab === i
                  ? { background: g.accent, color: "#fff", borderColor: g.accent }
                  : { background: "#fff", color: "#64748b", borderColor: "#e2e8f0" }
              }
            >
              {g.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {group.items.map((item) => (
            <button
              key={item.src}
              onClick={() => setLightbox(item)}
              className="group relative bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 text-left"
            >
              <div className="relative w-full h-52">
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-contain p-3"
                />
              </div>
              <div
                className="px-4 py-3 border-t text-sm font-semibold"
                style={{ borderColor: `${group.accent}20`, color: group.accent }}
              >
                {item.caption}
              </div>
              {/* hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
                style={{ background: `${group.accent}15` }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: group.accent }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.85)" }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative w-full" style={{ minHeight: "400px", maxHeight: "70vh" }}>
              <Image
                src={lightbox.src}
                alt={lightbox.caption}
                fill
                className="object-contain p-6"
              />
            </div>

            <div
              className="px-6 py-4 border-t text-sm font-semibold text-center"
              style={{ borderColor: `${group.accent}20`, color: group.accent }}
            >
              {lightbox.caption}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
