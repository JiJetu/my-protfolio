import Footer from "@/components/shared/Footer";
import FooterBottom from "@/components/shared/FooterButtom";
import Navbar from "@/components/shared/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jaoad | Portfolio",
  description: "Generated by create next app",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-auto bg-[#212428] text-[#c4cfde] px-4">
      <Navbar />
      <div className="min-h-screen container mx-auto">{children}</div>
      <Footer />
      <FooterBottom />
    </div>
  );
}
