"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// --- ANİMASYON AYARLARI ---
// Yazıların sırayla gelmesi için kapsayıcı ayarı
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

// Yazıların tek tek yukarı kayarak belirmesi
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const pulseVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: [1, 1.02, 1], // 1 -> 1.03 -> 1 arasında gidip gelir
    transition: {
      opacity: { duration: 0.5 },
      scale: {
        duration: 2.5,       // Yavaşça büyüsün (Süreyi artırdım daha sakin olsun diye)
        repeat: Infinity,    // Sonsuz döngü
        ease: "easeInOut"    // Yumuşak geçiş
      }
    }
  },
};

// Resmin sağdan kayarak gelmesi
const imageVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0 }
  },
};

const Welcome = () => {
  return (
    // GÖRSELDEKİ AÇIK KREM ARKA PLAN RENGİ
    <section className="py-16 md:py-24  overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* GRID YAPISI: Mobilde tek kolon, Masaüstünde iki kolon */}
        <div className="grid grid-cols-1 gap-6 items-center">

          {/* --- SOL TARAF (MOBİLDE ÜST): YAZILAR --- */}
          {/* Mobilde text-center, masaüstünde text-left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col justify-center text-center "
          >

            {/* 1. ÜST ETİKET (Hap şeklinde) */}
            <motion.div variants={fadeUpVariant}>
              <span className="inline-block bg-orange/15 text-orange px-5 py-2 rounded-b-3xl text-xs mb-4">
                WELCOME TO SULTAN
              </span>
            </motion.div>

            {/* 2. ANA BAŞLIKLAR */}
            <motion.h2 variants={pulseVariant} className="font-roboto font-medium text-3xl md:text-5xl text-orange mb-4 drop-shadow-[0_1px_1px_#00000050]">
              Beyond The Food Truck.<br />Your Event<span className="bg-linear-to-r from-green to-orange bg-clip-text text-transparent font-bold" > Catering</span>  Partner.
            </motion.h2>
            
            {/* 3. ALT AÇIKLAMA */}
            <motion.p variants={fadeUpVariant} className="text-green/70 text-xs md:text-sm uppercase mx-auto lg:mx-0">
              SPECIALIZING IN QUICK BITES AND BIG EVENTS. MAKING EVERY OCCASION DELICIOUS AND MEMORABLE.
            </motion.p>

          </motion.div>


          {/* --- SAĞ TARAF (MOBİLDE ALT): RESİM --- */}
          <motion.div
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className=" relative w-full flex justify-center"
          >
            {/* RESİM ÇERÇEVESİ: Yuvarlak köşeler ve büyük gölge */}
            <div className="relative h-100 md:w-2/3 w-full rounded-b-[50px] overflow-hidden shadow-[0_0px_20px_#46731E90] ">
              <Image
                src="/Welcome2.png" 
                alt="Sultan Catering Chefs"
                fill
                unoptimized
                quality={100}
                sizes="100vw"
                className="object-cover"
              />
            </div>

            

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Welcome;