"use client";

import { useState } from "react";

export const LandingModule = () => {
  const [open, setOpen] = useState<0 | 1 | 2 | 3>(0);
  return (
    <div
      id="landing-module"
      className="relative w-full pb-2 border-chilli-grey border-x px-4"
    >
      <div className="h-[100vh] [&>span]:tracking-tighter [&>span]:leading-none relative">
        <span className="absolute block text-[23vw] top-0 left-0 lg:text-[29vh] lg:top-[0] lg:left-[0] -indent-[0.07em]">
          Pink
        </span>
        <span className="absolute block text-[23vw] top-[15vh] right-0 lg:text-[29vh] lg:top-[25vh] lg:right-[0]">
          Chilli
        </span>
        <span className="absolute block text-[23vw] top-[45vh] left-0 lg:text-[29vh] lg:top-[50vh] lg:left-[0] -indent-[0.07em] ">
          in a
        </span>
        <span className="absolute block text-[23vw] top-[75vh] right-0 lg:text-[29vh] lg:top-[50vh] lg:left-[46vh]">
          Bowl
        </span>

        <div className="block absolute right-0 top-0 h-[25vh] w-[25vh] bg-chilli-pink/20"></div>
        <div className="block absolute left-0 top-[25vh] h-[20vh] w-[32vh] bg-chilli-pink/20"></div>
        <div className="block absolute left-0 top-[75vh] h-[25vh] w-[20vh] bg-chilli-pink/50"></div>
        <div className="block absolute left-[calc(20vh+1rem)] top-[75vh] h-[25vh] w-[20vh] bg-chilli-pink/50"></div>
        <div className="block absolute right-0 top-[75vh] h-[25vh] w-[40vh] bg-chilli-pink/50"></div>
      </div>
    </div>
  );
};
