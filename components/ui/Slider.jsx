"use client";
import React from "react";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
function Slider() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div>
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
    </div>
  );
}

export default Slider;
