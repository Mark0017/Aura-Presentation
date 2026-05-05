import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Team from "@/components/Team";
import ProblemObjectives from "@/components/Problem-Objectives";
import SignificanceMethodology from "@/components/Significance-Methodology";
import Chapters from "@/components/Chapters";
import Diagrams from "@/components/Diagrams";
import ContactUs from "@/components/Contact-us";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Team />
      <ProblemObjectives />
      <SignificanceMethodology />
      <Chapters />
      <Diagrams />
      <ContactUs />
    </>
  );
}
