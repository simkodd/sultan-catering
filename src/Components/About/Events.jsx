"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaRing, FaSun } from "react-icons/fa"; 
import { GiPartyPopper } from "react-icons/gi"; 

const events = [
  {
    id: 1,
    title: "Weddings",
    desc: "Make Your Big Day Unforgettable With A Unique Street Food Banquet. We Serve Fresh, Hot Feasts That Get Guests Talking, While You Focus On The Memories.",
    icon: <FaRing className="text-4xl text-[#6E1011]" />,
    image: "/Wedding.png", 
  },
  {
    id: 2,
    title: "Outdoor Events",
    desc: "From Corporate Picnics To Summer Garden Gatherings. We Bring Our Mobile Kitchen To The Great Outdoors, Serving Delicious Meals Right Where You Need Them.",
    icon: <FaSun className="text-4xl text-[#6E1011]" />,
    image: "/Outdoor.png", 
  },
  {
    id: 3,
    title: "Parties & Festivals",
    desc: "Big Crowds Call For Big Flavours. Whether It's A Music Festival Or A Birthday Bash, Our Team Serves Hundreds Of Happy Guests With Speed And A Smile.",
    icon: <GiPartyPopper className="text-4xl text-[#6E1011]" />,
    image: "/Party2.png", 
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const Events = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-transparent">
      
      <div className="container mx-auto px-4 relative z-10">

        {/* --- BAŞLIK KISMI --- */}
        <div className="text-center mb-16 relative">
          
          {/* --- DEĞİŞİKLİK BURADA: ARKA PLANDAKİ SVG --- */}
          {/* Masaüstünde görünür (hidden md:block), tam ortada, silik (opacity-10) */}
          <div className=" absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl select-none pointer-events-none z-0 opacity-75">
            <Image
              src="/Best.svg" // Senin SVG dosyan
              alt="Best Food Truck Background"
              width={1000} // Genişlik (SVG olduğu için bozulmaz, büyük verdim)
              height={300} // Yükseklik (Orantılı ayarlar)
              className="w-full h-auto object-contain"
            />
          </div>

          {/* ÖN PLANDAKİ ANA BAŞLIKLAR (z-10 ile öne aldık) */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 font-roboto font-semibold text-3xl md:text-6xl text-red drop-shadow-sm"
          >
            We Bring The Feast To You
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative z-10 font-roboto text-red/50 text-sm md:text-xl font-medium"
          >
            We Bring The Authentic Sultan Experience To You
          </motion.p>
        </div>


        {/* --- KARTLAR --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-18 md:gap-10 max-w-7xl mx-auto"
        >
          {events.map((event) => (
            <motion.div 
              key={event.id}
              variants={cardVariants}
              className="flex flex-col h-full"
            >
              {/* KART GÖVDESİ */}
              <div className="bg-red/25 rounded-b-[50px] pt-12 pb-0 px-6 flex flex-col items-center text-center h-full relative group hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                
                {/* İKON KUTUSU */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-bej rounded-b-[50px] flex items-center justify-center shadow-md z-10 border-10 border-red/25">
                  {event.icon}
                </div>

                {/* İÇERİK */}
                <h3 className="font-roboto font-semibold text-3xl text-red mb-3 mt-6">
                  {event.title}
                </h3>
                
                <p className="font-roboto text-red text-sm leading-relaxed mb-6 px-2  opacity-90">
                  {event.desc}
                </p>

                {/* RESİM ALANI */}
                <div className="relative w-full h-62 mt-auto mb-6 rounded-b-[50px] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Events;