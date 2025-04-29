import { motion } from "framer-motion";

import AshwinProfileImg from "../../assets/ashwin-profile.png";
import NicoleProfileImg from "../../assets/nicole-profile.png";
import TeamMember from "../TeamMember";

const teamMembers = [
  {
    name: "Ashwin",
    description:
      "Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.",
    subtext:
      "Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.",
    imageUrl: AshwinProfileImg,
  },
  {
    name: "Nicole",
    description:
      "Nicole is an Executive coach at Mobius specializing in resume builds and career advisory.",
    subtext:
      "With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.",
    imageUrl: NicoleProfileImg,
  },
];

const cta = [
  {
    text: "Learn more about our Board of Advisors",
    href: "#",
  },
  {
    text: "Follow us on LinkedIn page",
    href: "#",
  },
];

export default function AboutSection() {
  return (
    <motion.section
      className="max-w-[1080px] mx-auto w-full bg-cover bg-center py-12 md:py-26 px-16 max-md:px-6 min-h-screen"
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto mb-24">
        <h2 className="text-4xl font-medium text-white max-lg:text-center">
          About Us
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-24">
        {teamMembers.map((member, index) => (
          <div key={index}>
            <TeamMember member={member} />
          </div>
        ))}
      </div>
      <motion.div
        className="mt-24 flex flex-col items-center justify-center gap-3 max-md:text-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {cta.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-white block hover:underline"
          >
            {item.text} ↗︎
          </a>
        ))}
      </motion.div>
    </motion.section>
  );
}
