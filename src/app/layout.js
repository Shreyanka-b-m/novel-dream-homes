import { Bebas_Neue, Poppins } from "next/font/google";
import "./reset.css";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Novel Dream Homes",
  description: "The key to your dream home.",
  icons: {
    icon: "/images/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${bebas.variable} `}>
      <body>{children}</body>
    </html>
  );
}
