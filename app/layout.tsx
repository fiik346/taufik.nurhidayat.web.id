import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  fallback: ["ui-sans", "sans-serif"],
});

export const metadata = {
  title: "Taufik Nurhidayat - Frontend Developer & Writer",
  description: "Frontend Developer & Writer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        <main className="container mx-auto px-4 my-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
