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

                        For me, serving food isn't just <br className="block md:hidden"/> a job; it's about bringing <br className="block md:hidden"/> people together.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="font-roboto text-white text-base drop-shadow-md space-y-2 max-w-3/4"
                    >
                        <p>
                            What started as a passion for authentic Middle Eastern flavors has grown into one of the <span className="font-bold">UK's favorite mobile street food trucks, proudly based in Nottingham.</span>
                        </p>
                        <p>
                            Our philosophy is simple: <span className="italic font-light ">fresh ingredients, cook with heart, and serve every meal with a smile.</span>
                        </p>
                        <p>
                            When you book us for your <span className="font-semibold"> weddings, parties, or corporate events across the UK</span>, you don't just get a food truck; you get a team that truly cares about your experience.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;