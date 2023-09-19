const contributorsData = [
  { name: "Isabelle Der Hagopian" },
  { name: "Manuel Der Hagopian    " },
  { name: "Stephanie Peh" },
  { name: "Mindy Tan" },
  { name: "Don Wong " },
  { name: "Sarah Mineko Ichioka" },
  { name: "Ming Tan" },
  { name: "Adib Jalal" },
  { name: "Practice Theory" },
];

export const Contributors = () => {
  return (
    <section
      id="constellations_intro"
      className="relative w-full py-2 border-chilli-grey border-x px-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_3fr] lg:grid-cols-[1fr_1px_2fr] gap-4">
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
        <div className="vertical-border border-l border-chilli-grey hidden md:block">
          &nbsp;
        </div>
        <div className="grid gap-4 grid-cols-2">
          <div className="">
            <ul className="text-3xl xl:text-4xl tracking-tight leading-[1.1] [&>li]:pl-16 [&>li]:-indent-16">
              {contributorsData.map((c) => (
                <li key={c.name}>{c.name}</li>
              ))}
            </ul>
          </div>
          <div className="">
            <div className="font-mono text-sm mb-4">
              Isabelle Der Hagopian
              <br />
              Architect <br />
              Partner & Co-founder of G8A
            </div>

            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci
              dapibus ultrices in iaculis nunc sed augue lacus viverra.
              Tincidunt lobortis feugiat vivamus at augue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
