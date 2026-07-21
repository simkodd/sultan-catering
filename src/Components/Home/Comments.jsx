"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar, FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";

// YEDEK (FALLBACK) YORUMLAR: API kesilirse yine senin resmi Google yorum linkine yönlendirir!
const fallbackReviews = [
  {
    id: "fb-1",
    initials: "SR",
    name: "Sophie & Tom Richardson",
    role: "Wedding Catering • Verified Client",
    text: "We booked Sultan for our outdoor wedding and it was the highlight of the day! The truck looked amazing and the guests couldn't stop talking about the food. Professional service and incredible falafels. Thank you, Sultan!",
    themeColor: "text-orange",
    bgColor: "bg-red",
    stars: 5,
    reviewUrl: "https://search.google.com/local/reviews?placeid=ChIJtYmHbQDBeUgRzQcjFPcU6mw"
  },
  {
    id: "fb-2",
    initials: "JM",
    name: "James Mitchell",
    role: "Street Food Lover • Verified Client",
    text: "Hands down the best street food in town. I grab a Falafel wrap for lunch whenever I can. Perfectly crispy and full of flavor. The portions are generous, the ingredients are fresh, and Sultan always serves it with a smile. You have to try the Halloumi!",
    themeColor: "text-green",
    bgColor: "bg-orange",
    stars: 5,
    reviewUrl: "https://search.google.com/local/reviews?placeid=ChIJtYmHbQDBeUgRzQcjFPcU6mw"
  },
  {
    id: "fb-3",
    initials: "EC",
    name: "Emily Clarke",
    role: "Corporate Catering • Verified Client",
    text: "Hired the truck for our corporate summer party. The team was fantastic to work with from start to finish. They served 50 people quickly without compromising on quality. The Shawarma is absolutely authentic. Highly recommended!",
    themeColor: "text-red",
    bgColor: "bg-green",
    stars: 5,
    reviewUrl: "https://search.google.com/local/reviews?placeid=ChIJtYmHbQDBeUgRzQcjFPcU6mw"
  },
];

const Comments = () => {
  const [reviews, setReviews] = useState(fallbackReviews);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();

        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
        } else {
          setReviews(fallbackReviews);
        }
      } catch (error) {
        console.error("Yorumlar çekilemedi, yedekler kullanılıyor:", error);
        setReviews(fallbackReviews);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const getPosition = (index, current) => {
    if (index === current) return "center";
    if (index === (current + 1) % reviews.length) return "right";
    if (index === (current - 1 + reviews.length) % reviews.length) return "left";
    return "hidden";
  };

  const variants = {
    center: {
      x: "0%",
      scale: 1,
      opacity: 1,
      zIndex: 10,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    left: {
      x: "-65%",
      scale: 0.85,
      opacity: 0.7,
      zIndex: 5,
      filter: "blur(5px)",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    right: {
      x: "65%",
      scale: 0.85,
      opacity: 0.7,
      zIndex: 5,
      filter: "blur(5px)",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <section className="relative py-20 min-h-210 flex flex-col justify-center items-center bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 w-full max-w-6xl">
        {/* --- BAŞLIK VE MASAÜSTÜ BUTONLARI --- */}
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8 max-w-2xl md:max-w-none mx-auto">
          {/* SOL: Başlık Alanı */}
          <div className="text-center md:text-left">
            <span className="inline-block bg-bej/25 text-bej px-5 py-2 rounded-b-3xl text-xs mb-4 uppercase font-semibold">
              Client Reviews
            </span>
            <h2 className="font-roboto font-medium text-3xl md:text-5xl text-bej leading-tight mb-4 drop-shadow-[0_1px_1px_#00000050] max-w-160">
              Discover What Our Clients Say About Us.
            </h2>
          </div>

          {/* SAĞ: Masaüstü Butonları */}
          <div className="hidden md:flex gap-4 mb-2">
            <button
              onClick={handlePrev}
              disabled={loading || reviews.length <= 1}
              className="bg-bej text-red w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 active:scale-95 transition-transform disabled:opacity-50"
              aria-label="Previous review"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              disabled={loading || reviews.length <= 1}
              className="bg-bej text-red w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 active:scale-95 transition-transform disabled:opacity-50"
              aria-label="Next review"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* --- CAROUSEL ALANI --- */}
        <div className="relative w-full h-110 flex items-center justify-center perspective-1000">
          {loading ? (
            <div className="flex flex-col items-center justify-center text-bej gap-3">
              <div className="w-10 h-10 border-4 border-bej border-t-transparent rounded-full animate-spin"></div>
              <p className="text-sm font-medium tracking-wider uppercase opacity-80">Loading Reviews...</p>
            </div>
          ) : (
            reviews.map((review, index) => {
              const position = getPosition(index, currentIndex);

              return (
                <motion.div
                  key={review.id}
                  variants={variants}
                  initial={false}
                  animate={position}
                  /* TIKLAMA ÖZELLİĞİ: Tıklanınca linki yeni sekmede açar, fare el simgesi olur */
                  onClick={() => review.reviewUrl && window.open(review.reviewUrl, "_blank", "noopener,noreferrer")}
                  title="Click to view this review on Google Maps"
                  className="absolute w-full max-w-88 md:max-w-140 bg-bej/90 backdrop-blur-md rounded-b-[50px] p-8 md:p-12 shadow-2xl top-0 cursor-pointer transition-transform hover:scale-[1.01]"
                  style={{ height: "auto", minHeight: "400px" }}
                >
                  {/* KİŞİ BİLGİSİ */}
                  <div className="flex items-center gap-4 mb-6">
                    {review.photoUrl ? (
                      <img
                        src={review.photoUrl}
                        alt={review.name}
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shadow-md border-2 border-white"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div
                        className={`w-14 h-14 md:w-16 md:h-16 ${review.bgColor} rounded-full flex items-center justify-center text-bej text-xl md:text-2xl font-bold shadow-md`}
                      >
                        {review.initials}
                      </div>
                    )}

                    <div>
                      <h3 className={`font-bold text-lg md:text-xl ${review.themeColor}`}>
                        {review.name}
                      </h3>
                      <p className={`text-xs md:text-sm font-medium opacity-75 ${review.themeColor}`}>
                        {review.role}
                      </p>
                    </div>
                  </div>

                  {/* YILDIZLAR */}
                  <div className="flex gap-1 mb-6 text-yellow-400 text-lg md:text-xl">
                    {[...Array(review.stars)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  {/* YORUM */}
                  <div className="relative">
                    <FaQuoteLeft
                      className={`absolute -top-3 -left-2 text-4xl opacity-10 ${review.themeColor}`}
                    />
                    <p
                      className={`relative z-10 text-base md:text-lg leading-relaxed font-medium ${review.themeColor} line-clamp-6 md:line-clamp-none`}
                    >
                      {review.text}
                    </p>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>

        {/* --- MOBİL BUTONLARI --- */}
        <div className="flex md:hidden items-center justify-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            disabled={loading || reviews.length <= 1}
            className="bg-bej text-red w-14 h-14 rounded-full flex items-center justify-center text-xl shadow-lg active:scale-95 transition-transform disabled:opacity-50"
            aria-label="Previous review"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={handleNext}
            disabled={loading || reviews.length <= 1}
            className="bg-bej text-red w-14 h-14 rounded-full flex items-center justify-center text-xl shadow-lg active:scale-95 transition-transform disabled:opacity-50"
            aria-label="Next review"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Comments;