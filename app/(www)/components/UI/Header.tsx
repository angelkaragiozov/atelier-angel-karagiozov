import { Logo } from "@/app/(www)/utils/Icons";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="absolute top-4 left-1/2 -ml-10 w-20 h-20 mx-auto animate-spin-slow transition-all ease-in-out duration-1000">
        <Link href="/">
          <Logo />
        </Link>
      </div>
    </>
  );
};

export default Header;
