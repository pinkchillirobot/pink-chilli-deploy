"use client";
import { LandingModule } from "@/components/LandingModule";
import { Events } from "@/components/Events";
import { SpecialHr } from "@/components/SpecialHr";
import { AboutBook } from "@/components/AboutBook";
import { Video } from "@/components/Video";
import { ConstellationsIntro } from "@/components/ConstellationsIntro";
import { Map } from "@/components/Map";
import { Contributors } from "@/components/Contributors";

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
    </main>
  );
}
