import "./globals.css";
import { Unna, Urbanist } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const unna = Unna({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-aep-unna",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-aep-urbanist",
});

export const metadata = {
  title: "AEP Website",
  description: "Association of Environmental Professionals at UCR",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${unna.variable} ${urbanist.variable}`}>
      <body>
        <Navbar/>
        <ReactQueryClientProvider>{children}
          <Footer/>
        </ReactQueryClientProvider>
        
      </body>
    </html>
  );
}
