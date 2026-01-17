"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (

    <nav className="bg-bej/90 dark:bg-bej shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          <div className="shrink-0 flex items-center">
            <Link href="/" >
              <Image
                src="/Logo.svg"
                alt="Sultan Catering"
                width={150}
                height={50}
                className="object-contain h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* --- MASAÜSTÜ LİNKLERİ (Telefonda Gizlenir) --- */}
          <div className="hidden md:flex space-x-16 items-center uppercase">
            <Link href="/" className={`${pathname === "/"
              ? "text-green font-bold border-b-2 border-green"
              : "text-green font-medium hover:text-orange"
              } transition duration-300 p-1`}>
              Home
            </Link>
            <Link href="/about" className={`${pathname === "/about"
              ? "text-green font-bold border-b-2 border-green"
              : "text-green font-medium hover:text-orange"
              } transition duration-300 p-1`}>
              About
            </Link>
            <Link href="/menu" className={`${pathname === "/menu"
              ? "text-green font-bold border-b-2 border-green"
              : "text-green font-medium hover:text-orange"
              } transition duration-300 p-1`}>
              Menu
            </Link>
            
            <Link
              href="/contact"
              className={`${pathname === "/contact"
                ? "bg-green text-orange font-medium px-5 py-2 rounded-b-3xl shadow-[0_0px_14px_#F58E1C]" // Aktifse bu stiller
                : "bg-orange text-green px-5 py-2 rounded-b-3xl font-medium hover:text-orange shadow-[0_0px_14px_#46731E] hover:bg-green"       // Değilse bu stiller
                } transition duration-300 p-1`}
            >
              get in touch
            </Link>
          </div>

          {/* --- MOBİL HAMBURGER BUTONU (Sadece Telefonda Görünür) --- */}
          <div className="md:hidden flex items-center ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-green  focus:outline-none "
            >
              {/* Eğer açıksa 'X' göster, kapalıysa '3 Çizgi' göster */}
              {isOpen ? (
                <svg className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBİL MENÜ LİSTESİ (Açılınca Görünür) --- */}
      {isOpen && (
        <div className="md:hidden bg-bej/90 border-t- border-gray-100 absolute w-full left-0 shadow-lg ">
          <div className="border-b-2 border-green "></div>
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center uppercase">
            
            <Link
              href="/"
              className="block px-3 py-2 text-green font-bold hover:text-orange "
              onClick={() => setIsOpen(false)} // Linke tıklayınca menüyü kapat
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-green font-bold hover:text-orange "
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/menu"
              className="block px-3 py-2 text-green font-bold hover:text-orange "
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            
            <Link
              href="/contact"
              className="block px-3 py-2 text-orange font-bold hover:text-orange "
              onClick={() => setIsOpen(false)}
            >
              get in touch
            </Link>
          </div>
        </div>
      )}
      <div className="border-b-2 border-green "></div>
    </nav>
  );
};

export default Navbar;