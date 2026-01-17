"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFire, FaLeaf, FaMagic, FaQuoteRight } from "react-icons/fa";

const Loved = () => {
  return (
    <section className=" py-16 md:py-24 relative overflow-hidden">
      
      <div className=" container mx-auto px-4">

        {/* --- 1. ORTAK BAŞLIK ALANI (HEADER) --- */}
        <div className="bg-bejD text-center mb-10 md:mb-16 w-full mx-auto p-5">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=" font-roboto font-bold text-3xl md:text-5xl text-red mb-2 leading-tight"
          >
            Loved Our Food? Bring It To Your Party!
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-roboto text-red/50 text-lg md:text-xl font-medium"
          >
            Let Us Make Your Event Unforgettable With The Authentic Taste Of Sultan.
          </motion.p>
        </div>


        {/* --- 2. İÇERİK DÜZENİ (GRID/FLEX) --- */}
        {/* Masaüstü: Yan Yana (Text - Image) */}
        {/* Mobil: Alt Alta (Image - Text) -> Bunun için order-first/last kullanacağız */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* SOL TARA (Mobilde Alta İner: order-2) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 order-2 md:order-1 relative"
          >

            <div className="space-y-4 relative z-10">
              
              {/* Feature 1: Live Cooking */}
              <div className="flex gap-4">
                <div className="mt-1">
                  <FaFire className="text-orange text-3xl" /> 
                </div>
                <div>
                  <h3 className="font-roboto font-bold text-xl text-green mb-1">
                    The Live Cooking Experience
                  </h3>
                  <p className="text-green/50 text-sm md:text-base leading-relaxed">
                    Forget Cold Buffets. We Cook Fresh On-Site, Delighting Your Guests With The Sights And Sizzling Aromas Of A Live Kitchen.
                  </p>
                </div>
              </div>

              {/* Feature 2: Menu For Everyone */}
              <div className="flex gap-4">
                <div className="mt-1">
                  <FaLeaf className="text-green text-3xl" /> {/* Yeşil Yaprak */}
                </div>
                <div>
                  <h3 className="font-roboto font-bold text-xl text-green mb-1">
                    A Menu For Everyone
                  </h3>
                  <p className="text-green/50 text-sm md:text-base leading-relaxed">
                    Hosting A Diverse Crowd? With 100% Halal Chicken Plus Vegetarian & Vegan Options, We Ensure Everyone Enjoys A Fantastic Meal.
                  </p>
                </div>
              </div>

              {/* Feature 3: Zero Stress */}
              <div className="flex gap-4">
                <div className="mt-1">
                  <FaMagic className="text-[#FDD835] text-3xl" /> 
                </div>
                <div>
                  <h3 className="font-roboto font-bold text-xl text-green mb-1">
                    Zero Stress, All Flavour
                  </h3>
                  <p className="text-green/50 text-sm md:text-base leading-relaxed">
                    You Focus On The Party; We Handle The Rest. From Setup To Cleanup, We Deliver A Hassle-Free Service With A Smile.
                  </p>
                </div>
              </div>

              {/* BUTON */}
              <div className="pt-4">
                <Link 
                  href="/contact"
                  className="inline-block  bg-red text-bej font-bold py-4 px-8 rounded-b-[20px] shadow-[0_0_15px_#6E1011BF] hover:bg-orange hover:shadow-[0_0_15px_#F58E1CBF] hover:scale-105 transition-all duration-300"
                >
                  Get A Quote - It's Free !
                </Link>
              </div>

            </div>
          </motion.div>


          {/* SAĞ TARAF (Mobilde Üste Çıkar: order-1) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-2/3 order-1 md:order-2"
          >
            <div className="relative w-full h-75 md:h-125 rounded-b-[50px] overflow-hidden shadow-2xl">
              <Image 
                src="/Truck.png"
                alt="Sultan Food Truck"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Loved;