import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function ContactSection() {
  return (
    <motion.div
      className="flex items-center justify-between h-full text-white bg-[#0649E7] rounded-4xl px-15 max-[450px]:px-3 max-[980px]:flex-col max-[980px]:py-8"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <span className="font-medium text-4xl uppercase max-w-[250px] max-[980px]:text-3xl max-[450px]:text-2xl max-[980px]:max-w-full">
        Still have doubts?
      </span>
      <span className="font-semibold text-6xl max-[980px]:text-4xl max-[450px]:text-2xl text-center">
        Contact us
      </span>
      <span>
        <a
          href=""
          className="bg-white rounded-full p-2 shadow hover:bg-gray-100 transition-colors inline-flex justify-center items-center h-20 w-20 self-end max-[980px]:h-15 max-[980px]:w-15 max-[450px]:w-15 max-[450px]:h-15"
        >
          <FaArrowRight className="text-[#0649E7]" size="24" />
        </a>
      </span>
    </motion.div>
  );
}
