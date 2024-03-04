import { getProjects } from "@/sanity/lib/utils";
import CardComponent from "../components/Projects/CardComponent";
import { Suspense } from 'react';
import Link from "next/link";
import { Logo } from "../utils/Icons";
import Tags from "../components/UI/Tags";
import PaginationCard from "../components/Projects/PaginationCard";
import ThemeSwitch from "../components/UI/ThemeSwitch";

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
    <div className="flex flex-row w-full justify-center"><Link href="/" className="hover:underline underline-offset-2 decoration-dotted"><p className="text-xs text-neutral mb-4">Index</p></Link>
    <span className="text-gray dark:text-dark">&nbsp;|&nbsp;</span>
         <p className="text-gray dark:text-dark">
           Projects
         </p></div>

    <div className="flex flex-row justify-between w-full mt-0 md:-mt-20">

    <pre className='text-2xs  text-gray dark:text-dark'>
{` _____ _____ _____    __ _____ _____ _____ _____ 
|  _  | __  |     |__|  |   __|     |_   _|   __|
|   __|    -|  |  |  |  |   __|   --| | | |__   |
|__|  |__|__|_____|_____|_____|_____| |_| |_____|`}
    </pre>

    <div className="mt-auto"><ThemeSwitch /></div>
   </div>
    

          <div className="mt-2 flex flex-col lg:flex-col w-full border-t-[3px] border-gray dark:border-dark border-double pt-4"></div>
          
    <div className='mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center'>

             
            <Suspense key={`page-${searchParams.page}`} fallback={<div>Loading...</div>}>
               {entries.map((project) => <CardComponent key={project._id} project={project} />)}
            </Suspense>

     </div>

    <div className="mt-8 border border-gray dark:border-dark border-dotted p-4">
            <PaginationCard
                  hasNextPage={end < projects.length}
                  hasPrevPage={start > 0}
                  totalProjects={projects.length}
                />
     </div>           

<div className="flex flex-col lg:flex-row w-full mt-4 border mb-2 border-gray border-dotted  hover:border-solid  dark:border-dark">
         
        <pre className='text-2xs text-gray dark:text-dark p-4 pt-0 '>{`
 _____ _____ _____ _____ 
|_   _|  _  |   __|   __|
  | | |     |  |  |__   |
  |_| |__|__|_____|_____|`}
          </pre>

          <div className="p-2 pl-4 w-full border-l border-dotted border-gray dark:border-dark hover:dark:bg-blacks  hover:bg-white bg-light dark:bg-black dark:hover:bg-blacks h-30 transition-all ease-in-out duration-1000">
            <Tags />
          </div>
        </div>
        <div className="border-b-[3px] border-gray dark:border-dark border-double mb-4">
        </div>

    </div>
  )
}
