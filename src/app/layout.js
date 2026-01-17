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
  title: "Sultan Catering",
  description: "Best shawarma in UK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
