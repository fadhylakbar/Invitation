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
      {/* <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mt-10">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul> */}
    </section>
  );
}
