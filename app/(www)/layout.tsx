import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import {Handjet} from 'next/font/google';
import "./globals.css";
import Navbar from './components/UI/Navbar';
import { Provider } from './utils/Provider';
import Footer from "./components/UI/Footer";
import localFont from "next/font/local"

const pixel =localFont({ src: '../../public/fonts/Pixel.woff2'})



// const handjet = Handjet({ 
//   subsets: ['latin'], 
//   weight:'400',
//   variable: '--font-handjet',
//   display: 'block',
// });


export const metadata: Metadata = {
  title: "Atelier Angel Karagiozov",
  description: "new-media",
  
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${pixel.className} handjet h-full tracking-widest bg-light dark:bg-black text-neutral text-xs selection:bg-yellow selection:text-dark`}>
      <Provider>
        <header>
        <Navbar />
        </header>  
          <main className="min-h-screen flex flex-col">
                  <div className="flex-grow">
                  {children}
                  <SpeedInsights />
                  </div>
          </main>
         <footer className="justify-center">
            <Footer />
          </footer>
        </Provider>


      </body>
    </html>
  );
}
