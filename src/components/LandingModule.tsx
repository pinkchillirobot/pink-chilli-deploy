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
        <span className="block text-[29vh] absolute top-[0] left-[0] -indent-[0.07em]">
          Pink
        </span>
        <span className="block text-[29vh] absolute top-[25vh] right-[0]">
          Chilli
        </span>
        <span className="block text-[29vh] absolute top-[50vh] left-[0] -indent-[0.07em] ">
          in a
        </span>
        <span className="block text-[29vh] absolute top-[50vh] left-[46vh]">
          Bowl
        </span>

        <div className="block absolute right-0 top-0 h-[25vh] w-[25vh] bg-chilli-pink"></div>
        <div className="block absolute left-0 top-[25vh] h-[20vh] w-[32vh] bg-chilli-pink"></div>
        <div className="block absolute left-0 top-[75vh] h-[25vh] w-[20vh] bg-chilli-pink"></div>
        <div className="block absolute left-[calc(20vh+1rem)] top-[75vh] h-[25vh] w-[20vh] bg-chilli-pink"></div>
        <div className="block absolute right-0 top-[75vh] h-[25vh] w-[40vh] bg-chilli-pink"></div>
      </div>
    </div>
  );
};
