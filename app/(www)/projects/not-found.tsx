import Link from "next/link";
import React from "react";
import { Logo } from "../utils/Icons";

const NotFound = () => {
  return (
    <div>
          <div className="fadein-animation w-24 h-24 mx-auto my-8 animate-spin-slow transition-all ease-in-out duration-1000">
            <Link href="/">
              <Logo />
            </Link>
          </div>
  

      <p className="mt-20 text-center text-neutral text-base">404 - Page Not Found</p>
        <Link href="/">
          <p className="mt-10 text-center text-neutral text-xs underline underline-offset-4 decoration-dotted hover:decoration-solid hover:text-dark dark:hover:text-gray">Return Home</p>
          
          </Link>
    
    </div>
  );
};

export default NotFound;