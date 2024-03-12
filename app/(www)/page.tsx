import React, { Suspense } from "react";
import { Logo } from "./utils/Icons";
import Tags from "./components/UI/Tags";
import { getProjects } from "@/sanity/lib/utils";
import ListComponent from "./components/Projects/ListComponent";
import Link from "next/link";
import Loader from "./components/Graph/Loader";
import ThemeSwitch from "./components/UI/ThemeSwitch";
import PaginationList from "./components/Projects/PaginationList";
import LoadingProjectList from "./components/Loading/LoadingProjectList";
import LoaderWeather from "./components/Weather/LoaderWeather";
import LoadingSimple from "./components/Loading/LoadingSimple";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "12";

  const projects = await getProjects();

  // calculate start and end index for slicing
  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...

  // slice the projects array to get the entries for the current page
  const entries = projects.slice(start, end);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="fadein-animation mx-4 md:ml-14 md:mr-8 3xl:mx-auto 3xl:max-w-screen-2xl">
      <div className="w-20 h-20 mx-auto mt-6 mb-4 animate-spin-slow transition-all ease-in-out duration-1000">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div>
        <p className="text-xs text-center mb-4">Index</p>
      </div>

      <div className="flex flex-row justify-between w-full mt-0 md:-mt-20">
        <pre className="text-2xs">
          {` _ _ _ _____ _____ _____ 
| | | |     | __  |  |  |
| | | |  |  |    -|    -|
|_____|_____|__|__|__|__|`}
        </pre>

        <div className="mt-auto -mb-2 -mr-1">
          <ThemeSwitch />
        </div>
      </div>

      <div className=" mt-2 flex flex-col lg:flex-col w-full border-t-[3px] border-neutral border-double pt-4 ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
        <div className="flex flex-col lg:flex-row w-full mb-4 border border-neutral border-dotted  hover:border-solid">
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

        <div>
          <div className="hidden sm:block w-full">
            <Suspense
              fallback={
                <div>
                  <LoadingSimple />
                </div>
              }
            >
              <Loader />
            </Suspense>
          </div>

          {/* Weather */}
          <div className="mt-6">
            <LoaderWeather />
          </div>
        </div>
      </div>

      <div className="border-b-[3px] border-neutral border-double mt-2 mb-4"></div>
    </div>
  );
}
