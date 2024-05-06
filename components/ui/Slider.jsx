"use client";
import React from "react";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
const boxVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};
function Slider() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div>
      <section ref={ref}>
        <span
          className="opacity-0 translate-x-28 block"
          style={{
            transform: isInView ? "none" : "translateX(0px), translateY(0px)",
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
            variants={boxVariant}
            initial="hidden"
            animate="visible"
          ></motion.img>
        </span>
      </section>
    </div>
  );
}

export default Slider;
