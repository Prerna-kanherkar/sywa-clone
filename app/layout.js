import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Sywa Consultancy - Engineering Consultant & MEP Services",
  description: "SYWA Consultancy is a premier Engineering Consultant providing comprehensive MEP, ICT, ELV, AV, Security, and Acoustic consulting services.",
  icons: {
    icon: "/assets/images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/assets/images/favicon.png" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}
