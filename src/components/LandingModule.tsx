"use client";

import { useEffect, useState } from "react";
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
  const [lastOpen, setLastOpen] = useState<null | 1 | 2 | 3 | 4 | 5>(null);

  useEffect(() => {
    if (open === undefined) {
      return;
    }
    setLastOpen(() => open);
  }, [open]);

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
          className={`image-1`}
        >
          <div>
            <Image src={I1} alt="" fill={true} />
          </div>
        </motion.div>
        <motion.div
          {...fadeInProps(0.35)}
          onClick={() => {
            setOpen((n) => (n === 2 ? null : 2));
          }}
          className={`image-2`}
        >
          <div>
            <Image src={I2} alt="" fill={true} />
          </div>
        </motion.div>
        <motion.div
          {...fadeInProps(0.45)}
          onClick={() => {
            setOpen((n) => (n === 3 ? null : 3));
          }}
          className={`image-3`}
        >
          <div>
            <Image src={I3} alt="" fill={true} />
          </div>
        </motion.div>
        <motion.div
          {...fadeInProps(0.55)}
          onClick={() => {
            setOpen((n) => (n === 4 ? null : 4));
          }}
          className={`image-4`}
        >
          <div>
            <Image src={I4} alt="" fill={true} />
          </div>
        </motion.div>
        <motion.div
          {...fadeInProps(0.65)}
          onClick={() => {
            setOpen((n) => (n === 5 ? null : 5));
          }}
          className={`image-5`}
        >
          <div>
            <Image src={I5} alt="" fill={true} />
          </div>
        </motion.div>

        <motion.div
          onClick={() => {
            setOpen(null);
          }}
          className={`image-zoom ${
            open !== null
              ? `opacity-100 pointer-events-all`
              : `opacity-0 pointer-events-none`
          }`}
        >
          <div>
            {lastOpen === 1 ? (
              <Image src={I1} alt="" fill={true} />
            ) : open === 2 ? (
              <Image src={I2} alt="" fill={true} />
            ) : open === 3 ? (
              <Image src={I3} alt="" fill={true} />
            ) : open === 4 ? (
              <Image src={I4} alt="" fill={true} />
            ) : open === 5 ? (
              <Image src={I5} alt="" fill={true} />
            ) : (
              <></>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
