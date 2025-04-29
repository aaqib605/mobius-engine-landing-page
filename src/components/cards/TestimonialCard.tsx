import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { BsPlayCircleFill } from "react-icons/bs";

interface TestimonialCardProps {
  id: number;
  quote: string;
  link: string;
}

export default function TestimonialCard({
  quote,
  link,
  id,
}: TestimonialCardProps) {
  return (
    <motion.div
      className="rounded-4xl shadow-md overflow-hidden bg-[#0649E7] border-2 border-[#0649E7] max-w-[400px] mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: id * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="h-64 bg-white flex items-center justify-center rounded-4xl overflow-hidden z-10">
        <BsPlayCircleFill className="text-4xl opacity-75" color="#0649E7" />
      </div>

      <div className="bg-[#0649E7] text-white p-6 rounded-b-xl flex flex-col gap-6">
        <p className="text-lg">{quote}</p>
        <a
          href={link}
          className="bg-white rounded-full p-2 shadow  transition-colors -rotate-45 inline-flex justify-center items-center h-12 w-12 self-end"
        >
          <FaArrowRight className="text-[#0649E7]" size="20" />
        </a>
      </div>
    </motion.div>
  );
}
