import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor | Home",
  description: "Car Doctor repairing shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      <body className={`${inter.className} max-w-7xl mx-auto`}>
        <div className="h-24">
          <Navbar />
        </div>
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
