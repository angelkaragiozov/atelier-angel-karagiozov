import React, { Suspense } from "react";
import { getProjects } from "@/sanity/lib/utils";
import Loader from "./components/Graph/Loader";
import PaginationList from "./components/Projects/PaginationList";
import LoadingProjectList from "./components/Loading/LoadingProjectList";
import LoaderWeather from "./components/Weather/LoaderWeather";
import LoadingSimple from "./components/Loading/LoadingSimple";
import ListComponent from "./components/Projects/ListComponent";
import ThemeSwitch from "./components/UI/ThemeSwitch";
import TagsAll from "./components/UI/TagsAll";

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
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <>
      <div className="mx-4 md:ml-14 md:mr-8 3xl:mx-auto 3xl:max-w-screen-2xl">
        <div className="absolute top-28 left-1/2 -translate-x-1/2">
          <div className="flex">
            <p className="text-xs">Desktop</p>
          </div>
        </div>
        <div className="relative">
          <div className="mt-32 md:mt-20">
            <pre>
              {` _ _ _ _____ _____ _____
| | | |     | __  |  |  |  
| | | |  |  |    -|    -|
|_____|_____|__|__|__|__|`}
            </pre>
          </div>

          <div className="absolute right-0 bottom-0">
            <ThemeSwitch />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {entries.map((project, index) => (
            <Suspense key={project._id} fallback={<LoadingProjectList />}>
              <ListComponent project={{ ...project, index }} />
            </Suspense>
          ))}
        </div>

        <PaginationList
          hasNextPage={end < projects.length}
          hasPrevPage={start > 0}
          totalProjects={projects.length}
        />

        <TagsAll />

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
        </div>

        {/* Weather */}

        <div className="mt-6">
          <LoaderWeather />
        </div>

        <div className="mt-10"></div>
      </div>
    </>
  );
}
