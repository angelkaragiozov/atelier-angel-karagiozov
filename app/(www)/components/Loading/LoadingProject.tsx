import React from 'react'
import Link from 'next/link';
import { Logo } from '../../utils/Icons';

const LoadingProject = () => {
  return (
    <div className="ml-14 mr-8">
    <div className=" w-24 h-24 mx-auto mt-8 animate-spin-slow transition-all ease-in-out duration-1000">
      <Link href="/">
        <Logo />
      </Link>
    </div>

     <pre className='text-2xs text-gray dark:text-dark mt-0 lg:-mt-20'>{`                                                                         
 _____ _____ _____    __ _____ _____ _____ 
|  _  | __  |     |__|  |   __|     |_   _|
|   __|    -|  |  |  |  |   __|   --| | | 
|__|  |__|__|_____|_____|_____|_____| |_|                                                  
    `}
     </pre>
    <div className=" top-0 left-0 w-full h-screen border-t-[3px] border-gray dark:border-dark border-double pt-2 ">

    </div>

    <div className="border-b-[3px] border-gray dark:border-dark border-double mb-4">
    <p className='animate-bounce text-xs text-gray dark:text-dark ml-4 mt-4'> * Loading ...</p>
    </div>
  </div>

  )
}

export default LoadingProject