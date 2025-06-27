import { LoadingProvider } from "@/providers/LoadingProvider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NAGPUR HEIGHTS | Buy Real Estate in Nagpur | Buy, Sell & Rent Properties in Nagpur ",
  description: "Looking to invest in real estate in Nagpur? Explore a wide range of verified property listings including residential flats, commercial spaces, and plots for sale in Nagpur. Browse properties in prime Nagpur localities such as Wardha Road, Civil Lines, MIHAN, Manish Nagar, and Dharampeth. Whether you're looking to buy a flat in Nagpur, rent a shop, or sell your property, our platform connects you with trusted builders and RERA-approved projects for a secure transaction. We offer affordable flats, luxury apartments, NA plots, independent houses, and commercial properties including offices, showrooms, and retail spaces. With advanced search filters, latest Nagpur real estate market trends, and expert support, finding the right property in Nagpur is simple and hassle-free. Stay updated with property prices in Nagpur, new launches, and upcoming real estate projects. Whether you're a first-time home buyer or a real estate investor, our portal is your one-stop solution for all Nagpur property needs. Start your property search today on Nagpur’s most trusted real estate website – where finding a home in Nagpur meets professionalism, transparency, and peace of mind.",
  keywords: [
    'Nagpur real estate',
    'property for sale in Nagpur',
    'buy plots Nagpur',
    'sell plots Nagpur',
    'buy flat Nagpur',
    'sell flat Nagpur',
    'Nagpur Heights',
  ],
  robots: {
  index: true,
  follow: true,
},
openGraph: {
  title: ` Real Estate Services `,
  description: `Buy, Sell, or Rent Real Estate Browse details, prices, and photos.`,
  siteName: 'Nagpur Heights',
  type: 'website',
},
  icons: {
    icon: "/favicon.ico", // ✅ relative to /public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <LoadingProvider> */}
          {children}
        {/* </LoadingProvider> */}
      </body>
    </html>
  );
}
