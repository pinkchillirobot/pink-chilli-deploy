export const ConstellationsIntro = () => {
  return (
    <section
      id="constellations_intro"
      className="relative w-full py-2 border-chilli-grey border-x px-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_3fr] lg:grid-cols-[1fr_1px_2fr] gap-4">
        <div className="[&>p]:indent-[2em] [&_p:nth-of-type(1)]:indent-0 sticky top-16 self-start flex justify-between flex-col items-start min-h-[calc(100vh-6rem)]">
          <div>
            <h2 className="section-heading">Constellations and Stars</h2>
            <p>
              &ldquo;Pink Chilli in a Bowl&rdquo; is an invitation for the
              curious explorer to venture beyond the surface of Singapore’s
              urban landscape through twenty-eight constellations. Each
              constellation—composed of a network of local establishments,
              architectural landmarks, and places of worship—can be described as
              a sensual voyage, enriched by the art of everyday eateries and a
              multifaceted street culture. Unveil hidden links between seemingly
              disparate and diverse spaces that showcase the lesser-known
              humanistic side of an automated nation.
            </p>
          </div>

          <div className="">
            <p className="font-mono text-xs mt-8">
              All documentations, addresses and information of eateries are
              accurate as of 2020–2022.
            </p>
          </div>
        </div>
        <div className="vertical-border border-l border-chilli-grey hidden md:block">
          &nbsp;
        </div>
        <div className="grid gap-4 grid-cols-2">
          <div className="">
            <ul className="text-4xl xl:text-5xl tracking-tight leading-[1.1] [&>li]:pl-16 [&>li]:-indent-16">
              <li className="flex justify-start gap-4 items-start">
                <a href="#">Yuhua</a>
                <span className="text-xs text-chilli-grey font-mono tracking-none ml-16 relative top-2 uppercase">
                  Click to view the promenade
                </span>
              </li>
              <li>Upper Bukit Timah</li>
              <li>Tanglin Halt</li>
              <li>Alexandra</li>
              <li>Tiong Bahru</li>
              <li>Bukit Pasoh</li>
              <li>Kreta Ayer</li>
              <li>Telok Ayer</li>
              <li>Kampong Glam</li>
              <li>Crawford</li>
              <li>Little India</li>
              <li>Lavender</li>
              <li>Farrer Park</li>
              <li>Balestier</li>
              <li>Toa Payoh North</li>
              <li>Sin Ming</li>
              <li>Tai Seng</li>
              <li>Sims Geylang</li>
              <li>Geylang East</li>
              <li>Joo Chiat</li>
              <li>East Coast</li>
              <li>Springleaf</li>
              <li>Yishun</li>
              <li>Kebun Baru</li>
              <li>Jalan Kayu</li>
              <li>Kembangan</li>
              <li>Simpang Bedok</li>
              <li>Changi</li>
            </ul>
          </div>
          <div className="xl:aspect-[9/5]">
            <ul className="text-4xl xl:text-5xl tracking-tight leading-[1.1] [&>li]:pl-16 [&>li]:-indent-16">
              <li>Zul&apos;s Traditional Dry Chilli</li>
              <li>Seng Hong Coffeeshop</li>
              <li>Makko Teck Neo </li>
              <li>Lim Joo Hin Eating House</li>
              <li>Outram Park Ya Hua Rou Gu Cha</li>
              <li>Lau Ah Tee Bak Kut Teh</li>
              <li>River South Prawn Noodles</li>
              <li>928 Yishun Laksa</li>
              <li>Lau Wang Claypot Delights</li>
              <li>Ponggol Nasi Lemak </li>
              <li>Madeleine&apos;s Original Egg Tart</li>
              <li>Fu Lin Tofu Yuen</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
