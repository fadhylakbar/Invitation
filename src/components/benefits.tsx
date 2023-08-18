
import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { feature } from "@/lib/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Benefit() {
  const { ref } = useSectionInView("Features",0.5);

  return (
    <section
      id="features"
      ref={ref}
      className="mb-24 max-w-[53rem] scroll-mt-2 text-center sm:mb-0"
    >
      <div className="mt-20 text-[3rem] font-normal font-gray-100 text-slate-700">Fitur Berkelas</div>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
        {feature.map((e, index) => {
          return (
            <motion.div
            key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
              className="flex flex-col bg-stone-50 borderBlack rounded-xl p-8 items-center gap-4 shadow-xl"
            >
              <span className="text-3xl">{e.icon}</span>
              <span className="font-thin">
                {e.title}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
