"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import I1 from "../../public/landing/1.jpg";
import I2 from "../../public/landing/2.jpg";
import I3 from "../../public/landing/3.jpg";
import I4 from "../../public/landing/4.jpg";
import I5 from "../../public/landing/5.jpg";

const fadeInProps = (delay?: number) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { delay: delay || 0.3, type: "spring", duration: 5 },
});

export const LandingModule = () => {
  const [open, setOpen] = useState<null | 1 | 2 | 3 | 4 | 5>(null);
  return (
    <div
      id="landing-module"
      className="relative w-full pb-2 border-chilli-grey border-x px-4"
    >
      <div id="landing-module-base" className={""}>
        <motion.span {...fadeInProps(0.1)} className="type-1 ">
          Pink
        </motion.span>
        <motion.span {...fadeInProps(0.2)} className="type-2">
          Chilli
        </motion.span>
        <motion.span {...fadeInProps(0.3)} className="type-3">
          in a
        </motion.span>
        <motion.span {...fadeInProps(0.4)} className="type-4">
          Bowl
        </motion.span>

        <motion.div
          {...fadeInProps(0.25)}
          onClick={() => {
            setOpen((n) => (n === 1 ? null : 1));
          }}
          className={
            open === 1
              ? "left-0 right-auto top-[60%] w-full lg:left-auto lg:right-0 lg:top-0 lg:w-full aspect-[1] lg:aspect-[1] z-[4] open"
              : `left-0 right-auto top-[60%] w-[25vw] h-[25vw] lg:left-auto lg:right-0 lg:top-0 lg:h-[25vh] lg:w-[25vh]`
          }
        >
          <Image src={I1} alt="" fill={true} />
        </motion.div>
        <motion.div
          {...fadeInProps(0.35)}
          onClick={() => {
            setOpen((n) => (n === 2 ? null : 2));
          }}
          className={
            open === 2
              ? "top-[30%] left-0 right-0 w-full aspect-[1.56] lg:w-full lg:left-0 lg:right-0 lg:top-[25%] lg:h-auto z-[4] open border border-chilli-grey"
              : "w-[35vw] aspect-[1.66] top-[30%] left-0 lg:top-[25%] lg:w-[32vh] border border-chilli-grey"
          }
        >
          <Image src={I2} alt="" fill={true} />
        </motion.div>
        <motion.div
          {...fadeInProps(0.45)}
          onClick={() => {
            setOpen((n) => (n === 3 ? null : 3));
          }}
          className={
            open === 3
              ? "top-0 left-auto right-0 w-full aspect-[.833] lg:w-full lg:left-0 lg:right-auto lg:top-[75%] lg:h-auto z-[4] open lg:aspect-[.833]"
              : "aspect-[7/9] left-auto right-0 top-0 w-[26vw] md:aspect-[5/6] lg:aspect-[5/6.2] lg:left-0 lg:right-auto lg:top-[75%] lg:w-[20vh]"
          }
        >
          <Image src={I3} alt="" fill={true} />
        </motion.div>
        <motion.div
          {...fadeInProps(0.55)}
          onClick={() => {
            setOpen((n) => (n === 4 ? null : 4));
          }}
          className={
            open === 4
              ? "top-[30%] left-auto right-0 w-full aspect-[.555] lg:w-full lg:left-0 lg:right-auto lg:top-[75%] lg:h-auto z-[4] open lg:aspect-[.555]"
              : "aspect-[7/9] right-0 left-auto w-[35vw] top-[30%] lg:aspect-[5/6.2] lg:right-auto lg:left-[calc(20vh+1rem)] lg:top-[75%] lg:w-[20vh]"
          }
        >
          <Image src={I4} alt="" fill={true} />
        </motion.div>
        <motion.div
          {...fadeInProps(0.65)}
          onClick={() => {
            setOpen((n) => (n === 5 ? null : 5));
          }}
          className={
            open === 5
              ? "top-[60%] left-auto right-0 w-full aspect-[1.667] lg:w-full lg:left-auto lg:right-0 lg:top-[75%] lg:h-auto z-[4] open lg:aspect-[1.667] border border-chilli-grey"
              : "top-[60%] right-0 w-[calc(100%-28vw)] aspect-[1.597] lg:top-[75%] lg:w-[40vh] border border-chilli-grey"
          }
        >
          <Image src={I5} alt="" fill={true} />
        </motion.div>
      </div>
    </div>
  );
};
