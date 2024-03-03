import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Provider } from './utils/Provider';
import Footer from "./components/UI/Footer";
import localFont from "next/font/local"
import Menu from "./components/UI/Menu";

const pixel =localFont({ src: '../../public/fonts/Pixel.woff2'})



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
      <body className={`${pixel.className} h-full tracking-wider bg-light dark:bg-black text-neutral text-xs selection:bg-yellow selection:text-dark`}>
      <Provider>
        <header>
        <Menu />
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
