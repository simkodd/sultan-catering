"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaLeaf, FaStar } from "react-icons/fa"; // Halal, Vegan ve Yıldız İkonları

// --- MENÜ VERİLERİ ---
// Her yemeğin resmini, açıklamasını ve türünü (halal/vegan) buradan değiştirebilirsin.
const menuItems = {
  Wraps: [
    { id: 1, name: "Shawarma Wrap", desc: "Succulent shawarma meat wrapped with crispy chips, homemade pickles, our signature sauce, and your choice of fresh salad.", type: "halal", image: "/food/ShawarmaW.png" },
    { id: 2, name: "Falafel Wrap", desc: "Crispy, fresh falafel served with creamy tahini, golden chips, homemade pickles, and your choice of crisp salad.", type: "vegan", image: "/food/FalafelW.png" },
    { id: 3, name: "Halloumi Wrap", desc: "Golden grilled or fried halloumi cheese, paired with crispy chips, homemade pickles, our special sauce, and fresh salad.", type: "vegan", image: "/food/HalloumiW.png" },
    { id: 4, name: "Mix Wrap", desc: "The Sultan’s Choice! Create your own masterpiece by combining your favorite ingredients exactly to your taste.", type: "halal", image: "/food/MixW.png" },
  ],
  Meals: [
    { id: 5, name: "Shawarma & Chips", desc: "Our famous shawarma meat served with golden crispy chips, fresh garden salad, and a drizzle of our special sauce.", type: "halal", image: "/food/ShCh.png" },
    { id: 6, name: "Shawarma & Rice", desc: "A generous platter of succulent shawarma meat served over fluffy rice, accompanied by fresh salad and our signature sauce.", type: "halal", image: "/food/ShRi.png" },
    { id: 7, name: "Mix Salad Box", desc: "A refreshing mix of garden greens topped with creamy hummus, crispy falafel, and grilled halloumi cheese for a perfectly balanced meal.", type: "vegan", image: "/food/MixSa.png" },
    { id: 8, name: "Falafel Box", desc: "Golden, crispy falafel pieces served with our rich, creamy hummus and a side of crunchy homemade pickles.", type: "vegan", image: "/food/FaBo.png" },
    { id: 9, name: "Kids Meal", desc: "A perfect portion for the little ones! Tasty meat served with crispy chips, designed to make every bite enjoyable.", type: "halal", image: "/food/KidMea.png" },
  ],
  Burgers: [
    { id: 10, name: "Premium Burger", desc: "A meat lover’s dream! 200g of premium tenderloin beef, smashed to perfection and seasoned simply with salt and pepper to highlight the rich flavor.", type: "halal", image: "/food/PreBur.png" },
    { id: 11, name: "Chicken Burger", desc: "Golden breaded chicken fillet patty topped with melted cheese, fresh tomato slices, and shredded lettuce, all nestled between toasted wheat bread.", type: "halal", image: "/food/ChiBur.png" },
  ],
  Sides: [
    { id: 13, name: "Mozzarella Sticks", desc: "Golden, crispy breadcrumbs encasing gooey, melted mozzarella cheese.", type: "vegan", image: "/food/Mozz.png" },
    { id: 14, name: "Chicken Wings", desc: "Succulent chicken wings, fried to a perfect golden crisp.", type: "halal", image: "/food/Wing.png" },
    { id: 15, name: "Chicken Strips", desc: "Tender chicken breast strips coated in a seasoned, crispy breading.", type: "halal", image: "/food/Strips.png" },
    { id: 16, name: "Halloumi Sticks", desc: "Delicious sticks of authentic halloumi cheese, fried until golden brown.", type: "vegan", image: "/food/Hallo.png" },
    { id: 17, name: "Falafel Pieces", desc: "Our signature crunchy falafel bites, packed with herbs and flavor.", type: "vegan", image: "/food/Falafel.png" },
    { id: 18, name: "Sambosa", desc: "Crispy pastry pockets filled with a savory spiced blend, fried to perfection.", type: "vegan", image: "/food/Samb.png" },
    { id: 19, name: "Rice Box", desc: "A side portion of our aromatic, fluffy seasoned rice.", type: "vegan", image: "/food/Rice.png" },
    { id: 20, name: "Chips", desc: "Hot, golden-fried potato chips, crispy on the outside and soft inside.", type: "vegan", image: "/food/Fries.png" },
  ],
  Desserts: [
    { id: 21, name: "Baklava", desc: "Traditional sweet pastry layers filled with crushed nuts and soaked in rich syrup.", type: "vegan", image: "/food/Bak.png" },
  ],
  Drinks: [
    { id: 22, name: "Soft Drinks", desc: "A selection of ice-cold refreshing beverages to complete your meal.", type: "vegan", image: "/food/Soft.png" },
  ],
};

const categories = Object.keys(menuItems);

const MenuCards = () => {
  const [activeCategory, setActiveCategory] = useState("Wraps");

  return (
    <section className=" overflow-hidden pb-20">
      
      {/* --- 1. HAREKETLİ ÜST ŞERİT (TICKER) --- */}
      <div className="bg-orange py-3 md:py-5 relative flex overflow-hidden whitespace-nowrap items-center">
        {/* Kapsayıcı: Sola veya Sağa kayma hareketi */}
        <motion.div
          className="flex gap-8 items-center"
          // x: ["-50%", "0%"] -> Soldan Sağa Akış (text dogrudan saga dogru gitsin dedin)
          animate={{ x: ["-50%", "0%"] }} 
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          style={{ width: "200%" }} // Sonsuz döngü için geniş alan
        >
          {/* İçeriği birkaç kez tekrarlıyoruz ki boşluk kalmasın */}
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-bej font-bold md:font-black text-lg md:text-xl tracking-widest uppercase">
                WE LOVE TO SURPRISE YOU
              </span>
              {/* DÖNEN YILDIZ İKONU */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              >
                <FaStar className="text-bej text-xl" />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>


      {/* --- 2. BAŞLIK VE KATEGORİ SEÇİMİ --- */}
      <div className="container mx-auto px-4 mt-8 text-center">
        
        {/* SVG BAŞLIK: CHOOSE YOUR FAVOURITE */}
        <div className="relative w-full max-w-4xl mx-auto h-24 md:h-32 ">
          <Image 
            src="/Choose.svg" 
            alt="Choose Your Favourite"
            fill
            className="object-contain"
          />
        </div>

        {/* KATEGORİ BUTONLARI */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`transition-all duration-300 font-bold rounded-b-[20px] border
                ${activeCategory === cat 
                  ? "bg-bej/20 text-orange border-orange px-6 py-2 text-lg md:text-2xl shadow-xl scale-110" // Aktif
                  : "bg-bej/50 text-green border-green px-6 py-2 text-sm md:text-base hover:bg-gray-50" // Pasif
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>


        {/* --- 3. YEMEK KARTLARI (GRID) --- */}
        {/* Masaüstü: 4 sütun (grid-cols-4), Mobil: 1 sütun (grid-cols-1) */}
        <motion.div 
          key={activeCategory} // Kategori değişince animasyon tetiklensin
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 max-w-7xl mx-auto"
        >
          {menuItems[activeCategory].map((item) => (
            <div 
              key={item.id}
              className="bg-bej border-2 border-orange rounded-b-[50px] shadow-[0_0_15px_#F58E1C] flex flex-col items-center pt-8 pb-0 overflow-hidden hover:shadow-[0_0_25px_#46731E] hover:border-green transition-shadow duration-300 h-full min-h-112"
            >
              
              {/* YEMEK ADI */}
              <h3 className="font-roboto font-bold text-2xl text-brown mb-2 px-4">
                {item.name}
              </h3>

              {/* TÜR İKONU (HALAL / VEGAN) */}
              <div className="mb-4">
                {item.type === "halal" ? (
                  <div className="flex items-center gap-1 text-[#FBC02D]">
                    <FaCheckCircle />
                  </div>
                ) : (
                  <div className="flex items-center gap-1 text-green">
                    <FaLeaf />
                  </div>
                )}
              </div>

              {/* AÇIKLAMA */}
              <p className="font-roboto text-brown text-sm px-6 mb-8 leading-relaxed max-w-62">
                {item.desc}
              </p>

              {/* RESİM (KARTIN ALTINA YAPIŞIK) */}
              {/* mt-auto: İçerik az olsa bile resmi en alta iter */}
              <div className="mt-auto w-full h-55 relative">
                 <Image 
                   src={item.image} 
                   alt={item.name}
                   fill
                   className="object-cover" // Kartın ovaline uyması için
                 />
              </div>

            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default MenuCards;