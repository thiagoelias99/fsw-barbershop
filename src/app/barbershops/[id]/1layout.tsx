import Footer from "@/components/footer/footer";
import HeaderBackButton from "@/components/header/header-back-button";
import { Inter } from "next/font/google";
// import "../../(home)/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={`${inter.className} dark`}>
          <HeaderBackButton />
          {children}
          <Footer />
        </body>
      </html>
    );
  }