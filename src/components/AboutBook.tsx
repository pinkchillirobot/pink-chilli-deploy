"use client";
import { motion } from "framer-motion";

const animProps = {
  initial: { top: "2rem", opacity: 0 },
  whileInView: { top: 0, opacity: 1 },
  exit: { top: "2rem", opacity: 0 },
  transition: { delay: 0.2, type: "spring", duration: 1.85 },
};

const fadeInProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { delay: 0.3, type: "spring", duration: 1.85 },
};

export const AboutBook = () => {
  return (
    <section
      id="about"
      className="relative w-full border-chilli-grey border-x px-4  scroll-my-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_2fr] gap-4">
        <div className="flex flex-col items-start justify-between">
          <div className="py-2">
            <motion.h2 {...fadeInProps} className="section-heading">
              About the Book
            </motion.h2>
            <motion.p {...fadeInProps} className="my-3">
              Neither a tourist guide nor a work of historical records, “Pink
              Chilli in a Bowl” is a personal archive of forgotten places and
              time-honoured buildings that may someday be wiped out—some of
              which have already disappeared amidst the backdrop of a city that
              is constantly developing. These pages detail an intangible side of
              Singapore, encouraging readers to tap into their imaginations and
              reconstruct their mental map of the island nation in ways that
              inspire them.
            </motion.p>
            <motion.p {...fadeInProps} className="my-3">
              Each Constellation is composed of three different types of
              entries: restaurant, food, and landmark, which can all be found
              within a twenty-to forty-minute promenade.
            </motion.p>
            <motion.p {...fadeInProps} className="my-3">
              The Stars are singular entries in a specific location or
              characteristic that is worth highlighting.
            </motion.p>
            <motion.p {...fadeInProps} className="my-3">
              The Essays are contributions made by food-enthusiastic writers
              about Singaporean eateries which contextualise the current survey
              into the specifics of the social, cultural, and political
              environment in this island-nation.
            </motion.p>
            <motion.p {...fadeInProps} className="my-3">
              The Archives are curated selections of photographs which showcase
              the generic patterns of diversity in Singapore.
            </motion.p>
          </div>
        </div>
        <div className="vertical-border border-l border-chilli-grey hidden md:block">
          &nbsp;
        </div>
        <div className="py-2">
          <motion.div className="xl:aspect-[9/5] hidden md:block text-5xl tracking-tight leading-none [&>span]:block [&>span]:relative md:pt-[8px]">
            <motion.span {...animProps}>28 Constellations</motion.span>
            <motion.span {...animProps}>12 Stars</motion.span>
            <motion.span {...animProps}>3 Essays</motion.span>
            <motion.span {...animProps}>8 Archives</motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
