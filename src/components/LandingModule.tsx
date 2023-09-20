"use client";

import { useState } from "react";
import Image from "next/image";
import I1 from "../../public/landing/1.jpg";
import I2 from "../../public/landing/2.jpg";
import I3 from "../../public/landing/3.jpg";
import I4 from "../../public/landing/4.jpg";
import I5 from "../../public/landing/5.jpg";

export const LandingModule = () => {
  const [open, setOpen] = useState<null | 1 | 2 | 3 | 4 | 5>(null);
  return (
    <div
      id="landing-module"
      className="relative w-full pb-2 border-chilli-grey border-x px-4"
    >
      <div className="h-[100vh] [&>span]:tracking-tighter [&>span]:leading-none relative [&>span]:z-[2] [&>span]:pointer-events-none [&>*]:block [&>*]:absolute [&>div]:bg-white [&>div>img]:opacity-30 [&>div>img:hover]:opacity-60 [&>div>img]:transition-opacity [&>div>img]:cursor-pointer [&>div.open>img]:opacity-100 [&>div.open>img:hover]:opacity-90 [&>div]:transition-all">
        <span className="text-[29vw]  xs:text-[20vw] top-0 left-0 sm:text-[23vw] lg:text-[29vh] lg:top-[0] lg:left-[0] -indent-[0.07em]">
          Pink
        </span>
        <span className="text-[29vw] xs:text-[20vw] sm:text-[23vw] top-[15vh] right-0 lg:text-[29vh] lg:top-[25vh] lg:right-[0]">
          Chilli
        </span>
        <span className="text-[29vw]  xs:text-[20vw] sm:text-[23vw] top-[45vh] left-0 lg:text-[29vh] lg:top-[50vh] lg:left-[0] -indent-[0.07em] ">
          in a
        </span>
        <span className="text-[29vw]  xs:text-[20vw] sm:text-[23vw] top-[75vh] right-0 lg:text-[29vh] lg:top-[50vh] lg:left-[46vh]">
          Bowl
        </span>

        <div
          onClick={() => {
            setOpen((n) => (n === 1 ? null : 1));
          }}
          className={
            open === 1
              ? "left-0 right-auto top-[60vh] w-full lg:left-auto lg:right-0 lg:top-0 lg:w-full aspect-[1] lg:aspect-[1] z-[4] open"
              : `left-0 right-auto top-[60vh] w-[25vw] h-[25vw] lg:left-auto lg:right-0 lg:top-0 lg:h-[25vh] lg:w-[25vh]`
          }
        >
          <Image src={I1} alt="" fill={true} objectFit="cover" />
        </div>
        <div
          onClick={() => {
            setOpen((n) => (n === 2 ? null : 2));
          }}
          className={
            open === 2
              ? "top-[30vh] left-0 right-0 w-full aspect-[1.56] lg:w-full lg:left-0 lg:right-0 lg:top-[25vh] lg:h-auto z-[4] open border border-chilli-grey"
              : "w-[35vw] aspect-[1.66] top-[30vh] left-0 lg:top-[25vh] lg:w-[32vh] border border-chilli-grey"
          }
        >
          <Image src={I2} alt="" fill={true} objectFit="cover" />
        </div>
        <div
          onClick={() => {
            setOpen((n) => (n === 3 ? null : 3));
          }}
          className={
            open === 3
              ? "top-0 left-auto right-0 w-full aspect-[.833] lg:w-full lg:left-0 lg:right-auto lg:top-[75vh] lg:h-auto z-[4] open lg:aspect-[.833]"
              : "aspect-[7/9] left-auto right-0 top-[0vw] w-[26vw] md:aspect-[5/6] lg:aspect-[5/6.2] lg:left-0 lg:right-auto lg:top-[75vh] lg:w-[20vh]"
          }
        >
          <Image src={I3} alt="" fill={true} objectFit="cover" />
        </div>
        <div
          onClick={() => {
            setOpen((n) => (n === 4 ? null : 4));
          }}
          className={
            open === 4
              ? "top-[30vh] left-auto right-0 w-full aspect-[.555] lg:w-full lg:left-0 lg:right-auto lg:top-[75vh] lg:h-auto z-[4] open lg:aspect-[.555]"
              : "aspect-[7/9] right-0 left-auto w-[35vw] top-[30vh] lg:aspect-[5/6.2] lg:right-auto lg:left-[calc(20vh+1rem)] lg:top-[75vh] lg:w-[20vh]"
          }
        >
          <Image src={I4} alt="" fill={true} objectFit="cover" />
        </div>
        <div
          onClick={() => {
            setOpen((n) => (n === 5 ? null : 5));
          }}
          className={
            open === 5
              ? "top-[60vh] left-auto right-0 w-full aspect-[1.667] lg:w-full lg:left-auto lg:right-0 lg:top-[75vh] lg:h-auto z-[4] open lg:aspect-[1.667] border border-chilli-grey"
              : "top-[60vh] right-0 w-[calc(100%-28vw)] aspect-[1.597] lg:top-[75vh] lg:w-[40vh] border border-chilli-grey"
          }
        >
          <Image src={I5} alt="" fill={true} objectFit="cover" />
        </div>
      </div>
    </div>
  );
};
