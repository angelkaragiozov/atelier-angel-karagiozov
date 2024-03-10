import React, { Suspense } from "react";
import { Project, Params } from "@/sanity/lib/utils";
import { getProjectsByTag } from "@/sanity/lib/utils";
import CardComponent from "../../components/Projects/CardComponent";
import Link from "next/link";
import ThemeSwitch from "../../components/UI/ThemeSwitch";
import { Logo } from "../../utils/Icons";
import LoadingProjectCard from "../../components/Loading/LoadingProjectCard";
import Tags from "../../components/UI/Tags";

export const revalidate = 60;

const page = async ({ params }: Params) => {
  const project: Array<Project> = await getProjectsByTag(params.slug);
  console.log(project, "projects by tag");

  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="fadein-animation mx-4 md:ml-14 md:mr-8 3xl:mx-auto 3xl:max-w-screen-2xl">
      <div className="w-20 h-20 mx-auto mt-6 mb-4 animate-spin-slow transition-all ease-in-out duration-1000">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="flex flex-row w-full justify-center">
        <Link
          href="/"
          className="hover:underline underline-offset-2 decoration-dotted z-10"
        >
          <p className="text-xs text-neutral mb-1 lg:mb-4 ">Index</p>
        </Link>
        <span className="text-gray dark:text-dark">&nbsp;|&nbsp;</span>
        <Link
          href="/tags"
          className="hover:underline underline-offset-2 decoration-dotted z-10"
        >
          <p className="text-xs text-neutral mb-1 lg:mb-4 ">Tags</p>
        </Link>
        <span className="text-gray dark:text-dark">&nbsp;|&nbsp;</span>
        <p className="text-gray dark:text-dark"> #{params?.slug}</p>
      </div>

      <div className="flex flex-row justify-between w-full -mt-9 lg:-mt-28">
        <pre className="text-2xs">
          {`
   _ _                        
 _| | |_    _____ _____ _____ 
|_     _|  |_   _|  _  |   __|
|_     _|    | | |     |  |  |
  |_|_|      |_| |__|__|_____|
`}
        </pre>

        <div className="mt-auto -mb-2 -mr-1">
          <ThemeSwitch />
        </div>
      </div>
      <div className="mt-2 flex flex-col lg:flex-col w-full border-t-[3px] border-neutral border-double pt-4"></div>
      <h2 className="text-center text-2xl mb-4">
        <div> # {params?.slug}</div>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
        {project?.length > 0 &&
          project?.map((project) => (
            <Suspense key={project._id} fallback={<LoadingProjectCard />}>
              <CardComponent key={project?._id} project={project} />
            </Suspense>
          ))}
      </div>
      <div className="flex flex-col lg:flex-row w-full mt-4 border mb-2 border-neutral border-dotted  hover:border-solid">
        <Link href="/tags">
          <div className=" flex flex-col w-full border-b border-neutral border-dotted lg:border-none lg:w-52 p-5 hover:dark:bg-blacks hover:bg-white transition-all ease-in-out duration-1000">
            <pre className="text-2xs">
              {` _____ _____ _____ _____ 
|_   _|  _  |   __|   __|
  | | |     |  |  |__   |
  |_| |__|__|_____|_____|`}
            </pre>
            <p className="text-center md:text-right lg:text-center mt-2">
              all tags page
            </p>
          </div>
        </Link>

        <div className="p-2 pl-4 w-full lg:border-l border-dotted border-neutral hover:dark:bg-blacks  hover:bg-white bg-light dark:bg-black dark:hover:bg-blacks h-30 transition-all ease-in-out duration-1000">
          <Tags />
        </div>
      </div>
      <div className="my-4 w-full border-t-[3px] border-neutral border-double"></div>
    </div>
  );
};

export default page;
