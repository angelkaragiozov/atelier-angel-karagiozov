import React, { Suspense } from "react";
import { Project, Params } from "@/sanity/lib/utils";
import { getProjectsByTag } from "@/sanity/lib/utils";
import CardComponent from "../../components/Projects/CardComponent";
import Link from "next/link";
import LoadingProjectCard from "../../components/Loading/LoadingProjectCard";
import ThemeSwitch from "../../components/UI/ThemeSwitch";
import TagsAll from "../../components/UI/TagsAll";

export const revalidate = 60;

const page = async ({ params }: Params) => {
  const project: Array<Project> = await getProjectsByTag(params.slug);
  console.log(project, "projects by tag");

  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="mx-4 md:ml-14 md:mr-8 3xl:mx-auto 3xl:max-w-screen-2xl">
      <div className="absolute top-28 left-1/2 -translate-x-1/2">
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
            href="/tags"
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
        {/* <Line /> */}
      </div>

      <div className=" text-center text-4xl border border-dark dark:border-gray border-dotted py-2 mb-4">
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

      <TagsAll />

      <div className="mt-4">{/* <Line /> */}</div>
    </div>
  );
};

export default page;
