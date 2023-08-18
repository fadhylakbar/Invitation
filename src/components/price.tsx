import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { price } from "@/lib/data";
import { FaCrown } from "react-icons/fa";

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

export default function Price() {
  const { ref } = useSectionInView("Price", 0.5);

  return (
    <section
      id="price"
      ref={ref}
      className="mb-28 max-w-[53rem] sm:min-w-[53rem] scroll-mt-0 text-center sm:mb-40"
    >
      <div className="mt-20 text-[3rem] font-normal font-gray-100 text-slate-700">
        Paket dan Harga
      </div>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        {price.map((e, index) => {
          return (
            <div key={index} className={`bg-white border-[1px] ${e.type === "Paket Premium" ? "border-sky-200" : "border-slate-300"}`}>
              <div className={`${e.type === "Paket Premium" ? "bg-sky-300" : "bg-gray-300"} relative p-6`}>
                <span className="absolute right-[-30px] mt-[-55px] rotate-45">
                  {e.type === "Paket Premium" ? (
                    <FaCrown size={60} color="gold" />
                  ) : (
                    ""
                  )}
                </span>
                <span className="text-2xl text-white font-normal">{e.type === "Paket Premium" ? e.type + " 🔥" : e.type} </span>
              </div>
              <div className="mt-4 text-slate-500">
                <span>Rp</span>
                <span className="text-4xl font-bold">{e.price}</span>
              </div>
              <motion.ul
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                className="px-4"
              >
                {e.feat.map((li, index) => {
                  return (
                    <li
                      key={index}
                      className="flex gap-4 items-center border-b-[1px] px-2 py-3"
                    >
                      {li.icon}
                      <span className="font-thin">{li.title}</span>
                    </li>
                  );
                })}
              </motion.ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
