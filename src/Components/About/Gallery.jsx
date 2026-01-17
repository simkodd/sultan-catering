"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// --- GRID YAPILANDIRMASI ---
// Her kutunun fotoğrafını (image) buradan değiştirebilirsin.
const galleryItems = [
  { 
    id: 1, 
    desktopClass: "md:col-span-2 md:row-span-1", 
    delay: 0.1,
    image: "/2.png" // 👈 Buraya 1. resmin yolunu yaz (Örn: /gallery/food1.jpg)
  },
  { 
    id: 2, 
    desktopClass: "md:col-span-1 md:row-span-2", 
    delay: 0.2,
    image: "/Photo.png" // 👈 Buraya 2. resmin yolunu yaz
  },
  { 
    id: 3, 
    desktopClass: "md:col-span-1 md:row-span-2", 
    delay: 0.3,
    image: "/1.png" // 👈 Buraya 3. resmin yolunu yaz
  },
  { 
    id: 4, 
    desktopClass: "md:col-span-1 md:row-span-1", 
    delay: 0.4,
    image: "/food/PreBur.png" // 👈 Buraya 4. resmin yolunu yaz
  },
  { 
    id: 5, 
    desktopClass: "md:col-span-2 md:row-span-1", 
    delay: 0.5,
    image: "/3.png" // 👈 Buraya 5. resmin yolunu yaz
  },
];

const Gallery = () => {
  return (
    <section className="py-20 md:py-32 bg-transparent relative">
      
      <div className="container mx-auto px-4">
        
        {/* --- BAŞLIK KISMI --- */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-green/15 text-green px-5 py-2 rounded-b-3xl text-xs mb-4 uppercase"
          >
            Our Gallery
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-roboto font-medium text-3xl md:text-5xl text-green mb-4 uppercase drop-shadow-[0_1px_1px_#00000050]"
          >
            A Feast For Your Eyes !
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-roboto text-green/70 font-medium"
          >
            See The Passion We Pour Into Every Plate.
          </motion.p>
        </div>


        {/* --- GALERİ GRID YAPISI --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 md:gap-6 w-full h-auto md:h-200">
          
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              className={`relative group overflow-hidden rounded-b-[50px] shadow-lg w-full h-80 md:h-full ${item.desktopClass}`}
            >
              {/* ARTIK BURASI DİNAMİK: item.image */}
              <Image
                src={item.image} // 👈 Değişiklik burada: Artık listeden gelen resmi kullanıyor
                alt={`Sultan Catering Gallery ${item.id}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-120"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Gallery;