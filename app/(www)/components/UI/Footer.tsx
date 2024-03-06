import React from "react";
import Link from "next/link";
import { Logo } from "../../utils/Icons";

const Footer = () => {
  return (
    <div>
      <div className="  w-10 h-10 mx-auto mt-3">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="flex items-center justify-center mb-12 md:mb-0">
        <p className="text-center text-3xs text-neutral my-4">
          &copy; {new Date().getFullYear()} Atelier Angel Karagiozov
        </p>
      </div>
    </div>
  );
};

export default Footer;
