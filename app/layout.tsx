import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

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
        {children}
      </body>
    </html>
  );
}
