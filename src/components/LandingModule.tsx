"use client";

import { useState } from "react";
import Image from "next/image";
import I1 from "../../public/landing/1.jpg";
import I2 from "../../public/landing/2.jpg";
import I3 from "../../public/landing/3.jpg";
import I4 from "../../public/landing/4.jpg";
import I5 from "../../public/landing/5.jpg";

export const LandingModule = () => {
  const [open, setOpen] = useState<null | 0 | 1 | 2 | 3 | 4>(null);
  return (
    <div
      id="landing-module"
      className="relative w-full pb-2 border-chilli-grey border-x px-4"
    >
      <div className="h-[100vh] [&>span]:tracking-tighter [&>span]:leading-none relative [&>span]:z-[2] [&>span]:pointer-events-none [&>*]:block [&>*]:absolute">
        <span className="text-[26vw] top-0 left-0 sm:text-[23vw] lg:text-[29vh] lg:top-[0] lg:left-[0] -indent-[0.07em]">
          Pink
        </span>
        <span className="text-[26vw] sm:text-[23vw] top-[15vh] right-0 lg:text-[29vh] lg:top-[25vh] lg:right-[0]">
          Chilli
        </span>
        <span className="text-[26vw] sm:text-[23vw] top-[45vh] left-0 lg:text-[29vh] lg:top-[50vh] lg:left-[0] -indent-[0.07em] ">
          in a
        </span>
        <span className="text-[26vw] sm:text-[23vw] top-[75vh] right-0 lg:text-[29vh] lg:top-[50vh] lg:left-[46vh]">
          Bowl
        </span>

        <div className="lg:right-0 lg:top-0 lg:h-[25vh] lg:w-[25vh]">
          <Image src={I1} alt="" fill={true} objectFit="cover" />
        </div>
        <div className="left-0 top-[25vh] h-[20vh] w-[32vh] border border-chilli-grey">
          <Image src={I2} alt="" fill={true} objectFit="cover" />
        </div>
        <div className="left-0 top-[75vh] h-[25vh] w-[20vh]">
          <Image src={I3} alt="" fill={true} objectFit="cover" />
        </div>
        <div className="left-[calc(20vh+1rem)] top-[75vh] h-[25vh] w-[20vh]">
          <Image src={I4} alt="" fill={true} objectFit="cover" />
        </div>
        <div className="right-0 top-[75vh] h-[25vh] w-[40vh] border border-chilli-grey">
          <Image src={I5} alt="" fill={true} objectFit="cover" />
        </div>
      </div>
    </div>
  );
};
