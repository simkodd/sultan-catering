"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Ready = () => {
  return (
    // Arka plan şeffaf, sayfanın deseni alttan görünecek
    <section className="py-10 md:py-24 relative overflow-hidden">
      
      <div className="container mx-auto px-4 text-center">
         
         {/* Kapsayıcı Animasyon (Aşağıdan yukarı belirme) */}
         <motion.div
           initial={{ opacity: 0, y: 80 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="flex flex-col items-center"
         >
            {/* 1. ANA BAŞLIK (Üzerinden Işık Geçen Efekt) */}
            <motion.h2 
              // Işığın soldan sağa kaymasını sağlayan animasyon
              animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
              transition={{ 
                repeat: Infinity, 
                duration: 5, // 4 saniyede bir ışık geçer (Hızı buradan ayarla)
                ease: "linear" 
              }}
              // Gradient Mantığı: Koyu Kırmızı -> Araya Beyaz/Parlak Kırmızı Giriyor -> Koyu Kırmızı
              style={{
                backgroundImage: "linear-gradient(to right, #6E1011 40%, #FFFFFF 50%, #6E1011 60%)",
                backgroundSize: "200% auto", // Işığın hareket edebilmesi için zemin geniş olmalı
              }}
              // text-red yerine text-transparent ve bg-clip-text kullandık
              className="font-roboto font-medium text-4xl md:text-6xl text-transparent bg-clip-text uppercase leading-tight mb-4 drop-shadow-lg"
            >
              Ready for a royal feast? <br className="hidden md:block" />
              Let's talk food!
            </motion.h2>

            {/* 2. ALT YAZI (Aynen kaldı) */}
            <p className="font-roboto text-orange text-sm md:text-xl uppercase tracking-wide mb-10 max-w-4xl mx-auto leading-relaxed">
              Tell us a bit about your event, and we’ll create the perfect catering package for you.
            </p>

            {/* 3. BUTON (Aynen kaldı) */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-orange text-bej px-6 py-3 md:px-8 md:py-4 rounded-b-[20px] font-medium text-lg md:text-xl shadow-[0_0px_30px_orange] hover:shadow-[0_5px_30px_orange] hover:bg-red transition-all duration-300"
              >
                <span>GET A FREE QUOTE</span>
                <FaArrowRight className="text-sm" />
              </Link>
            </motion.div>

         </motion.div>

      </div>
    </section>
  );
};

export default Ready;