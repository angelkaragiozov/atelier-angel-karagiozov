import React, { Suspense } from "react";
import { Project, Params } from "@/sanity/lib/utils";
import { getProjectsByTag } from "@/sanity/lib/utils";
import CardComponent from "../../components/Projects/CardComponent";
import Link from "next/link";
import ThemeSwitch from "../../components/UI/ThemeSwitch";
import { Logo } from "../../utils/Icons";
import LoadingProjectCard from "../../components/Loading/LoadingProjectCard";

export const revalidate = 60;

const page = async ({ params }: Params) => {
  const project: Array<Project> = await getProjectsByTag(params.slug);
  console.log(project, "projects by tag");
  return (
    <div className="mx-4 md:ml-14 md:mr-8">
      <div className="w-20 h-20 mx-auto mt-6 mb-4 animate-spin-slow transition-all ease-in-out duration-1000">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="flex flex-row w-full justify-center">
        <Link
          href="/"
          className="hover:underline underline-offset-2 decoration-dotted"
        >
          <p className="text-xs text-neutral mb-1 lg:mb-4 ">Index</p>
        </Link>
        <span className="text-gray dark:text-dark">&nbsp;|&nbsp;</span>
        <Link
          href="/tags"
          className="hover:underline underline-offset-2 decoration-dotted"
        >
          <p className="text-xs text-neutral mb-1 lg:mb-4 ">Tags</p>
        </Link>
        <span className="text-gray dark:text-dark">&nbsp;|&nbsp;</span>
        <p className="text-gray dark:text-dark"> #{params?.slug}</p>
      </div>

      <div className="flex flex-row justify-between w-full mt-0 lg:-mt-20">
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

      <h2 className="text-center text-xl">
        <div> #{params?.slug}</div>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
        {project?.length > 0 &&
          project?.map((project) => (
            <Suspense key={project._id} fallback={<LoadingProjectCard />}>
              <CardComponent key={project?._id} project={project} />
            </Suspense>
          ))}
      </div>
    </div>
  );
};

export default page;
