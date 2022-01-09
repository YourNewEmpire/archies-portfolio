import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Childs } from "../../interfaces/children";
export interface IRevealBox extends Childs {}
const RevealBox = ({ children }: IRevealBox) => {
  const animationControl = useAnimation();
  const { inView, entry, ref } = useInView();
  useEffect(() => {
    if (inView) {
      animationControl.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          delay: 0.2,
          duration: 1.1,
        },
      });
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={animationControl}
      >
        {" "}
        {children}
      </motion.div>
    </div>
  );
};
export default RevealBox;
