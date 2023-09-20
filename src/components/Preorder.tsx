import Image from "next/image";
import book from "../../public/book.jpg";

export const Preorder = () => {
  return (
    <section
      id="preorder"
      className="relative w-full py-2 border-chilli-grey border-x px-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_3fr] lg:grid-cols-[1fr_1px_2fr] gap-4">
        <div className="flex justify-between flex-col items-start">
          <div>
            <h2 className="section-heading">Pre-order the Book</h2>
            <p className="mb-4">
              Pre-order &ldquo;Pink Chilli in a Bowl&rdquo; online for S$150
              (excluding GST). Orders will be fulfilled post-launch on 9 October
              2023.
            </p>
            <p>
              <a
                href="#"
                className="text-base inline-block px-4 py-1 border border-black rounded-full"
              >
                Pre-order the book
              </a>
            </p>
          </div>
          <div className="[&_p]:font-mono [&_p]:text-xs">
            <p className="mb-8">
              ISBN 978-981-18-8118-3
              <br />
              478 pages
              <br />
              230mmW x 288mmH x 30mm spine width
              <br />
              Weight: 1.5kg
            </p>
            <p>Distributed by Pagesetters Services</p>
          </div>
        </div>
        <div className="vertical-border border-l border-chilli-grey hidden md:block">
          &nbsp;
        </div>

        <div>
          <Image src={book} alt="the book" />
        </div>
      </div>
    </section>
  );
};
