'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Animasyon kütüphanesini ekledik

export default function BookingForm() {
    // Form verilerini tutan state
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        eventType: '',
        eventDate: '',
        location: '',
        budget: '',
        guests: '',
        vision: '',
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' veya 'error'

    // Input değişimlerini yakalama
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Form Gönderme İşlemi
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        // E-posta format kontrolü (Frontend validasyonu)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address.');
            setLoading(false);
            return;
        }

        try {
            // API'ye istek atıyoruz
            const response = await fetch('/API/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                alert('Form successfully submitted! We will contact you soon.');
                // Formu temizle
                setFormData({
                    fullName: '', phone: '', email: '', eventType: '', eventDate: '',
                    location: '', budget: '', guests: '', vision: ''
                });
            } else {
                setStatus('error');
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        // overflow-hidden ekledim ki animasyon sırasında yanlardan scrollbar çıkmasın
        <div className="min-h-screen flex items-center justify-center p-4 md:p-10 font-sans overflow-x-hidden">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 items-start relative pt-25">

                {/* SOL TARAFTAKİ BAŞLIK VE RESİM ALANI - ANIMASYONLU */}
                <motion.div 
                    initial={{ x: -300, opacity: 0 }} // Başlangıç: Solda ve görünmez
                    animate={{ x: 0, opacity: 1 }}    // Bitiş: Yerinde ve görünür
                    transition={{ duration: 0.8, type: "spring", bounce: 0.3 }} // Geçiş hızı ve yaylanma efekti
                    className="flex flex-col space-y-4"
                >
                    <div className="text-green">
                        <p className="text-sm uppercase tracking-wide">Book Your Event ↓</p>
                        <h1 className="text-3xl md:text-4xl font-semibold mt-1">
                            Planning a Party? Let’s Talk Food ↓
                        </h1>
                    </div>

                    {/* Resim Container */}
                    <div className="relative w-full h-100 md:h-150 rounded-b-[50px] overflow-hidden shadow-xl">
                        <Image
                            src="/Doner.png"
                            alt="Delicious Doner Kebab"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                {/* SAĞ TARAFTAKİ FORM ALANI - ANIMASYONLU */}
                {/* Masaüstünde hafif yukarı taşması veya ortalanması için stil ayarları */}
                <motion.div 
                    initial={{ x: 300, opacity: 0 }} // Başlangıç: Sağda ve görünmez
                    animate={{ x: 0, opacity: 1 }}   // Bitiş: Yerinde ve görünür
                    transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: 0.2 }} // Sağ taraf 0.2sn gecikmeli gelir
                    className="bg-bejD p-6 md:p-10 rounded-b-[50px] shadow-[0_0_25px_#00000060] relative z-10"
                >
                    <form onSubmit={handleSubmit} className="space-y-4 text-green">

                        {/* Satır 1: İsim ve Telefon */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="font-bold text-sm mb-1">Full Name *</label>
                                <input
                                    required
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="bg-bej border border-green rounded p-2 focus:outline-none focus:ring-1 focus:ring-orange"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="font-bold text-sm mb-1">Phone Number *</label>
                                <input
                                    required
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="bg-bej border border-green rounded p-2 focus:outline-none focus:ring-1 focus:ring-orange"
                                />
                            </div>
                        </div>

                        {/* Satır 2: Email */}
                        <div className="flex flex-col">
                            <label className="font-bold text-sm mb-1">Email *</label>
                            <input
                                required
                                type="email"
                                name="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@gmail.com"
                                className="bg-bej border border-green rounded p-2 focus:outline-none focus:ring-1 focus:ring-orange"
                            />
                        </div>

                        {/* Satır 3: Event Type ve Date */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="font-bold text-sm mb-1">Event Type *</label>
                                <input
                                    required
                                    type="text"
                                    name="eventType"
                                    value={formData.eventType}
                                    onChange={handleChange}
                                    className="bg-bej border border-green rounded p-2 focus:outline-none focus:ring-1 focus:ring-orange"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="font-bold text-sm mb-1">Event Date *</label>
                                <input
                                    required
                                    type="date"
                                    name="eventDate"
                                    value={formData.eventDate}
                                    onChange={handleChange}
                                    className="bg-bej border border-green rounded p-2 focus:outline-none focus:ring-1 focus:ring-orange text-green"
                                />
                            </div>
                        </div>

                        {/* Satır 4: Location */}
                        <div className="flex flex-col">
                            <label className="font-bold text-sm mb-1">Event Location *</label>
                            <input
                                required
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="bg-bej border border-green rounded p-2 focus:outline-none focus:ring-1 focus:ring-orange"
                            />
                        </div>

                        {/* Satır 5: Budget */}
                        <div className="flex flex-col">
                            <label className="font-bold text-sm mb-1">Your Estimated Budget</label>
                            <input
                                type="text"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                className="bg-bej border border-green rounded p-2 focus:outline-none focus:ring-1 focus:ring-orange"
                            />
                        </div>

                        {/* Satır 6: Guests */}
                        <div className="flex flex-col">
                            <label className="font-bold text-sm mb-1">Approx Number Of Guests</label>
                            <p className="text-xs text-green/75 mb-1">Either a total sum or price per head. It’s perfectly fine to leave this empty if you’re unsure.</p>
                            <input
                                type="text"
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                className="bg-bej border border-green rounded p-2 focus:outline-none focus:ring-1 focus:ring-orange"
                            />
                        </div>

                        {/* Satır 7: Vision (TextArea) */}
                        <div className="flex flex-col">
                            <label className="font-bold text-sm mb-1">Your Vision For The Event *</label>
                            <textarea
                                required
                                rows="4"
                                name="vision"
                                value={formData.vision}
                                onChange={handleChange}
                                className="bg-bej border border-green rounded p-2 focus:outline-none focus:ring-1 focus:ring-orange resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Butonu */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full md:w-auto float-right bg-orange hover:bg-green text-bej font-bold py-3 px-10 rounded shadow-md transition-colors disabled:opacity-50"
                            >
                                {loading ? 'Sending...' : 'SUBMIT'}
                            </button>
                        </div>

                    </form>
                </motion.div>
            </div>
        </div>
    );
}