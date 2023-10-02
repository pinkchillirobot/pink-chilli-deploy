"use client";
import Image from "next/image";
import { useState } from "react";
import btnClose from "../../public/btn-close.svg";

const contributorsData = [
  {
    name: "Isabelle Der Hagopian",
    title: "Author",
    description: (
      <>
        Isabelle Der Hagopian is a Swiss doctor practicing for 25 years between
        Switzerland and Southeast Asia. Fascinated by Asian street food and
        culture of cities. she co-authored the famed &ldquo;Nancy
        Chandler&apos;s Map of Hanoi&rdquo; in 2010, and is the author of
        &ldquo;Pink Chilli in a Bowl&rdquo;, a subjective survey on eateries in
        Singapore. She is currently working on a study on market typologies in
        Saigon, Vietnam.
      </>
    ),
  },
  {
    name: "Manuel Der Hagopian",
    title: "Author",
    description: (
      <>
        Manuel Der Hagopian is a Co-founder and Partner at G8A Architects. He is
        in charge of operations at the Singapore and Ho Chi Minh offices, and
        also co-manages the offices in Geneva and Hanoi. In collaboration with
        international and local institutions, Manuel is contributing to research
        and education by architectural studios and juries for a diversity of
        international architectural schools and cultural institutions.
      </>
    ),
  },
  {
    name: "Stephanie Peh",
    title: "Main Contributing Writer",
    url: "https://www.stephpeh.com",
    description: (
      <>
        Stephanie Peh is an independent writer and creative producer born and
        raised in Singapore. In 2020, she published &ldquo;Self-made: Creative
        Lives in Southeast Asia&rdquo;, a paperback documenting the stories of
        creative individuals and how they navigate the terrain of uncertainty to
        create meaningful lives. 
      </>
    ),
  },
  {
    name: "Mindy Tan",
    title: "Main Photographer",
    url: "https://www.mindytan.com",
    description: (
      <>
        Mindy Tan is a Singapore-born photographer whose editorial and
        commercial work has been published worldwide. As a former newspaper
        journalist, her favourite subjects are people, with a penchant for
        tradition and nostalgia.
      </>
    ),
  },
  {
    name: "Don Wong",
    title: "Photographer",
    url: "https://www.dwkm.space",
    description: (
      <>
        Don Wong is a former photojournalist currently refining his photography
        practice and way-of-seeing by documenting his encounters of the built
        environment with an unsentimental gaze, paying closer attention instead
        to form, detail and presence. 
      </>
    ),
  },
  {
    name: "Sarah Mineko Ichioka",
    title: "Essay Writer",
    url: "https://desire-lines.com",
    description: (
      <>
        Sarah Mineko Ichioka is a strategist, urbanist, and writer. She is
        Founding Director of Desire Lines, a consultancy for environmental,
        cultural, and social-impact organizations and initiatives. In previous
        and parallel roles, she has explored the intersections of cities,
        society and ecology within leading international institutions of
        culture, policy and research.
      </>
    ),
  },
  {
    name: "Ming Tan",
    title: "Essay Writer",
    url: "https://foodproducer.co/team/ming-tan",
    description: (
      <>
        Ming is a massive food nerd with over 12 years of experience in the
        industry. He’s worked as head chef of Lolla, owned and run Park Bench
        Deli, and has travelled throughout Asia working on various tasty
        projects. Most recently a host on various food programmes for Channel
        NewsAsia, he believes food is primarily about people.
      </>
    ),
  },
  {
    name: "Adib Jalal",
    title: "Essay Writer",
    url: "https://www.adibjalal.com",
    description: (
      <>
        Adib Jalal is an urbanist whose work revolves around partnering and
        engaging stakeholders to address complex urban issues. He is currently a
        researcher in a think-tank about cities.
      </>
    ),
  },

  {
    name: "Ariel Lee",
    title: "Copyeditor",
    description: (
      <>
        Ariel is a reading enthusiast who loves to engage with the English
        language in all its many forms, fiction, non-fiction, translations—any
        genre under the sun. Working with books is a passion, and she welcomes
        any opportunity to stretch her editing muscles.
      </>
    ),
  },
  {
    name: "Practice Theory",
    title: "Designer",
    url: "https://practicetheory.com.sg",
    description: (
      <>
        Practice Theory is an award-winning design and branding agency founded
        in 2015. Together, we are a group of designers, strategists, art
        directors, and creative producers with offices in Singapore and Ho Chi
        Minh City. Our work is guided by the belief that design can instigate
        meaningful change and shape culture in enduring ways.
      </>
    ),
  },
];

export const Contributors = () => {
  const [activeIndex, setActiveIndex] = useState<number>();
  return (
    <section
      id="contributors"
      className="relative w-full py-2 border-chilli-grey border-x px-4 scroll-my-16"
    >
      <div className="grid grid-cols-[1fr_1px_1fr] md:grid-cols-[1fr_1px_3fr] lg:grid-cols-[1fr_1px_2fr] gap-4">
        <div className="[&>p]:indent-[2em] [&_p:nth-of-type(1)]:indent-0 self-start flex justify-between flex-col items-start">
          <div>
            <h2 className="section-heading">Our Contributors</h2>
            <p>
              We extend our heartfelt thanks to all the contributors of this
              book. Your passion, dedication, and unique perspectives have made
              this project come to life. We are deeply grateful for your
              valuable insights, creative contributions, and unwavering support.
              Together, we have created something truly special, and we look
              forward to the impact it will have on readers worldwide.
            </p>
          </div>
        </div>
        <div className="vertical-border border-l border-chilli-grey block">
          &nbsp;
        </div>
        <div className="grid gap-4 md:grid-cols-2 pt-8  md:pt-[15px]">
          <div className="flex flex-col align-start justify-between">
            <ul className="text-base md:text-3xl xl:text-4xl md:tracking-tight leading-[1.1] [&>li]:pl-0 [&>li]:-indent-0 md:[&>li]:pl-16 md:[&>li]:-indent-16">
              {contributorsData.map((c, n) => (
                <li
                  className="mb-1"
                  key={c.name}
                  onClick={() => {
                    setActiveIndex(n);
                  }}
                >
                  <a
                    href="#"
                    className={`inline ${
                      n === activeIndex
                        ? "text-chilli-pink hover:text-chilli-pink/80"
                        : "text-text"
                    } hover:text-chilli-pink`}
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs mt-8 font-mono text-chilli-grey">
              <span className="touch:inline hidden">
                Tap a contributor&apos;s name for their biography
              </span>
              <span className="touch:hidden inline">
                Click a contributor&apos;s name for their biography
              </span>
            </p>
          </div>
          {activeIndex !== undefined && (
            <div className="hidden md:block">
              <div className="font-mono text-xs mb-4">
                {contributorsData[activeIndex]?.name}
                <br />
                {contributorsData[activeIndex]?.title}
                {!!contributorsData[activeIndex]?.url && (
                  <>
                    <br />
                    <a
                      href={contributorsData[activeIndex]?.url}
                      className="underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {contributorsData[activeIndex]?.url}
                    </a>
                  </>
                )}{" "}
              </div>

              <p className="">{contributorsData[activeIndex]?.description}</p>
            </div>
          )}
        </div>
      </div>
      <div className="block md:hidden">
        <div
          className="fixed top-0 right-0 w-full h-full z-25 bg-[transparent] cursor-pointer"
          style={{ display: activeIndex !== undefined ? "block" : "none" }}
          onClick={() => {
            setActiveIndex(() => undefined);
          }}
        >
          &nbsp;
        </div>
        <div
          className={`fixed top-0 right-0 w-full h-full overflow-hidden transition-all`}
          style={{
            zIndex: activeIndex !== undefined ? 30 : 0,
            left: activeIndex !== undefined ? 0 : "100%",
          }}
        >
          <div
            className={`absolute w-full h-full max-w-[40rem] bg-white/90 border-l border-chilli-grey transition-all transition-500 top-0`}
            style={{ right: activeIndex === undefined ? "-40rem" : 0 }}
          >
            <button
              className="top-4 right-4 absolute p-1"
              onClick={() => {
                setActiveIndex(() => undefined);
              }}
            >
              <Image src={btnClose} alt="Close" width={20} height={20} />
            </button>
            <div className="scroller w-[calc(100%+40px)] h-full overflow-y-scroll">
              {activeIndex !== undefined && (
                <div className="w-[calc(100%-40px)] p-4">
                  <div className="mb-4 mt-2">
                    {contributorsData[activeIndex]?.name}
                  </div>
                  <div className="font-mono text-xs mb-12">
                    {contributorsData[activeIndex]?.title}
                    {!!contributorsData[activeIndex]?.url && (
                      <>
                        <br />
                        {contributorsData[activeIndex]?.url}
                      </>
                    )}
                  </div>

                  <p className="">
                    {contributorsData[activeIndex]?.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
