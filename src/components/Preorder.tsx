"use client";
import Image from "next/image";
import book from "../../public/book.jpg";
import { motion } from "framer-motion";

export const Preorder = () => {
  return (
    <section
      id="buy"
      className="relative w-full py-2 border-chilli-grey border-x px-4 scroll-my-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_3fr] lg:grid-cols-[1fr_1px_2fr] gap-4">
        <div className="flex justify-between flex-col items-start order-2 md:order-1">
          <div className="flex justify-start flex-col w-full">
            <motion.h2
              className="section-heading md:block hidden order-8 w-full md:order-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", duration: 1.85 }}
            >
              Pre-order our Book
            </motion.h2>
            <motion.p
              className="mb-4 order-2 md:order-1 w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", duration: 1.85 }}
            >
              Pre-order &ldquo;Pink Chilli in a Bowl&rdquo; online for S$150
              (excluding GST). Orders will be fulfilled post-launch on 9 October
              2023.
            </motion.p>
            <motion.p
              className="order-1 md:order-2 w-full mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", duration: 1.85 }}
            >
              <a
                href="https://pagesetters.sg/?add-to-cart=2523&quantity=1"
                target="_blank"
                rel="noreferrer"
                className="text-base block text-center uppercase md:normal-case md:inline-block px-4 py-2 md:py-1 border border-black rounded-full hover:bg-chilli-pink transition-500 transition-all"
              >
                Pre-order the book
              </a>
            </motion.p>
          </div>
          <div className="[&_p]:font-mono [&_p]:text-xs order-3 md:block grid grid-cols-[1fr_1fr] gap-4">
            <motion.p
              className="mb-0 self-end md:mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", duration: 1.85 }}
            >
              ISBN 978-981-18-8118-3
              <br />
              478 pages
              <br />
              230mmW x 288mmH x 30mm spine width
              <br />
              Weight: 1.5kg
            </motion.p>
            <motion.p
              className="self-end"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", duration: 1.85 }}
            >
              For distribution enquiries, please write to us at{" "}
              <a
                className="underline break-all"
                href="mailto:distribution@pagesetters.com.sg"
              >
                distribution@pagesetters.com.sg
              </a>
            </motion.p>
          </div>
        </div>
        <div className="vertical-border border-l border-chilli-grey hidden md:block order-4 md:order-2">
          &nbsp;
        </div>

        <div className="order-1 md:order-3">
          <motion.h2 className="section-heading block md:hidden">
            Pre-order our Book
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", duration: 1.85 }}
          >
            <Image src={book} alt="the book" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
