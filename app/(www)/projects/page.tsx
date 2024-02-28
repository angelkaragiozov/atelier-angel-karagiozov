import { getProjects } from "@/sanity/lib/utils";
import PaginationControls from "../components/Projects/PaginationControls";
import CardComponent from "../components/Projects/CardComponent";
import { Suspense } from 'react';
import Link from "next/link";
import { Logo } from "../utils/Icons";
import Tags from "../components/UI/Tags";

export default async function Home(
  {
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = searchParams['page'] ?? '1'
  const per_page = searchParams['per_page'] ?? '5'

  const projects = await getProjects();

  // calculate start and end index for slicing
  const start = (Number(page) - 1) * Number(per_page) // 0, 5, 10 ...
  const end = start + Number(per_page) // 5, 10, 15 ...

  // slice the projects array to get the entries for the current page
  const entries = projects.slice(start, end)

  return (
    <div className="ml-14 mr-8">
    <div className=" w-24 h-24 mx-auto my-8 animate-spin-slow transition-all ease-in-out duration-1000">
      <Link href="/">
        <Logo />
      </Link>
    </div>
    <div className="flex flex-row w-full justify-center text-xs text-neutral"> 
        <Link href="/" className="hover:underline underline-offset-2 decoration-dotted">
            Index
          </Link>
            <span className="text-gray dark:text-dark">&nbsp;|&nbsp;Projects</span>
          </div>

          <pre className='text-2xs text-gray dark:text-dark mt-0 lg:-mt-20'>{`                                                                         
 _____ _____ _____    __ _____ _____ _____ _____ 
|  _  | __  |     |__|  |   __|     |_   _|   __|
|   __|    -|  |  |  |  |   __|   --| | | |__   |
|__|  |__|__|_____|_____|_____|_____| |_| |_____|                                                 
    `}
     </pre>

          <div className=" top-0 left-0 w-full h-2 border-b-[3px] border-gray dark:border-dark border-double "></div>
          
    <div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center'>

             
            <Suspense key={`page-${searchParams.page}`} fallback={<div>Loading...</div>}>
               {entries.map((project) => <CardComponent key={project._id} project={project} />)}
            </Suspense>

     </div>

    <div className="mt-8">
            <PaginationControls
                  hasNextPage={end < projects.length}
                  hasPrevPage={start > 0}
                  totalProjects={projects.length}
                />
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
  )
}
