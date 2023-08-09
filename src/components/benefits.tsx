"use client";

import React from "react";
// import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { features } from "@/lib/data";

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
  const { ref } = useSectionInView("Fitur");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <div className="mt-20 text-[3rem] font-normal">Benefits</div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        {features.map((e, index) => {
          return (
            <motion.div
            key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: false,
              }}
              custom={index}
              className="flex flex-col bg-white borderBlack rounded-xl px-5 py-3"
            >
              <span>{e}</span>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Temporibus, eum quidem.
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
