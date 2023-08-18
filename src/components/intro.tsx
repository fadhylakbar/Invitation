"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineTemplate } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/landing.png"
              alt="image"
              width="800"
              height="800"
              quality="95"
              priority={true}
            />
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-6 px-4 text-2xl font-thin !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Undang orang terdekatmu dengan mudah, praktis dan tanpa ada batasan
        menggunakan Undangan Website kekinian dari <b>RahmadWeeding</b>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
          href="/CV.pdf"
          download
        >
          Pesan Sekarang{" "}
          <BsWhatsapp
            className="opacity-60 group-hover:translate-y-1 transition"
            color="green"
          />
        </a>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
          href="/CV.pdf"
          download
        >
          Lihat Template{" "}
          <HiOutlineTemplate
            className="opacity-60 group-hover:translate-y-1 transition"
            color="red"
          />
        </a>
      </motion.div>
    </section>
  );
}
