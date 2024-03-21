import { Slabo_13px } from "next/font/google";
import "./globals.css";
import Navbar from "~/components/navbar";
import NavbarMobile from "~/components/navbarMobile";
import Footer from "~/components/footer";

const Slabo = Slabo_13px({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Code Challenge 2 - Accelist Aviation",
  description: "Accelist Aviation Company Profile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Slabo.className}>
        <NavbarMobile />
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
