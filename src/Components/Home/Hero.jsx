"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// 1. ANİMASYON AYARLARI (Variantlar)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Harfler arası 0.1 saniye bekle
            delayChildren: 0.2,   // Başlamadan önce 0.3 saniye bekle
        },
    },
};

const letterVariants = {
    hidden: { opacity: 0, y: 50 }, // Harf alttan gelsin
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 50 } // Yaylanma efekti
    },
};

const Hero = () => {
    // Kelimeleri harflere bölüyoruz
    const text1 = "SULTAN".split("");
    const text2 = "CATERING".split("");

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

            {/* --- 1. ARKA PLAN RESMİ --- */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/HeroBg.png"
                    alt="Sultan Shawarma Catering"
                    fill
                    priority
                    unoptimized
                    // 👇 1. KALİTE AYARI: Varsayılan 75'tir, bunu 100 yaparsan sıkıştırmaz.
                    quality={100}

                    // 👇 2. BOYUT BİLGİSİ: Tarayıcıya "Bu resim ekranın tamamını kaplıyor" diyoruz.
                    // Bunu demezsen Next.js bazen küçük ekran sanıp düşük çözünürlüklü halini yükleyebilir.
                    sizes="100vw"
                    className="object-cover"
                />
                {/* Ekstra Karartma Katmanı */}
                <div className="absolute inset-0 bg-red/25"></div>

            </div>

            {/* --- 2. İÇERİK KISMI --- */}
            <div className="relative z-10 container mx-auto px-4 text-center text-bej flex flex-col items-center">

                {/* Küçük Üst Yazı */}
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="uppercase text-sm md:text-lg mb-4 text-bej"
                >
                    Sultan’s taste is now part of your event!
                </motion.p>

                {/* --- HARF HARF ANİMASYONLU BAŞLIK --- */}
                <motion.h1
                    className="font-roboto font-semibold tracking-widest text-6xl md:text-7xl lg:text-8xl mb-8 drop-shadow-[0_0px_5px_#00000070]"
                    variants={containerVariants} // Orkestra şefini (Container) bağladık
                    initial="hidden"
                    animate="visible"
                >
                    {/* 1. KELİME: SULTAN */}
                    <span className="inline-block whitespace-nowrap">
                        {text1.map((letter, index) => (
                            <motion.span key={index} variants={letterVariants} className="inline-block">
                                {letter}
                            </motion.span>
                        ))}
                    </span>

                    <br className="xl:hidden" /> {/* Mobilde ve küçük ekranlarda alt satıra geç */}

                    {/* 2. KELİME: CATERING */}
                    {/* Masaüstünde (xl) yanına boşluk koyarak devam et */}
                    <span className="inline-block whitespace-nowrap xl:ml-4">
                        {text2.map((letter, index) => (
                            <motion.span key={index} variants={letterVariants} className="inline-block">
                                {letter}
                            </motion.span>
                        ))}
                    </span>
                </motion.h1>

                {/* Turuncu Buton */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    // Harfler bitene kadar butonu bekletiyoruz (delay: 1.5 sn yaptım)
                    transition={{ duration: 0.6, delay: 1.5 }}
                >
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center gap-3 bg-orange text-red px-6 py-3 rounded-b-[20px] text- font-bold shadow-[0_0_30px_#6E1011] hover:bg-red hover:text-orange transition-all duration-300"
                    >
                        <span>REQUEST A QUOTE</span>
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;