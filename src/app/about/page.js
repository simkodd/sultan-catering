import React from 'react';
import Hero from "@/Components/About/AboutHero";
import Events from "@/Components/About/Events";
import Gallery from "@/Components/About/Gallery";

export const metadata = {
  title: "Our Story | Sultan Catering Nottingham - Street Food Services",
  description: "Meet the team behind Sultan Catering in Nottingham. We are dedicated to bringing high-quality Turkish street food catering and exceptional mobile service to your special occasions across the UK.",
};


export default function About() {
  return (
    <main className=" bg-[url('/bg.png')] bg-bej">
      <Hero />
      <Events />
      <Gallery />
    </main>
  );
}

