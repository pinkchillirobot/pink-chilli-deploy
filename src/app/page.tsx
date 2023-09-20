import { LandingModule } from "@/components/LandingModule";
import { Events } from "@/components/Events";
import { SpecialHr } from "@/components/SpecialHr";
import { AboutBook } from "@/components/AboutBook";
import { Video } from "@/components/Video";
import { ConstellationsIntro } from "@/components/ConstellationsIntro";
import { Map } from "@/components/Map";
import { Contributors } from "@/components/Contributors";
import { Preorder } from "@/components/Preorder";
import { Footer } from "@/components/Footer";
import { MenuButton } from "@/components/MenuButton";

export default function Home() {
  return (
    <>
      <div
        id="sticky-nav"
        className="mx-4 mb-0 sticky top-0 bg-[transparent] md:bg-white z-10 pt-4"
      >
        <div className="border-x border-chilli-grey flex justify-end md:justify-between items-center px-4 pb-4">
          <h1 className="font-mono text-xs uppercase hidden md:block">
            Pink Chilli In A Bowl
          </h1>
          <MenuButton />
        </div>
      </div>

      <main className="mx-4">
        <LandingModule />
        <SpecialHr />
        <Events />
        <SpecialHr />
        <AboutBook />
        <SpecialHr />
        <Video />
        <SpecialHr />
        <ConstellationsIntro />
        <SpecialHr />
        <Map />
        <SpecialHr />
        <Contributors />
        <SpecialHr />
        <Preorder />
        <SpecialHr />
        <Footer />
      </main>
    </>
  );
}
