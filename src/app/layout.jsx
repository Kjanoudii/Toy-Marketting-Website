
import "./globals.css";
// import { Oswald } from "next/font/google";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
// import useSWR from "swr";


export const metadata = {
  title: "TMT",
  description: "Generated by create next app",
  
};

// const inter = Oswald({ subsets: ["latin"] });
// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <head>
       
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@800&family=Oswald:wght@400;500&family=Roboto+Condensed:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}