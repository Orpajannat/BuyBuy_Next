import "./globals.css";
import { Header } from "@/header/Header";
import { Footer } from "@/footer/Footer";
import Clickon from "@/components/layout/clickon";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import CartProvider from "@/context/CartContext";
import ThemeProvider from "@/context/ThemeContext";
import { Toaster } from 'react-hot-toast';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
          <CartProvider>
            <Toaster position="top-center"/>
            <div className="container mx-auto">
              <Header />
              {children}
              <Footer />
            </div>
          </CartProvider>
      </body>
    </html>
  );
}