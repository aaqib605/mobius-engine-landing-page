import { motion } from "framer-motion";

import TestimonialCard from "./TestimonialCard";
import Button from "./ui/Button";

const testimonials = [
  {
    id: 1,
    quote:
      "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
    link: "/case-study/holly",
  },
  {
    id: 2,
    quote:
      "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
    link: "/case-study/holly-2",
  },
  {
    id: 3,
    quote:
      "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
    link: "/case-study/holly-3",
  },
];

export default function TestimonialsSection() {
  return (
    <motion.section
      className="py-16 min-[900px]:py-24 px-16 max-md:px-6"
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-[1080px] mx-auto">
        <h2 className="text-3xl font-medium text-[#0649E7] mb-16 min-[900px]:mb-24 max-[900px]:text-center">
          What our clients have to say
        </h2>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              id={testimonial.id}
              quote={testimonial.quote}
              link={testimonial.link}
            />
          ))}
        </div>

        <div className="flex max-[900px]:flex-col justify-center items-center gap-8 min-[900px]:gap-16">
          <Button
            href="#"
            className="px-5 py-3 rounded-4xl border-2 border-[#0649E7] text-[#0649E7] hover:bg-blue-50 transition-colors"
          >
            More customer testimonials ↗︎
          </Button>
          <button className="px-8 py-3 rounded-4xl bg-[#0649E7] text-white hover:bg-blue-700 transition-colors cursor-pointer">
            Get Started ➞
          </button>
        </div>
      </div>
    </motion.section>
  );
}
