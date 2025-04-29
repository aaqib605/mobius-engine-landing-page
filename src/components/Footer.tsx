import { motion } from "framer-motion";

import Logo from "./Logo";
import logo from "../assets/footer-logo.png";
import linkedInLogo from "../assets/linkedIn-colored.png";

const contactInfo = [
  {
    id: 1,
    infoName: "Address",
    infoDetails: `1875 Mission St Ste 103 450
San Francisco, CA 94103`,
  },
  {
    id: 2,
    infoName: "Email",
    infoDetails: `finance@mobiusengine.ai`,
  },
  {
    id: 3,
    infoName: "Telephone",
    infoDetails: `650-889-6026`,
  },
];

export default function Footer() {
  return (
    <motion.footer
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-[#0649E7] mb-20 max-[580px]:mb-10"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col gap-10">
        <Logo logo={logo} className="w-24 h-auto" />
        <span className="inline-block border-t border-[#BCBCBC] w-[300px]"></span>
      </div>
      <div className="flex items-start justify-between gap-10 mt-10 max-[580px]:flex-col">
        <div className="grid grid-cols-3 gap-10 max-[980px]:grid-cols-1 max-[980px]:gap-6">
          {contactInfo.map((info) => (
            <motion.div
              key={info.id}
              className="flex flex-col gap-1.5"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: info.id * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="font-semibold text-sm underline">
                {info.infoName}
              </span>
              <span className="font-medium text-md">{info.infoDetails}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span>Socials</span>
          <p className="flex gap-3">
            <a
              href="#"
              className="border border-[#0649E7] inline-flex items-center justify-center object-contain w-10 h-10 rounded-full"
            >
              <img
                src={linkedInLogo}
                alt="LinkedIn Logo"
                className="object-contain"
              />
            </a>
            <a
              href="#"
              className="border border-[#0649E7] inline-flex items-center justify-center w-10 h-10 rounded-full"
            >
              <img
                src={linkedInLogo}
                alt="LinkedIn Logo"
                className="object-contain"
              />
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
