import React, { Suspense } from "react";
import { Logo } from "./utils/Icons";
import Loading from "./components/Loading/Loading";
import Tags from "./components/UI/Tags";
import { getProjects } from "@/sanity/lib/utils";
import Pagination from "./components/Projects/Pagination";
import ListComponent from "./components/Projects/ListComponent";


export default async function Home(
  {
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = searchParams['page'] ?? '1'
  const per_page = searchParams['per_page'] ?? '9'

  const projects = await getProjects();

  // calculate start and end index for slicing
  const start = (Number(page) - 1) * Number(per_page) // 0, 5, 10 ...
  const end = start + Number(per_page) // 5, 10, 15 ...

  // slice the projects array to get the entries for the current page
  const entries = projects.slice(start, end)

    return (

      <div className="ml-14 mr-8">
        <div className="fadein-animation">
        <div className="w-24 h-24 mx-auto mt-8 mb-6 animate-spin-slow transition-all ease-in-out duration-1000">
            <Logo />
        </div>
        </div>
        <div><p className="text-xs text-neutral text-center mb-2">Index</p></div>

        <pre className='text-2xs text-gray dark:text-dark mt-0 md:-mt-20'>{`                        
 _ _ _ _____ _____ _____ 
| | | |     | __  |  |  |
| | | |  |  |    -|    -|
|_____|_____|__|__|__|__|
        `}
        </pre>
        
        <div className=" top-0 left-0 flex flex-col lg:flex-col xl:space-x-4 xl:flex-row w-full h-full border-t-[3px] border-gray dark:border-dark border-double pt-2 ">
          <div className="flex flex-col w-full h-screen overflow-auto scroll-smooth xl:w-1/3 border border-gray border-dotted hover:border-solid dark:border-dark">

        
          <Suspense key={`page-${searchParams.page}`} fallback={<div>Loading...</div>}>
               {entries.map((project) => <ListComponent key={project._id} project={project} />)}
            </Suspense>
        
        <div className="mt-auto">
        <Pagination
          hasNextPage={end < projects.length}
          hasPrevPage={start > 0}
          totalProjects={projects.length}
        />
        </div>

       
  
          </div>

          <div className=" hidden w-full lg:block  mt-4 xl:w-2/3 xl:mt-0 cursor-move">
              <Suspense fallback={<div><Loading/></div>} >
                <GraphForce />
              </Suspense> 

          </div>    
        </div>
        <div className="flex flex-col lg:flex-row pl-4 w-full mt-4 border mb-2 border-gray border-dotted  hover:border-solid  dark:border-dark">
          <pre className='text-2xs text-gray dark:text-dark'>{`                                             
 _____ _____ _____ _____ 
|_   _|  _  |   __|   __|
  | | |     |  |  |__   |
  |_| |__|__|_____|_____|
                    `}
          </pre>

          <div className="p-2 pl-4 w-full border-l border-dotted border-gray dark:border-dark hover:dark:bg-blacks  hover:bg-white bg-light dark:bg-black dark:hover:bg-blacks h-30 transition-all ease-in-out duration-1000">
            <Tags />
          </div>
        </div>
        <div className="border-b-[3px] border-gray dark:border-dark border-double mb-4">
        </div>
      </div>

  );
}
const GraphForce = React.lazy(() => import('./components/Graph/GraphForce'));


