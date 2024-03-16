import Link from "next/link";
import React from "react";
import { Logo } from "../../utils/Icons";

const Header = () => {
  return (
    <div>
      <div className="absolute top-6 left-1/2 -ml-10 w-20 h-20 mx-auto animate-spin-slow transition-all ease-in-out duration-1000">
        <Link href="/">
          <Logo />
        </Link>
      </div>
    </div>
  );
};

export default Header;
