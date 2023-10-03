"use client";
import { motion } from "framer-motion";

export const Video = () => {
  return (
    <motion.section
      id="video"
      className="relative w-full py-2 border-chilli-grey border-x px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.0, type: "spring", duration: 1.85 }}
    >
      <iframe
        src="https://www.youtube.com/embed/vpJeAp6mLvM"
        className="w-full aspect-video"
        title="Video"
      />
    </motion.section>
  );
};
