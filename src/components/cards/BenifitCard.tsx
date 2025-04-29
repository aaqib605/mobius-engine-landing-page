import { motion } from "framer-motion";

interface BenifitCardProps {
  id: number;
  text: string;
  subtext: string;
  icon: string;
}

export default function BenifitCard({
  text,
  subtext,
  icon,
  id,
}: BenifitCardProps) {
  return (
    <motion.div
      className="flex flex-col p-9 gap-6 rounded-4xl shadow-md border-2 border-[#022183] max-w-[400px] mx-auto text-[#022183]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: id * 0.2 }}
      viewport={{ once: true }}
    >
      <img src={icon} alt="Benifit Icon" className="w-12 h-12 mb-14" />
      <p className="font-semibold text-xl">{text}</p>
      <p className="text-sm">{subtext}</p>
    </motion.div>
  );
}
