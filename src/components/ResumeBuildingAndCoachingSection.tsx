import { motion } from "framer-motion";

import ResumeBuildingAndCoachingCard from "./ResumeBuildingAndCoachingCard";

const cards = [
  {
    id: 1,
    planName: "Resume Rebuild",
    planDescription:
      "Crafted for senior to VP-level professionals ready for their next big step.",
    planPrice: "$1000",
    planBenifits: [
      "3× 30-min coaching",
      "Focused on storytelling, not just formatting",
      "Analyst + full application team on Pacific hours",
      "Tailored to your target industry, company, or role",
      "Direct work with our co-founder (ex-Google, JP Morgan)",
      "Executive coaching from UC Berkeley alum with 10+ yrs experience",
      "Resume Rebuild portfolio available upon request",
    ],
  },
  {
    id: 2,
    planName: "Interview Prep",
    planDescription:
      "Two sessions to sharpen your story, confidence, and clarity — fast.",
    planPrice: "$500",
    planBenifits: [
      "2× 45-min live coaching with our co-founder",
      "Real-time, practical feedback",
      "Build clarity, empathy & executive presence",
      "Extra apps at $1.5 each",
      "For senior and leadership roles — technical & non-technical",
    ],
  },
];

export default function ResumeBuildingAndCoachingSection() {
  return (
    <motion.section
      className="py-8 min-[900px]:py-16 px-16 max-md:px-6"
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-[1080px] mx-auto max-md:bg-transparent rounded-4xl">
        <div className="text-[#0649E7] mb-25 max-[900px]:text-center">
          <h2 className="text-4xl font-semibold mb-3">
            Resume Building & Coaching
          </h2>
          <p>
            Let’s talk about where you’re headed — and how your resume can get
            you there.
          </p>
          <p className="font-bold">Schedule a call to get started.</p>
        </div>

        <div className="flex flex-col min-[980px]:flex-row gap-8 mb-20 max-[980px]:mb-8 max-w-[850px] mx-auto">
          {cards.map((card) => (
            <ResumeBuildingAndCoachingCard
              key={card.id}
              id={card.id}
              planName={card.planName}
              planPrice={card.planPrice}
              planDescription={card.planDescription}
              planBenifits={card.planBenifits}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
