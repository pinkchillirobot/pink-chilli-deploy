import "./globals.css";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pink Chilli in a Bowl",
  description: "...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="relative">
          <div
            id="sticky-nav"
            className="mx-4 mb-0 sticky top-0 bg-white z-10 pt-4"
          >
            <div className="border-x border-chilli-grey flex justify-between px-4 pb-4">
              <h1 className="font-mono text-xs uppercase">
                Pink Chilli In A Bowl
              </h1>
              <button className="">
                <Image
                  src="/btn-hamburger.svg"
                  alt="hamburger menu"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>

          <div className="mx-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
