import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

import ApplicationPlanCard from "./ApplicationPlanCard";
import Button from "./ui/Button";

const cards = [
  {
    id: 1,
    planName: "April Promo",
    isPopular: false,
    planPrice: "$35",
    planBenifits: [
      "Curated jobs from 1M+ listings, refreshed every 48 hours",
      "Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)",
      "Need more? Add extra apps for just $1.5 each",
      "Your own dedicated application analyst",
      "Personalized with up to 10 filters & 5 job titles",
    ],
  },
  {
    id: 2,
    planName: "Starter",
    isPopular: true,
    planPrice: "$50",
    planDescription: "All the perks of the Promo Plan, plus:",
    planBenifits: [
      "Resume review & story-focused feedback",
      "Dedicated search specialist",
      "Up to 50 job apps/week",
      "Extra apps at $1.5 each",
      "Analyst support within 6 hours (SLA/PST hours)",
    ],
  },
  {
    id: 3,
    planName: "Plus",
    isPopular: false,
    planPrice: "$100",
    planDescription: "Everything in Starter, with more muscle:",
    planBenifits: [
      "Up to 75 apps/week",
      "Apply to 15 job titles",
      "Analyst + full application team on Pacific hours",
    ],
  },
];

const advancedPlanCard = {
  id: 1,
  planName: "Advance",
  isPopular: false,
  planDescription: "Top-tier support for serious job hunters:",
  planPrice: "$150",
  planBenifits: [
    "Everything in Plus",
    "Custom Resumes & Cover Letters",
    "20 fully customized applications/week",
    "Help with complex job searches",
    "Access to senior resume experts, Founder & Exec Coaches",
  ],
};

export default function ApplicationPlansSection() {
  return (
    <motion.section
      className="py-8 min-[900px]:py-16 px-16 max-md:px-6"
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-[1080px] mx-auto max-md:bg-transparent rounded-4xl">
        <h2 className="text-3xl font-medium text-[#0649E7] mb-16 min-[900px]:mb-24 max-[900px]:text-center">
          Job Application Service Plans
        </h2>

        <div className="grid grid-cols-1 min-[980px]:grid-cols-3 gap-8 mb-20 max-[980px]:mb-8">
          {cards.map((card) => (
            <ApplicationPlanCard
              key={card.id}
              id={card.id}
              planName={card.planName}
              planPrice={card.planPrice}
              isPopular={card.isPopular}
              planDescription={card.planDescription}
              planBenifits={card.planBenifits}
            />
          ))}
        </div>

        <motion.div
          className="flex flex-col p-9 max-[375px]:px-3 gap-6 rounded-4xl shadow-md border-2 bg-[#0649E7] mx-auto text-white max-[980px]:max-w-[400px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between max-[980px]:flex-col max-[980px]:items-start gap-10">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-3xl">
                {advancedPlanCard.planName}
              </p>
              <p className="font-semibold">
                {advancedPlanCard.planDescription}
              </p>
            </div>

            <p className="text-md mb-8">
              <span className="font-bold text-5xl">
                {advancedPlanCard.planPrice}
              </span>
              /week
            </p>
          </div>

          <div className="border-b-2 border-[#BCBCBC] min-[980px]:w-[40%]"></div>

          <div className="flex flex-col gap-4 min-[980px]:flex-row justify-between">
            <ul className="flex max-[980px]:flex-col gap-4 mb-3 min-[980px]:w-[60%] flex-wrap">
              {advancedPlanCard.planBenifits.map((benifit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span>
                    <FaCheckCircle color="#4AD257" size={16} />
                  </span>
                  <span className="text-sm font-medium -mt-1">{benifit}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-center lg:justify-start mt-auto">
              <Button href="#" className="text-[#0649E7] bg-white">
                Get Started →
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="border-b-2 border-[#BCBCBC] mt-20"></div>
      </div>
    </motion.section>
  );
}
