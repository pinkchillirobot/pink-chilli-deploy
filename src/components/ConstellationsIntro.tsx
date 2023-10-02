"use client";

import { motion } from "framer-motion";

const constFadeInWithDelay = (n: number) => ({
  initial: { opacity: 0, top: "1rem" },
  whileInView: { opacity: 1, top: 0 },
  exit: { opacity: 1, top: 0 },
  transition: {
    delay: n,
    type: "spring",
    duration: 1.85,
  },
});

export const ConstellationsIntro = () => {
  return (
    <section
      id="constellations"
      className="relative w-full border-chilli-grey border-x px-4 scroll-my-16"
    >
      <div className="grid grid-cols-[1fr_1px_1fr] md:grid-cols-[1fr_1px_3fr] lg:grid-cols-[1fr_1px_2fr] gap-4">
        <div className="[&>p]:indent-[2em] [&_p:nth-of-type(1)]:indent-0 sticky top-4 md:top-16 self-start flex justify-between flex-col items-start md:min-h-[calc(100vh-6rem)]">
          <div className="py-2">
            <motion.h2
              className="section-heading"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", duration: 1.85 }}
            >
              Constellations and Stars
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", duration: 1.85 }}
            >
              &ldquo;Pink Chilli in a Bowl&rdquo; is an invitation for the
              curious explorer to venture beyond the surface of Singapore’s
              urban landscape through twenty-eight constellations. Each
              constellation—composed of a network of local establishments,
              architectural landmarks, and places of worship—can be described as
              a sensual voyage, enriched by the art of everyday eateries and a
              multifaceted street culture. Unveil hidden links between seemingly
              disparate and diverse spaces that showcase the lesser-known
              humanistic side of an automated nation.
            </motion.p>
          </div>

          <div className="">
            <p className="font-mono text-xs mt-8">
              All documentations, addresses and information of eateries are
              accurate as of 2020–2022.
            </p>
          </div>
        </div>
        <div className="vertical-border border-l border-chilli-grey block">
          &nbsp;
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 pt-0 md:pt-[8px]">
          <div className="py-2">
            <h5 className="block md:hidden section-heading">Constellations</h5>
            <ul className="text-base md:text-4xl xl:text-5xl leading-5 md:tracking-tight leading-[1.1] [&>li]:pl-16 [&>li]:-indent-16">
              <li className="inline-block !indent-0 !pl-0 relative">
                <a
                  href="#"
                  className="indent-0 pl-0 hover:text-chilli-pink"
                  onClick={(e) => {
                    e.preventDefault();
                    const elem = document.getElementById("map");
                    if (elem) {
                      elem.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Yuhua
                </a>
                <span className="text-[10px] lg:text-xs text-chilli-grey font-mono tracking-none  top-[50%] translate-y-[-55%] left-[calc(100%+1em)] w-24 absolute md:leading-[1.1] lg:leading-[1.1] uppercase indent-0 pl-0">
                  <span className="touch:hidden inline">
                    Click to view the promenade
                  </span>
                  <span className="touch:inline hidden">Tap to view</span>
                </span>
              </li>
              <motion.li className="relative" {...constFadeInWithDelay(0.0)}>
                Upper Bukit Timah
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.025)}>
                Tanglin Halt
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.5)}>
                Alexandra
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.75)}>
                Tiong Bahru
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.1)}>
                Bukit Pasoh
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.125)}>
                Kreta Ayer
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.15)}>
                Telok Ayer
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.175)}>
                Kampong Glam
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.2)}>
                Crawford
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.225)}>
                Little India
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.25)}>
                Lavender
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.275)}>
                Farrer Park
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.3)}>
                Balestier
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.325)}>
                Toa Payoh North
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.35)}>
                Sin Ming
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.375)}>
                Tai Seng
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.4)}>
                Sims Geylang
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.425)}>
                Geylang East
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.45)}>
                Joo Chiat
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.475)}>
                East Coast
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.5)}>
                Springleaf
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.525)}>
                Yishun
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.55)}>
                Kebun Baru
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.575)}>
                Jalan Kayu
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.6)}>
                Kembangan
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.625)}>
                Simpang Bedok
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.65)}>
                Changi
              </motion.li>
            </ul>
          </div>
          <div className="py-2">
            <div className="block md:hidden border-t border-chilli-grey mb-8" />

            <h5 className="block md:hidden section-heading">Stars</h5>
            <ul className="text-base md:text-4xl xl:text-5xl leading-5 md:leading-tighter md:tracking-tight  [&>li]:pl-8 [&>li]:-indent-8 md:[&>li]:pl-16 md:[&>li]:-indent-16">
              <motion.li className="relative" {...constFadeInWithDelay(0.125)}>
                Zul&apos;s Traditional Dry Chilli
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.15)}>
                Seng Hong Coffeeshop
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.175)}>
                Makko Teck Neo{" "}
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.2)}>
                Lim Joo Hin Eating House
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.225)}>
                Outram Park Ya Hua Rou Gu Cha
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.25)}>
                Lau Ah Tee Bak Kut Teh
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.275)}>
                River South Prawn Noodles
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.3)}>
                928 Yishun Laksa
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.325)}>
                Lau Wang Claypot Delights
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.35)}>
                Ponggol Nasi Lemak{" "}
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.375)}>
                Madeleine&apos;s Original Egg Tart
              </motion.li>
              <motion.li className="relative" {...constFadeInWithDelay(0.4)}>
                Fu Lin Tofu Yuen
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
