import { Logo } from '../../utils/Icons'

const LoadingIndex = () => {
  return (
    <div>
    <div className="fadein-animation">
    <div className="w-20 h-20 mx-auto mt-6 mb-4 animate-spin-slow transition-all ease-in-out duration-1000">
        <Logo />
      </div>
      </div>
      <p className='animate-bounce text-xs text-center mb-4  text-gray dark:text-dark'>Loading...</p>

    <div className="flex flex-row justify-between w-full mt-0 md:-mt-20">

    <pre className='text-2xs  text-gray dark:text-dark'>
{` _ _ _ _____ _____ _____ 
| | | |     | __  |  |  |
| | | |  |  |    -|    -|
|_____|_____|__|__|__|__|`}
    </pre>
   </div>
    
    <div className=" mt-2 flex flex-col lg:flex-col w-full border-t-[3px] border-gray dark:border-dark border-double pt-4 ">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

             <div className='border border-dotted border-gray dark:border-dark w-full h-[88px]'></div>
             <div className='border border-dotted border-gray dark:border-dark w-full h-[88px]'></div>
             <div className='border border-dotted border-gray dark:border-dark w-full h-[88px]'></div>
             <div className='border border-dotted border-gray dark:border-dark w-full h-[88px]'></div>
             <div className='border border-dotted border-gray dark:border-dark w-full h-[88px]'></div>
             <div className='border border-dotted border-gray dark:border-dark w-full h-[88px]'></div>
             <div className='border border-dotted border-gray dark:border-dark w-full h-[88px]'></div>
             <div className='border border-dotted border-gray dark:border-dark w-full h-[88px]'></div>
             <div className='border border-dotted border-gray dark:border-dark w-full h-[88px]'></div>
             <div className='border border-dotted border-gray dark:border-dark w-full h-[88px]'></div>
             <div className='border border-dotted border-gray dark:border-dark w-full h-[88px]'></div>
             <div className='border border-dotted border-gray dark:border-dark w-full h-[88px]'></div>


          </div>

      </div>
      </div>
  )
}

export default LoadingIndex