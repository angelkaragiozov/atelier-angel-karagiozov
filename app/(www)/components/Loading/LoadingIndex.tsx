import React from 'react'
import Link from 'next/link'
import { Logo } from '../../utils/Icons'

const LoadingIndex = () => {
  return (
    <div className="w-full h-screen">

<div className=" w-24 h-24 mx-auto mt-8 animate-spin-slow transition-all ease-in-out duration-1000">
          <Link href="/">
            <Logo />
          </Link>
        </div>

    <pre className='text-2xs text-gray dark:text-dark mt-0 md:-mt-20'>{`                        
 _ _ _ _____ _____ _____ 
| | | |     | __  |  |  |
| | | |  |  |    -|    -|
|_____|_____|__|__|__|__|
    `}
    </pre>
    <div className=" top-0 left-0 flex flex-col lg:flex-col xl:space-x-4 xl:flex-row w-full h-full border-t-[3px] border-gray dark:border-dark border-double pt-2 ">
      <div className="w-full xl:w-1/3 border border-gray border-dotted dark:border-dark">
        <p className='animate-bounce text-xs text-gray dark:text-dark ml-4 mt-4'> * Loading Projects ...</p>
      </div>

      <div className=" hidden w-full lg:block mt-4 xl:w-2/3 xl:mt-0 border border-gray border-dashed dark:border-dark">
      
            <p className='animate-bounce text-xs text-gray dark:text-dark ml-4 mt-4'> * Loading Visual Graph ...</p>
      </div>    
    </div>

</div>
  )
}

export default LoadingIndex