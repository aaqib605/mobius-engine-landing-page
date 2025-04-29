import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../ui/Button";

interface ApplicationPlanCardProps {
  id: number;
  planName: string;
  planPrice: string;
  isPopular: boolean;
  planDescription?: string;
  planBenifits: string[];
}

export default function ApplicationPlanCard({
  id,
  planName,
  planPrice,
  isPopular,
  planDescription,
  planBenifits,
}: ApplicationPlanCardProps) {
  return (
    <motion.div
      className="flex flex-col p-9 max-[375px]:px-3 gap-6 rounded-4xl shadow-md border-2 border-[#0649E7] mx-auto text-[#0649E7] max-w-[400px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: id * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between">
        <p className="font-semibold text-3xl">{planName}</p>
        {isPopular && (
          <span className="py-1.5 px-3 bg-[#EBF1FF] rounded-4xl text-sm font-medium">
            Popular
          </span>
        )}
      </div>

      <p className="text-md mb-8">
        <span className="font-bold text-5xl">{planPrice}</span>/week
      </p>

      <div className="border-b-2 border-[#BCBCBC]"></div>

      {planDescription && <p className="font-semibold">{planDescription}</p>}

      <ul className="flex flex-col gap-4 mb-3">
        {planBenifits.map((benifit, index) => (
          <li key={index} className="flex items-start gap-2">
            <span>
              <FaCheckCircle color="#4AD257" size={16} />
            </span>
            <span className="text-sm font-medium -mt-1">{benifit}</span>
          </li>
        ))}
      </ul>

      <div className="flex justify-center lg:justify-start mt-auto">
        <Button href="#" className="bg-[#0649E7] text-white">
          Get Started →
        </Button>
      </div>
    </motion.div>
  );
}
