import React from 'react';
import MenuHero from "@/Components/Menu/MenuHero";
import MenuCards from "@/Components/Menu/MenuCards";
import Loved from "@/Components/Menu/Loved";

export const metadata = {
  title: "Catering Menu | Sultan Shawarma & Nationwide Event Catering",
  description: "Explore our catering menu for weddings, parties, and corporate events. Proudly based in Nottingham, delivering exceptional live cooking experiences all over the UK.",
};

export default function About() {
  return (
    <main className=" bg-[url('/bg.png')] bg-bej">
      <MenuHero />
      <MenuCards />
      <Loved />
    </main>
  );
}