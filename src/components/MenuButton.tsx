"use client";

import { MouseEventHandler, useState } from "react";

export const MenuButton = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleMenuClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    const id = (e.target as HTMLAnchorElement).attributes.getNamedItem(
      "href"
    )?.value;

    if (id === undefined) {
      return;
    }

    const target = document.getElementById(id.replace("#", ""));

    if (!target) {
      return;
    }

    setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth" });
    }, 700);

    setOpen(() => false);
  };

  return (
    <>
      <button
        onClick={() => {
          setOpen((a) => !a);
        }}
        className="w-[25px] h-[25px] relative z-[35]"
        style={{ left: open ? "1rem" : 0, transition: "all ease-out .5s" }}
      >
        <b
          style={{
            width: open ? "30px" : "25px",
            position: "absolute",
            height: "1px",
            background: "#000",
            top: open ? "50%" : "100%",
            left: "50%",
            transition: "all ease-out .5s",
            transform: `translate(-50%, -50%) rotate(${open ? -45 : 0}deg)`,
          }}
        />
        <b
          style={{
            width: open ? "0px" : "25px",
            height: open ? "0px" : "1px",
            position: "absolute",
            opacity: open ? 0 : 1,
            background: "#000",
            top: "50%",
            left: "50%",
            transition: "all ease-out .5s",
            transform: `translate(-50%, -50%)`,
          }}
        />
        <b
          style={{
            width: open ? "30px" : "25px",
            position: "absolute",
            height: "1px",
            background: "#000",
            top: open ? "50%" : 0,
            left: "50%",
            transition: "all ease-out .5s",
            transform: `translate(-50%, -50%) rotate(${open ? 45 : 0}deg)`,
          }}
        />
      </button>

      <div className="fixed">
        <div
          className="fixed top-0 right-0 w-full h-full z-25 bg-[transparent] cursor-pointer"
          style={{ display: open ? "block" : "none" }}
          onClick={() => {
            setOpen(() => false);
          }}
        >
          &nbsp;
        </div>
        <div
          className={`fixed top-0 right-0 w-full h-full overflow-hidden transition-all duration-1000`}
          style={{ zIndex: open ? 30 : 0, left: open ? 0 : "100%" }}
        >
          <div className={`absolute w-full h-full bg-chilli-pink top-0`}>
            <div className="scroller w-[calc(100%+40px)] h-full overflow-y-scroll">
              <div className="w-[calc(100%-40px)] p-4 text-4xl leading-tight md:text-[7vw] tracking-tight pt-8">
                <ul className="[&_li+li]:border-t [&_li]:border-black [&_li]:pt-4">
                  <li>
                    <a onClick={handleMenuClick} href="#events">
                      Upcoming Events
                    </a>
                  </li>
                  <li>
                    <a onClick={handleMenuClick} href="#about">
                      About the Book
                    </a>
                  </li>
                  <li>
                    <a onClick={handleMenuClick} href="#constellations">
                      Constellations and Stars
                    </a>
                  </li>
                  <li>
                    <a onClick={handleMenuClick} href="#contributors">
                      Our Contributors
                    </a>
                  </li>
                  <li>
                    <a onClick={handleMenuClick} href="#buy">
                      Buy the Book
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
