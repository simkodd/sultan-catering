import React from 'react';
import Link from 'next/link';

import { FaInstagram, FaTiktok, FaPhoneAlt, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green text-bej font-roboto pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- ÜST KISIM: BİLGİ KOLONLARI --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* 1. KOLON: ADDRESS */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-lg tracking-wider">ADDRESS</h3>
            <p className="text-bej leading-relaxed">
              Sultan Falafel &<br />
              Shawarma, Lincoln St<br />
              Nottingham NG1 3DJ
            </p>
            <a
              href="https://maps.google.com/?q=Sultan+Falafel+Shawarma+Nottingham"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-orange transition-colors inline-block font-medium active:scale-105"
            >
              Get Directions
            </a>
          </div>

          {/* 2. KOLON: SAY HELLO */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-lg tracking-wider">SAY HELLO</h3>

            <div className="flex items-center space-x-3 hover:text-orange">
              <FaEnvelope className="text-xl" />
              <a href="mailto:younes@sultancatering.co.uk" className="underline hover:text-orange active:scale-105">
                younes@sultancatering.co.uk
              </a>
            </div>

            <div className="flex items-center space-x-3 hover:text-orange">
              <FaPhoneAlt className="text-xl" />
              <a href="tel:+447378100033" className="underline hover:text-orange active:scale-105">
                +44 7378100033
              </a>
            </div>

            <div className="flex items-center space-x-3 hover:text-orange">
              <FaCalendarAlt className="text-xl" />
              <Link href="/contact" className="underline font-semibold hover:text-orange active:scale-105">
                Get A Quote →
              </Link>
            </div>
          </div>

          {/* 3. KOLON: OPENING HOURS */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-lg tracking-wider">OPENING HOURS</h3>
            <div>
              <p className="font-medium">Every Day</p>
              <p className="text-bej/70">10:00 AM - 6:00 PM</p>
            </div>
            <p className="text-sm text-bej/70 opacity-80 mt-2">
              *Event Catering Available Outside Regular Hours. Contact Us For Special Arrangements
            </p>
          </div>

          {/* 4. KOLON: FOLLOW US */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-lg tracking-wider">FOLLOW US</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com/sultanfalafel/" target="_blank" className="bg-bej text-green p-2 rounded-lg hover:bg-orange transition active:scale-105">
                <FaInstagram size={24} />
              </a>
              <a href="https://tiktok.com/@sultanfalafel" target="_blank" className="bg-bej text-green p-2 rounded-lg hover:bg-orange transition active:scale-105">
                <FaTiktok size={24} />
              </a>
            </div>
          </div>

        </div>

        {/* --- ORTA KISIM: HARİTA (Görseldeki gibi) --- */}
        <div className="w-full h-64 md:h-80 rounded-b-[50px] overflow-hidden shadow-lg   mb-8 bg-bej relative">

          {/* Yükleniyor Yazısı/İkonu (Harita gelene kadar arkada durur) */}
          <div className="absolute inset-0 flex items-center justify-center text-green">
            <span className="font-bold">Loading Map...</span>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9615.212437358481!2d-1.1542403!3d52.9519657!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c1006d8789b5%3A0x6cea14f7142307cd!2sSultan%20falafel%20%26%20shawarma!5e0!3m2!1sen!2str!4v1766572116500!5m2!1sen!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sultan Location"
            className="relative z-10" 
          ></iframe>
        </div>

        {/* --- ALT KISIM: COPYRIGHT --- */}
        <div className="border-t border-bej pt-6 text-center">
          <p className="text-sm text-bej">
            © 2025 Sultan Catering. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;