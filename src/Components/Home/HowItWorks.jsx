"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaRegCalendarAlt, FaRegClipboard, FaTruck } from "react-icons/fa"; // İkonlar
import { MdRestaurantMenu } from "react-icons/md"; // Bon Appetit ikonu için

// --- VERİLER ---
// Kartların içeriğini ve renklerini burada tanımladım.
// 3. Kart (Sultan Arrives) renkleri diğerlerinden farklı (Görseldeki gibi).
const steps = [
  {
    id: "01.",
    title: "GET A QUOTE",
    icon: (
      <Image
        src="/icons/1.svg" // public klasöründeki yolun
        alt="Get Quote Icon"
        width={60} // İkonun genişliği (büyütüp küçültebilirsin)
        height={60}
        className="mx-auto" // Ortalamak için
      />
    ),
    tagColor: "bg-green", // Yeşil Etiket
    textColor: "text-orange", // Turuncu Yazı
    iconColor: "text-orange", // Turuncu İkon
  },
  {
    id: "02.",
    title: "DESIGN YOUR MENU",
    icon: (
      <Image
        src="/icons/2.svg" // public klasöründeki yolun
        alt="Get Quote Icon"
        width={60} // İkonun genişliği (büyütüp küçültebilirsin)
        height={60}
        className="mx-auto" // Ortalamak için
      />
    ), tagColor: "bg-green",
    textColor: "text-orange",
    iconColor: "text-orange",
  },
  {
    id: "03.",
    title: "SULTAN ARRIVES",
    icon: (
      <Image
        src="/icons/3.svg" // public klasöründeki yolun
        alt="Get Quote Icon"
        width={60} // İkonun genişliği (büyütüp küçültebilirsin)
        height={60}
        className="mx-auto" // Ortalamak için
      />
    ), tagColor: "bg-orange", // ! DİKKAT: Burası Turuncu Etiket
    textColor: "text-green", // ! DİKKAT: Burası Yeşil Yazı
    iconColor: "text-green", // ! DİKKAT: Burası Yeşil İkon
  },
  {
    id: "04.",
    title: "BON APPÉTIT",
    icon: (
      <Image
        src="/icons/4.svg" // public klasöründeki yolun
        alt="Get Quote Icon"
        width={60} // İkonun genişliği (büyütüp küçültebilirsin)
        height={60}
        className="mx-auto" // Ortalamak için
      />
    ), tagColor: "bg-green",
    textColor: "text-orange",
    iconColor: "text-orange",
  },
];

// --- ANİMASYON AYARLARI ---
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.4 }, // Kartlar sırayla gelsin
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring", stiffness: 100 }
  },
};

const HowItWorks = () => {
  return (
    // Arka plan şeffaf (bg-transparent), senin ana sayfadaki desenlerin görünecek.
    <section className="py-20 relative bg-transparent">

      <div className="container mx-auto px-4">

        {/* --- BAŞLIK KISMI --- */}
        <div className="text-center mb-16">
          {/* Üst Hap Etiket */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-green/15 text-green px-5 py-2 rounded-b-3xl text-xs mb-4 uppercase"
          >
            How it works →
          </motion.div>

          {/* Ana Başlık */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-roboto font-medium text-3xl md:text-5xl text-green leading-tight drop-shadow-[0_1px_1px_#00000050]"
          >
            Simple Steps To Book <br className="hidden md:block" />
            Your Perfect
            <span className="bg-linear-to-r from-green to-orange bg-clip-text text-transparent font-bold px-2">
              Catering
            </span>
            Menu !
          </motion.h2>
        </div>

        {/* --- KARTLAR (GRID YAPISI) --- */}
        {/* Mobilde 2 sütun (grid-cols-2), Masaüstünde 4 sütun (lg:grid-cols-4) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-9 md:gap-8 max-w-6xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }} // Hover olunca hafif yukarı zıplasın
              className="relative pt-2" // Üstte etiket için boşluk bıraktık
            >
              {/* KARTIN KENDİSİ */}
              <div className="bg-bejD/60 rounded-b-[50px] p-6 py-10 shadow-[0_0px_15px_#00000060] flex flex-col items-center text-center h-full ">

                {/* NUMARA ETİKETİ (Kartın tepesinde asılı duran) */}
                <div className={`absolute top-0 left-1/2 text-2xl -translate-x-1/2 -translate-y-1/2 ${step.tagColor} text-bej font-bold md:p-4 p-3 rounded-b-xl shadow-md z-10`}>
                  {step.id}
                </div>

                {/* İKON VE YAZI */}
                <div className={`mt-8 p-2 ${step.iconColor}`}>
                  {step.icon}
                </div>

                <h3 className={`font-roboto font-semibold md:text-xl uppercase ${step.textColor}`}>
                  {step.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;