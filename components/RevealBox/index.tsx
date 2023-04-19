import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Childs } from "../../interfaces/children";
import {
  opacityAnimation,
  opacityExit,
  opacityInitial,
} from "../../lib/animations";
export interface IRevealBox extends Childs {
  initialObj: object;
  animateObj: object;
  exitObj: object;
}

const RevealBox = ({
  children,
  initialObj,
  animateObj,
  exitObj,
}: IRevealBox) => {
  const animationControl = useAnimation();
  const { inView, entry, ref } = useInView();

  useEffect(() => {
    if (inView) {
      animationControl.start(animateObj ?? opacityAnimation);
    } else {
      animationControl.start(exitObj ?? opacityExit);
    }
    //! Adding AnimationControl to deps will stop intended behaviour
  }, [inView]);
  return (
    <div ref={ref}>
      <motion.div
        initial={initialObj ?? opacityInitial}
        animate={animationControl}
      >
        {" "}
        {children}
      </motion.div>
    </div>
  );
};
export default RevealBox;
