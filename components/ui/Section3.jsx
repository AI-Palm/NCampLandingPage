"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
  Variants,
  useViewportScroll,
} from "framer-motion";
import Image from "next/image";

function Section3() {
  const { scrollXProgress } = useScroll();
  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50,
    },
  };
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const controls = useAnimation();
  scrollXProgress.onChange((latest) => {
    controls.set({ scaleX: latest });
  });
  return (
    <div className="flex flex-col gap-12 justify-center items-center">
      <section className="">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src="/anh1.png"
            width={400}
            height={300}
            alt=""
            className="relative overflow-hidden"
          ></motion.img>
        </motion.div>

        <motion.div
          className="flex flex-col gap-3 justify-center items-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src="/anh1.png"
            width={400}
            height={300}
            alt=""
            className="relative overflow-hidden"
          ></motion.img>
        </motion.div>
        <motion.div
          className="flex flex-col gap-3 justify-center items-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src="/anh1.png"
            width={400}
            height={300}
            alt=""
            className="relative overflow-hidden"
          ></motion.img>
        </motion.div>
        <motion.div
          className="flex flex-col gap-3 justify-center items-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src="/anh1.png"
            width={400}
            height={300}
            alt=""
            className="relative overflow-hidden"
          ></motion.img>
        </motion.div>
        <motion.div
          className="flex flex-col gap-3 justify-center items-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src="/anh1.png"
            width={400}
            height={300}
            alt=""
            className="relative overflow-hidden"
          ></motion.img>
        </motion.div>
      </section>
      <section ref={ref}>
        <span
          className="opacity-0 translate-x-28 block"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: " 0.5s",
          }}
        >
          <motion.img
            src="/anh1.png"
            width={400}
            height={300}
            alt=""
            className="relative overflow-hidden"
          ></motion.img>
        </span>
      </section>
      <motion.div>
        <motion.img
          src="/next.svg"
          width={400}
          height={200}
          alt=""
          className=""
        ></motion.img>
      </motion.div>
      <motion.img
        style={{ backgroundImage: `url('/anh1.png')`, scaleX: scrollYProgress }}
        width={400}
        height={200}
        alt=""
        className="fixed  right-0 origin-[0%]"
        animate={controls}
      ></motion.img>
    </div>
  );
}

export default Section3;
