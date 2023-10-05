"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { AnimatePresence, motion } from "framer-motion";
import btnSlideArrow from "../../public/btn-slide-arrow.svg";
import Image from "next/image";

const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2023-09-20",
  perspective: "published",
});

const builder = imageUrlBuilder(sanity);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

const fetchEvents = async () => {
  return await sanity.fetch(`*[ _type == 'event' ]|order(orderRank)`);
};

export const Events = () => {
  const { data, isLoading, error } = useSWR<
    {
      title: string;
      details: string;
      description: string;
      thumbnail: any;
      datetimeStart: string;
      datetimeEnd: string;
      venue: string;
      url: string;
    }[]
  >("events", fetchEvents);

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (!Array.isArray(data)) {
      return;
    }
    const head = document.querySelector("head");

    const existingEventPreload = document.querySelectorAll(
      "link[data-event-preload]"
    );
    if (existingEventPreload.length < 1) {
      data
        .map((d) => {
          let link = document.createElement("link");
          link.setAttribute("rel", "preload");
          link.setAttribute("as", "image");
          link.setAttribute("data-event-preload", "true");
          link.setAttribute(
            "href",
            urlFor(d.thumbnail).width(1000).quality(75).url()
          );
          return link;
        })
        .forEach((node) => {
          head?.append(node);
        });
    }
  }, [data, isLoading]);

  if (error) {
    return (
      <section
        id="events"
        className="relative w-full border-chilli-grey border-x px-4 scroll-my-16 bg-white z-[2]"
      >
        An error has occurred.
      </section>
    );
  }
  return (
    <section
      id="events"
      className="relative w-full border-chilli-grey border-x px-4 scroll-my-16 bg-white z-[2]"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_2fr] gap-4">
        <div className="flex flex-col items-start justify-between py-2">
          <div>
            <h2 className="section-heading">Upcoming Events</h2>
          </div>
          {isLoading || data === undefined ? (
            <div>Loading</div>
          ) : (
            <article>
              <motion.h3
                className="mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.0, type: "spring", duration: 1.85 }}
                dangerouslySetInnerHTML={{
                  __html: data[slide].title.replaceAll("\n", "<br />"),
                }}
              />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1, type: "spring", duration: 1.85 }}
                className="font-mono text-sm mb-0 md:mb-4"
                dangerouslySetInnerHTML={{
                  __html: data[slide].details.replaceAll("\n", "<br />"),
                }}
              />

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2, type: "spring", duration: 1.85 }}
                className="mb-4 hidden md:block"
                dangerouslySetInnerHTML={{
                  __html: data[slide].description.replaceAll("\n", "<br />"),
                }}
              />
              {data[slide]?.url?.length !== undefined &&
                data[slide]?.url?.length > 0 && (
                  <motion.a
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      delay: 0.3,
                      type: "spring",
                      duration: 1.85,
                    }}
                    href={data[slide].url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base px-4 py-1 border border-black rounded-full hidden md:inline-block hover:bg-chilli-pink transition-all duration-500"
                  >
                    Event information
                  </motion.a>
                )}
            </article>
          )}
        </div>
        <div className="vertical-border border-l border-chilli-grey hidden md:block">
          &nbsp;
        </div>
        <div className="py-2">
          <AnimatePresence>
            {data !== undefined && (
              <div className="width-full aspect-[4/3] lg:aspect-[9/5] overflow-hidden relative">
                {data.length > 1 && (
                  <button
                    onClick={() => {
                      setSlide((a) => (a < 1 ? data.length - 1 : a - 1));
                    }}
                    className="absolute top-[50%] left-4 z-[9] translate-y-[-50%]"
                  >
                    <Image
                      src={btnSlideArrow}
                      alt="previous event"
                      className="scale-x-[-1] w-8 h-8"
                    />
                  </button>
                )}

                {data.length > 1 && (
                  <button
                    onClick={() => {
                      setSlide((a) => (a >= data.length - 1 ? 0 : a + 1));
                    }}
                    className="absolute top-[50%] right-4 z-[8] translate-y-[-50%]"
                  >
                    <Image
                      src={btnSlideArrow}
                      alt="next event"
                      className="w-8 h-8"
                    />
                  </button>
                )}
                <motion.img
                  key={slide}
                  src={urlFor(data[slide].thumbnail)
                    .width(1000)
                    .quality(75)
                    .url()}
                  className="block w-full h-full object-cover"
                  initial={{ opacity: 0, zIndex: 2 }}
                  animate={{ opacity: 1, zIndex: 2 }}
                  exit={{ opacity: 0, zIndex: 2 }}
                  transition={{ duration: 3.6, easings: ["easeOut"] }}
                />
              </div>
            )}
          </AnimatePresence>

          {data !== undefined && (
            <>
              <p
                className="my-4 md:hidden block"
                dangerouslySetInnerHTML={{
                  __html: data[0].description.replaceAll("\n", "<br />"),
                }}
              />
              {data[slide]?.url !== undefined && (
                <motion.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    delay: 0.3,
                    type: "spring",
                    duration: 1.85,
                  }}
                  target="_blank"
                  rel="noreferrer"
                  href={data[slide].url}
                  className="text-base px-4 py-2 border border-black rounded-full md:hidden block my-2 text-center uppercase"
                >
                  Event Information
                </motion.a>
              )}
            </>
          )}
          <div className="flex justify-center gap-2 md:hidden py-2">
            {data !== undefined &&
              data.length > 1 &&
              new Array(data.length)
                .fill(0)
                .map((_d, n) => (
                  <b
                    key={`slide_${n}`}
                    className={`w-3 h-3 block ${
                      n === slide ? "bg-chilli-pink" : "bg-chilli-grey"
                    } rounded-full`}
                  />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};
