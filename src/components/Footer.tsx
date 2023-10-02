export const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative w-full px-4 pt-2 border-chilli-grey border-x mb-2"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_3fr] lg:grid-cols-[1fr_1px_2fr] gap-4 text-xs font-mono leading-relaxed">
        <div className="pb-2">
          © Isabelle Der Hagopian and Manuel Der Hagopian, 2023
        </div>
        <div className="vertical-border border-l border-chilli-grey hidden md:block">
          &nbsp;
        </div>

        <div className="border-t border-chilli-grey w-full h-[1px] md:hidden block">
          &nbsp;
        </div>
        <div className="[&_a]:uppercase [&_a]:underline grid grid-cols-[1fr_1px_2fr] md:block gap-4 md:gap-0 pb-2">
          <div className="flex justify-start gap-0 flex-col md:flex-row md:gap-4 leading-relaxed">
            <a
              href="https://www.instagram.com/tb80_space"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://g8a-architects.com/"
              target="_blank"
              rel="noreferrer"
            >
              G8A
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              Stockists
            </a>
          </div>

          <div className="vertical-border border-l border-chilli-grey md:hidden block relative">
            &nbsp;
            <b
              className={
                "block absolute bottom-[calc(100%)] -left-2 -top-6 w-4 h-4 bg-white md:hidden"
              }
            />
          </div>
          <div className="leading-relaxed">
            This website was designed by{" "}
            <a
              href="https://practicetheory.com.sg/"
              target="_blank"
              rel="noreferrer"
            >
              Practice&nbsp;Theory
            </a>{" "}
            and developed in close collaboration with{" "}
            <a href="https://goodwork.sg" target="_blank" rel="noreferrer">
              Good&nbsp;Work
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
};
