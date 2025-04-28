import { motion } from "framer-motion";

import LinkedInImg from "../assets/linkedIn.png";

interface TeamMemberProps {
  name: string;
  description: string;
  subtext: string;
  imageUrl: string;
}

export default function TeamMember({ member }: { member: TeamMemberProps }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col lg:flex-row items-center justify-center gap-24 max-lg:gap-8"
    >
      <div className="w-[240px] h-[250px] relative">
        <img
          src={member.imageUrl}
          alt={member.name}
          className="w-full h-full object-cover rounded-full shadow-lg relative"
        />
        <div className="h-20 w-20 rounded-full flex items-center justify-center absolute bottom-0 right-0 backdrop-blur-md border border-white">
          <img src={LinkedInImg} alt="LinkedIn Logo" />
        </div>
      </div>

      <div className="text-white max-w-lg text-center lg:text-left">
        <p className="text-md text-gray-300 leading-relaxed">
          {member.description}
        </p>
        <p className="text-sm text-gray-300 leading-relaxed mt-6">
          {member.subtext}
        </p>
      </div>
    </motion.div>
  );
}
