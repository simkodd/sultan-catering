"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex items-center overflow-hidden">

            {/* --- ARKA PLAN RESMİ VE EFEKTLER --- */}
            <div className="absolute inset-0 z-0">
                {/* MASKELEME (FADE OUT) EFEKTİ:
                    Resmin bulunduğu bu kapsayıcıya maske uyguluyoruz.
                    to bottom: Yukarıdan aşağıya
                    black 90%: İlk %90 tamamen görünür (siyah maske = görünür)
                    transparent 100%: Son %10'da şeffaflaşır.
                */}
                <div
                    className="relative w-full h-full"
                    style={{
                        maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                    }}
                >
                    <Image
                        src="/AboutHero2.jpg"
                        alt="Sultan - The Man Behind The Menu"
                        fill
                        priority
                        unoptimized
                        quality={100}
                        sizes="100vw"
                        className="object-cover object-[65%_center] lg:object-center scale-130 origin-top-left  "
                    />
                    <div className="absolute inset-0 bg-orange mix-blend-overlay opacity-35 pointer-events-none"></div>
                </div>
            </div>

            {/* --- İÇERİK KISMI --- */}
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">

                {/* Yazıların Sol Tarafta Durması İçin Kapsayıcı */}
                <div className="w-full lg:max-w-xl">
                    {/* Başlık */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-roboto font-bold text-4xl md:text-5xl text-orange uppercase mb-2 leading-tight drop-shadow-md"
                    >
                        MEET THE MAN BEHIND <br />
                        THE MENU !
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="font-roboto text-bej text-lg md:text-2xl font-medium mb-2 drop-shadow-md"
                    >
                        <span className="italic font-semibold">Hi, I'm Sultan.</span> <br />

                        We bring people together through <br />authentic Middle Eastern flavors.                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="font-roboto text-white text-base drop-shadow-md space-y-2 max-w-3/4"
                    >
                        <p>
                            Proudly based in<span className="font-semibold"> Nottingham</span>, our mobile street food truck serves freshly made falafel and shawarma <span className="font-semibold">across the UK.</span></p>
                        
                        <p>
                            From <span className="font-semibold">weddings to corporate events</span>, we don't just serve food—we deliver an unforgettable catering experience with heart and a smile.                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;