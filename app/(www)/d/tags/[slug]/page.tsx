import React, { Suspense } from "react";
import { Project, Params } from "@/sanity/lib/utils";
import { getProjectsByTag } from "@/sanity/lib/utils";
import CardComponent from "../../components/Projects/CardComponent";
import Link from "next/link";
import LoadingProjectCard from "../../components/Loading/LoadingProjectCard";
import Line from "../../components/Motion/Line";
import PlayInView from "../../components/Motion/PlayInView";
import ThemeSwitch from "../../components/UI/ThemeSwitch";
import Tags from "../../components/UI/Tags";

export const revalidate = 60;

const page = async ({ params }: Params) => {
  const project: Array<Project> = await getProjectsByTag(params.slug);
  console.log(project, "projects by tag");

  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="fadein-animation mx-4 md:ml-14 md:mr-8 3xl:mx-auto 3xl:max-w-screen-2xl">
      <div className="absolute top-28 left-1/2 -translate-x-1/2 z-20">
        <div className="flex">
          <Link
            href="/"
            className="hover:underline underline-offset-2 decoration-dotted"
          >
            <p className="text-xs">Index</p>
          </Link>
          <span className="text-gray dark:text-dark text-xs">
            &nbsp;|&nbsp;
          </span>
          <Link
            href="/d/tags"
            className="hover:underline underline-offset-2 decoration-dotted"
          >
            <p className="text-xs">Tags</p>
          </Link>
          <span className="text-gray dark:text-dark text-xs">
            &nbsp;|&nbsp;
          </span>
          <p className="text-gray dark:text-dark text-xs">{params?.slug}</p>
        </div>
      </div>
      <div className="relative">
        <div className="mt-[130px] md:mt-[68px]">
          <pre>
            {`   _ _                        
 _| | |_    _____ _____ _____ 
|_     _|  |_   _|  _  |   __|
|_     _|    | | |     |  |  |
  |_|_|      |_| |__|__|_____|
`}
          </pre>
        </div>

        <div className="absolute right-0 bottom-0">
          <ThemeSwitch />
        </div>
        <Line />
      </div>

      <div className=" text-center text-4xl border border-neutral border-dotted py-2 mb-4">
        <span className="md:-ml-8 3xl:ml-0 align-middle"># {params?.slug}</span>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
        {project?.length > 0 &&
          project?.map((project) => (
            <Suspense key={project._id} fallback={<LoadingProjectCard />}>
              <CardComponent key={project?._id} project={project} />
            </Suspense>
          ))}
      </div>
      <PlayInView>
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
      </PlayInView>
      <div className="mt-4">
        <Line />
      </div>
    </div>
  );
};

export default page;
