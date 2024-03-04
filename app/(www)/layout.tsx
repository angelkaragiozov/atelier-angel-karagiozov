import type { Metadata } from "next";
import "./globals.css";
import { Provider } from './utils/Provider';
import Footer from "./components/UI/Footer";
import localFont from "next/font/local"
import Menu from "./components/UI/Menu";
import MobileMenu from "./components/UI/MobileMenu";

const pixel =localFont({
  src: '../../public/fonts/Pixel.woff2',
  weight:'400',
  display: 'block',


})



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
          <div className="hidden md:block">
          <Menu />
          </div>
          <div className="md:hidden">
          <MobileMenu />
          </div>

          
        </header>  
          <main className="min-h-screen flex flex-col">
                  <div className="flex-grow">
                  {children}
                  </div>
          </main>
         <footer className="justify-center ">
            <Footer />
          </footer>
        </Provider>


      </body>
    </html>
  );
}
