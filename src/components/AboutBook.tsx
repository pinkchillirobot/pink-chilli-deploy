export const AboutBook = () => {
  return (
    <section
      id="about"
      className="relative w-full py-2 border-chilli-grey border-x px-4  scroll-my-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_2fr] gap-4">
        <div className="flex flex-col items-start justify-between">
          <div className="[&>p]:indent-[2em] [&_p:nth-of-type(1)]:indent-0">
            <h2 className="section-heading">About the Book</h2>
            <p>
              Neither a tourist guide nor a work of historical records, “Pink
              Chilli in a Bowl” is a personal archive of forgotten places and
              time-honoured buildings that may someday be wiped out—some of
              which have already disappeared amidst the backdrop of a city that
              is constantly developing. These pages detail an intangible side of
              Singapore, encouraging readers to tap into their imaginations and
              reconstruct their mental map of the island nation in ways that
              inspire them.
            </p>
            <p>
              Each Constellation is composed of three different types of
              entries: restaurant, food, and landmark, which can all be found
              within a twenty-to forty-minute promenade.
            </p>
            <p>
              The Stars are singular entries in a specific location or
              characteristic that is worth highlighting.
            </p>
            <p>
              The Essays are contributions made by food-enthusiastic writers
              about Singaporean eateries which contextualise the current survey
              into the specifics of the social, cultural, and political
              environment in this island-nation.
            </p>
            <p>
              The Archives are curated selections of photographs which showcase
              the generic patterns of diversity in Singapore.
            </p>
          </div>
        </div>
        <div className="vertical-border border-l border-chilli-grey hidden md:block">
          &nbsp;
        </div>
        <div>
          <div className="xl:aspect-[9/5] hidden md:block text-5xl tracking-tight leading-none">
            28 Constellations
            <br />
            12 Stars
            <br />
            3 Essays
            <br />8 Archives
          </div>
        </div>
      </div>
    </section>
  );
};
