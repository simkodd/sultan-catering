"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaLeaf } from "react-icons/fa"; 

const MenuHero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      
      {/* --- 1. ARKA PLAN RESMİ --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/MenuHero.png" 
          alt="Sultan Menu Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* --- 2. İÇERİK KISMI --- */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center h-full pt-12 md:pt-0">
        
        {/* BAŞLIK */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-roboto font-black text-6xl md:text-8xl text-bej uppercase mb-4 drop-shadow-[0_5px_2px_rgba(0,0,0)] tracking-tight"
        >
          OUR MENU
        </motion.h1>

        {/* ALT YAZI */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-roboto text-bej text-lg md:text-2xl font-medium mb-10 max-w-4xl drop-shadow-[0_2px_2px_rgba(0,0,0)] leading-relaxed"
        >
          Authentic Middle Eastern flavours, prepared fresh daily using traditional recipes.
        </motion.p>

        {/* ROZETLER (BADGES) KAPSAYICISI */}
        {/* Buradaki motion'ı kaldırdık, sadece düzen (flex) görevi görüyor */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full md:w-auto  p-2">
          
          {/* 1. Halal Certified Badge (SOLDAN GELİYOR) */}
          <motion.div 
            initial={{ opacity: 0, x: -300 }} // Ekranın solundan başlar
            animate={{ opacity: 1, x: 0 }}    // Yerine gelir
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="flex items-center justify-center gap-3 bg-green px-8 py-3 rounded-b-[20px] w-full md:w-auto shadow-[0_0_25px_#FFF8F090]"
          >
            <FaCheckCircle className="text-[#FFD700] text-2xl" /> 
            <span className="text-[#FFD700] font-bold text-lg md:text-xl">
              100% Halal Certified
            </span>
          </motion.div>

          {/* 2. Vegan Options Badge (SAĞDAN GELİYOR) */}
          <motion.div 
            initial={{ opacity: 0, x: 300 }}  // Ekranın sağından başlar
            animate={{ opacity: 1, x: 0 }}    // Yerine gelir
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="flex items-center justify-center gap-3 bg-orange px-5 py-3 rounded-b-[20px] w-full md:w-auto shadow-[0_0_25px_#FFF8F090]"
          >
            <FaLeaf className="text-green text-2xl" /> 
            <span className="text-green font-bold text-lg md:text-xl">
              Vegetarian & Vegan Options
            </span>
          </motion.div>

        </div>

      </div>

      {/* --- 3. MOUSE SCROLL ANİMASYONU --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 15, 0] }} 
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: {
            duration: 1.5,      
            repeat: Infinity,   
            ease: "easeInOut"   
          }
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <Image 
          src="/icons/mouse.svg" 
          alt="Scroll Down"
          width={80}  
          height={60} 
          className="drop-shadow-md"
        />
      </motion.div>

    </section>
  );
};

export default MenuHero;