import { Inter } from "next/font/google";
import styles from "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextTopLoader from 'nextjs-toploader'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie Watching Website",
  description: "Unleash a world of cinematic wonders at your fingertips. Dive into a vast library of movies, spanning genres and eras, for an unparalleled viewing experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextTopLoader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
