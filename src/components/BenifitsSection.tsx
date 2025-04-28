import { motion } from "framer-motion";

import BenifitCard from "./BenifitCard";
import HeartIcon from "../assets/heart.png";
import ProfileIcon from "../assets/profile.png";
import StarIcon from "../assets/star.png";

const cards = [
  {
    id: 1,
    text: "Tried, Tested, Trusted",
    subtext:
      "Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back.",
    icon: HeartIcon,
  },
  {
    id: 2,
    text: "Real People, Real Help",
    subtext:
      "A hands-on team that actually cares — guiding you through every twist in your career path.",
    icon: ProfileIcon,
  },
  {
    id: 3,
    text: "Beat the Line",
    subtext:
      "We search, shortlist, and apply for you, so your name shows up first — every single day.",
    icon: StarIcon,
  },
];

export default function BenifitsSection() {
  return (
    <motion.section
      className="py-8 min-[900px]:py-16 px-16 max-md:px-6"
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-[1080px] mx-auto bg-[#F8FAFF] p-12 max-md:px-0 max-md:bg-transparent rounded-4xl">
        <h2 className="text-3xl font-medium text-[#022183] mb-16 min-[900px]:mb-24 max-[900px]:text-center">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-8 mb-20">
          {cards.map((card) => (
            <BenifitCard
              id={card.id}
              key={card.id}
              text={card.text}
              subtext={card.subtext}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
