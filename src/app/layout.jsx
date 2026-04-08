import "./globals.css";
import { Header } from "@/header/Header";
import { Footer } from "@/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}