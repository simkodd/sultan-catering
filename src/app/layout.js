import { Roboto_Condensed } from 'next/font/google';
import "./globals.css";
import  Navbar  from "../Components/Fixed/Navbar";
import Footer from "../Components/Fixed/footer";


const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-roboto',
});


export const metadata = {
  title: "Sultan Catering | Authentic Shawarma & Food Truck",
  description: "Experience the best Turkish food in the UK with Sultan Catering. We provide professional food truck catering for weddings, events, and parties.",
  icons: {
    icon: '/favicon.ico', // Tarayıcı sekmesindeki küçük ikon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="n0jYgPGvT7-92FrbumlXjxS2m3kER8iyvPj1KrLIAck" />
      </head>
      <body
        className={`${robotoCondensed.variable} antialiased`}
      >
        <Navbar />
        <main>
          {children}

        </main>
        <Footer />
      </body>
    </html>
  );
}
