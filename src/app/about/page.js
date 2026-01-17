import React from 'react';
import Hero from "@/Components/About/AboutHero";
import Events from "@/Components/About/Events";
import Gallery from "@/Components/About/Gallery";

export const metadata = {
  title: "Our Story | Sultan Catering - Professional Mobile Catering Services",
  description: "Meet the team behind Sultan Catering. Dedicated to bringing high-quality street food and exceptional catering service to your special occasions.",
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

