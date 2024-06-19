import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import AuthProvider from "@/services/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Car Doctor",
    template: "%s | Car Doctor"
  },
  description: "Car Doctor repairing shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      <body className={`${inter.className} max-w-7xl mx-auto`}>
        <AuthProvider>
          <div className="h-24">
            <Navbar />
          </div>
          <div>
            {children}
          </div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
