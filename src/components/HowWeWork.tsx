import { motion } from "framer-motion";

const steps = [
  { number: 1, description: "Submit Intake Form" },
  { number: 2, description: "We do the search and curation for list of jobs" },
  { number: 3, description: "You approve, we do the tedious part (applying)" },
  { number: 4, description: "You get the interviews" },
];

const WorkStep = ({
  number,
  description,
}: {
  number: number;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: number * 0.1 }}
    viewport={{ once: true }}
    className="flex flex-col justify-start space-y-4 max-lg:items-center"
  >
    <div className="flex items-center justify-center w-16 h-16 border-2 border-[#0649E7] rounded-full text-4xl font-medium">
      {number}
    </div>
    <div className="w-[75%] border-t-2 text-[#0649E7]"></div>
    <p className="text-[#0649E7] text-xl max-w-[250px] max-lg:max-w-[300px] font-medium max-lg:text-center">
      {description}
    </p>
  </motion.div>
);

export default function HowWeWork() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1080px] mx-auto px-6 flex flex-col max-lg:items-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0649E7] mb-24">
          How we work?
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-2 max-lg:gap-16 max-lg:items-center">
          {steps.map((step) => (
            <WorkStep
              key={step.number}
              number={step.number}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
