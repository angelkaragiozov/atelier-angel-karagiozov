import React, { Suspense } from "react";
import { Logo } from "./utils/Icons";
import Loading from "./components/Loading/Loading";
import Tags from "./components/UI/Tags";
import { getProjects } from "@/sanity/lib/utils";
import ListComponent from "./components/Projects/ListComponent";
import Link from "next/link";
import Loader from "./components/Graph/Loader";
import ThemeSwitch from "./components/UI/ThemeSwitch";
import PaginationList from "./components/Projects/PaginationList";
import LoadingProjectList from "./components/Loading/LoadingProjectList";


export default async function Home(
  {
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = searchParams['page'] ?? '1'
  const per_page = searchParams['per_page'] ?? '12'

  const projects = await getProjects();

  // calculate start and end index for slicing
  const start = (Number(page) - 1) * Number(per_page) // 0, 5, 10 ...
  const end = start + Number(per_page) // 5, 10, 15 ...

  // slice the projects array to get the entries for the current page
  const entries = projects.slice(start, end)

  await new Promise((resolve) => setTimeout(resolve, 2000));

    return (

      <div className="mx-8 md:ml-14 md:mr-8">
        <div className="fadein-animation">
        <div className="w-20 h-20 mx-auto mt-6 mb-4 animate-spin-slow transition-all ease-in-out duration-1000">
        <Link href="/">
            <Logo />
          </Link>
        </div>
        </div>
        <div><p className="text-xs text-center text-neutral mb-4">Index</p></div>

        <div className="flex flex-row justify-between w-full mt-0 md:-mt-20">

        <pre className='text-2xs  text-gray dark:text-dark'>
{` _ _ _ _____ _____ _____ 
| | | |     | __  |  |  |
| | | |  |  |    -|    -|
|_____|_____|__|__|__|__|`}
        </pre>
 
        <div className="mt-auto"><ThemeSwitch /></div>
       </div>
        
        <div className=" mt-2 flex flex-col lg:flex-col w-full border-t-[3px] border-gray dark:border-dark border-double pt-4 ">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* <Suspense key={`page-${searchParams.page}`} fallback={<LoadingProjectList />}>
                  {entries.map((project) => <ListComponent key={project._id} project={project} />)}
                </Suspense> */}

              {entries.map((project) => (
                  <Suspense key={project._id} fallback={<LoadingProjectList />}>
                    <ListComponent project={project} />
                  </Suspense>
                ))}

            </div>
        
        <div className="mt-4">
        <PaginationList
          hasNextPage={end < projects.length}
          hasPrevPage={start > 0}
          totalProjects={projects.length}
        />
        </div>

          <div className="w-full mt-4 xl:mt-0">
              <Suspense fallback={<div><Loading/></div>} >
                <Loader />
              </Suspense> 

              <div className="flex flex-col lg:flex-row w-full mt-4 border mb-2 border-gray border-dotted  hover:border-solid  dark:border-dark">
              <div className="border border-yellow w-44 pl-1 align-middle">
          <pre className='text-2xs text-gray dark:text-dark'>
{` _____ _____ _____ _____ 
|_   _|  _  |   __|   __|
  | | |     |  |  |__   |
  |_| |__|__|_____|_____|`}
          </pre>
          </div>

          <div className="p-2 pl-4 w-full border-l border-dotted border-gray dark:border-dark hover:dark:bg-blacks  hover:bg-white bg-light dark:bg-black dark:hover:bg-blacks h-30 transition-all ease-in-out duration-1000">
            <Tags />
          </div>
          
        </div>

          </div>    
        </div>

        <div className="border-b-[3px] border-gray dark:border-dark border-double mb-4">
        </div>
      </div>

  );
}


