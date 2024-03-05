import React from 'react'

const LoadingProjectCard = () => {
  return (
         <div className='border border-dotted border-gray dark:border-dark w-full p-2'>
             <div className="text-xl text-gray/50 dark:text-dark lowercase h-8">------</div>
             <div className="w-full bg-gray border border-dotted border-gray dark:border-dark dark:bg-dark/50 aspect-video aspect-ratio-16/9"></div>
             <div className='h-20 mt-2'> <p className='animate-bounce text-sm text-gray dark:text-dark'>Loading...</p></div>
             </div>
  )
}

export default LoadingProjectCard