import React from 'react';
import MenuHero from "@/Components/Menu/MenuHero";
import MenuCards from "@/Components/Menu/MenuCards";
import Loved from "@/Components/Menu/Loved";

export const metadata = {
  title: "Catering Menu | Sultan Catering - Shawarma & Wraps",
  description: "Explore our mouth-watering catering menu. From signature Shawarmas to gourmet burgers, discover the perfect food options for your next event.",
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