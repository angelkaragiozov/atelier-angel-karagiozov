import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "./utils/Provider";
import localFont from "next/font/local";
import Header from "./d/components/UI/Header";
import Menu from "./d/components/UI/Menu";
import Footer from "./d/components/UI/Footer";
import MobileMenu from "./m/components/UI/Menu";

const pixel = localFont({
  src: "../../public/fonts/Pixel.woff2",
  weight: "400",
  display: "block",
});

export const metadata: Metadata = {
  title: "Atelier Angel Karagiozov",
  description: "new-media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${pixel.className} tracking-wider scroll-smooth overflow-x-hidden text-sm text-dark dark:text-gray selection:bg-yellow selection:text-dark`}
      >
        <Provider>
          <header>
            <Header />
            <div className="hidden md:block">
              <Menu />
            </div>
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </header>
          <main className="min-h-screen flex flex-col">
            <div className="flex-grow">{children}</div>
          </main>
          <footer className="justify-center ">
            <Footer />
          </footer>
        </Provider>
      </body>
    </html>
  );
}
