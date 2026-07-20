import React from 'react';
import MenuHero from "@/Components/Menu/MenuHero";
import MenuCards from "@/Components/Menu/MenuCards";
import Loved from "@/Components/Menu/Loved";

export const metadata = {
  title: "Catering Menu | Sultan Shawarma, Wraps & Event Catering",
  description: "Explore our mouth-watering wedding, party, and corporate catering menu. From signature Turkish shawarmas to gourmet burgers, find the perfect food options for your next event in Nottingham and beyond.",
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