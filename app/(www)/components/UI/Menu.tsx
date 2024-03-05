"use client"
import React, {useState} from "react";
import Link from "next/link";
const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {

      setNav(!nav);
    }

  return (
      <div className={nav ? 'fixed overflow-hidden left-0 top-0 backdrop-blur-lg w-full h-screen text-dark z-50' : ''}>

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
        className="absolute top-0 left-full w-12 -translate-x-2 h-full border-r border-neutral border-dashed cursor-pointer transition hover:bg-white dark:hover:bg-blacks hover:border-solid hover:-translate-x-0.5 ease-out duration-500">
            <div className={nav ? 'ease-in duration-500' : ''}>

                <div className=" h-screen text-base text-blue dark:text-yellow"> 
                   <div className="h-1/3 flex items-center pl-2 justify-center">+</div>
                   <div className="h-1/3 flex items-center pl-2 justify-center">+</div>
                   <div className="h-1/3 flex items-center pl-2 justify-center">+</div>
                 
                 </div>
            




              </div></div>

        </div>
        </div>                
 
      
  );
};

export default Navbar;
