import React from 'react';
import Hero from "@/Components/About/AboutHero";
import Events from "@/Components/About/Events";
import Gallery from "@/Components/About/Gallery";

export const metadata = {
  title: "Our Story | Sultan Catering - Nationwide Mobile Food Truck",
  description: "Based in Nottingham and serving across the UK. Sultan Catering brings high-quality Turkish street food to weddings, parties, and corporate events nationwide.",
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

