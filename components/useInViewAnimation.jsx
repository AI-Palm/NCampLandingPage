import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const useInViewAnimation = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: 0 });
    }
  }, [controls, inView]);

  return { ref, controls };
};

export default useInViewAnimation;
