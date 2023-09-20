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

export default function Home() {
  return (
    <main className="">
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
  );
}
