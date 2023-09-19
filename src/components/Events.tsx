"use client";

import { useState } from "react";
import useSWR from "swr";

const fetchEvents = () => {
  return [
    {
      title:
        "Archifest Singapore 2023<br />In conversation with Manuel Der Hagopian",
      details: "August 23, 2023 — 7:00pm<br />Virtual event<br />Zoom",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero urna, lacinia sit amet lacus tempus, congue eleifend leo. Donec pellentesque lectus egestas tortor convallis, in consequat justo sollicitudin. In semper elit quis justo gravida, sit amet varius urna blandit. In hendrerit viverra.",
      calendar: {},
      image: {},
    },
  ];
};

export const Events = () => {
  const [open, setOpen] = useState<0 | 1 | 2 | 3>(0);
  const { data } = useSWR<ReturnType<typeof fetchEvents>>(
    "events",
    fetchEvents
  );
  const [slide, setSlide] = useState(0);
  return (
    <section
      id="events"
      className="relative w-full py-2 border-chilli-grey border-x px-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_2fr] gap-4">
        <div className="flex flex-col items-start justify-between">
          <div>
            <h2 className="section-heading">Upcoming Events</h2>
            <p className="hidden md:block mb-8">
              Get to know the authors behind the book! From in-person bookstore
              events to virtual conversations, exciting events await.
            </p>
          </div>
          {data?.[0] === undefined ? (
            <div>Loading</div>
          ) : (
            <article>
              <h3
                className="mb-4"
                dangerouslySetInnerHTML={{ __html: data[0].title }}
              />
              <p
                className="font-mono text-sm mb-4"
                dangerouslySetInnerHTML={{ __html: data[0].details }}
              />

              <p
                className="mb-4"
                dangerouslySetInnerHTML={{ __html: data[0].description }}
              />
              <a
                href="#"
                className="text-base inline-block px-4 py-1 border border-black rounded-full"
              >
                Add this to calendar
              </a>
            </article>
          )}
        </div>
        <div className="vertical-border border-l border-chilli-grey hidden md:block">
          &nbsp;
        </div>
        <div>
          <div className="bg-chilli-pink aspect-[4/3] xl:aspect-[9/5]"></div>
        </div>
      </div>
    </section>
  );
};
