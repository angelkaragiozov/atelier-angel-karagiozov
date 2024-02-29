"use client"
import React, {useState} from "react";
import { Nav } from "../../utils/Icons";
import Link from "next/link";
const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {

      setNav(!nav);
    }

  return (
    <div className="z-50">
     
      <div className={nav ? 'fixed left-0 top-0 backdrop-blur-lg w-full h-screen text-dark' : ''}>

        <div className={nav ? 'fixed left-0 top-0 w-[100%] h-screen bg-light dark:bg-black p-10 ease-in-out duration-1000' : 
                              'fixed left-[-100%] top-0 w-[100%]  h-screen bg-light/50 dark:bg-black/50 ease-out duration-1000'}>
            <div onClick={handleNav}> <h1 className="text-dark dark:text-gray ">CLOSE</h1></div>
      
       
        <div className="mt-10">

           <Link onClick={handleNav} href="/">

           <pre className='text-xs text-gray dark:text-dark'>{`                        
  _ _ _ _____ _____ _____ 
 | | | |     | __  |  |  |
 | | | |  |  |    -|    -|
 |_____|_____|__|__|__|__|
        `}
        </pre>

            </Link>

        </div>

        <div onClick={handleNav} 
        className="absolute top-0 left-full w-12 -translate-x-2 h-full backdrop-blur-sm bg-light/10 border-r border-gray border-dashed dark:bg-dark/10 dark:border-dark cursor-pointer transition text-neutral hover:text-dark hover:bg-white dark:hover:bg-blacks dark:text- dark:hover:text-light hover:border-solid hover:-translate-x-0.5 ease-out duration-500">
            <div className={nav ? 'ease-in duration-500' : ''}>
             <div className="w-3 h-3 mx-auto mt-3 translate-x-1 text-base text-blue dark:text-yellow "> 
            -
            -
            -

              </div>
              </div></div>

        </div>
        </div>                
    </div>
      
  );
};

export default Navbar;
