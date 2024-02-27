import type { Metadata } from "next";
import { Fira_Code } from 'next/font/google'
import "./globals.css";
import Navbar from './components/UI/Navbar'
import { Provider } from './utils/Provider'
import localFont from "next/font/local"
import Footer from "./components/UI/Footer";

const firaCode = Fira_Code({ 
  subsets: ['latin'], 
  weight:'400',
});

export const metadata: Metadata = {
  title: "Atelier Angel Karagiozov",
  description: "new-media",
};

const Pixel =localFont({
  src: [
    {
   path: '../../public/fonts/Pixel.woff2',
   weight: '400',
   style: 'normal'
    },
  ],
  display:'block',
  variable:'--pixel-font'
  })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${firaCode.className} h-full bg-light dark:bg-black text-neutral text-xs selection:bg-yellow selection:text-dark`}>
      <Provider>
        <header>
        <Navbar />
        </header>  
          <main className="min-h-screen flex flex-col">
                  <div className="flex-grow">
                  {children}
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
