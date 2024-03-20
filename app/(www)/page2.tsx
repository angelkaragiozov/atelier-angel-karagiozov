import React, { Suspense } from "react";
import Tags from "./components/UI/Tags";
import { getProjects } from "@/sanity/lib/utils";
import Link from "next/link";
import Loader from "./components/Graph/Loader";
import ThemeSwitch from "./components/UI/ThemeSwitch";
import PaginationList from "./components/Projects/PaginationList";
import LoadingProjectList from "./components/Loading/LoadingProjectList";
import LoaderWeather from "./components/Weather/LoaderWeather";
import LoadingSimple from "./components/Loading/LoadingSimple";
import ListComponent from "./components/Projects/ListComponent";
import Line from "./components/Motion/Line";
import ListComponentMobile from "./components/Projects/ListComponentMobile";
import LoadingListMobile from "./components/Loading/LoadingListMobile";
import PlayInView from "./components/Motion/PlayInView";
import { MotionDiv } from "./components/Motion/MotionDiv";
import LoadMotion from "./components/Motion/LoadMotion";

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

  // await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <>
      <div className="fadein-animation mx-4 md:ml-14 md:mr-8 3xl:mx-auto 3xl:max-w-screen-2xl">
        <div className="absolute top-28 left-1/2 -translate-x-1/2">
          <p className="text-xs">Index</p>
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
          <Line />
        </div>
        <div className="block md:hidden">
          <div className="grid gap-4 ">
            {entries.map((project, index) => (
              <Suspense key={project._id} fallback={<LoadingListMobile />}>
                <ListComponentMobile project={{ ...project, index }} />
              </Suspense>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {entries.map((project, index) => (
              <Suspense key={project._id} fallback={<LoadingProjectList />}>
                <ListComponent project={{ ...project, index }} />
              </Suspense>
            ))}
          </div>
        </div>
        <LoadMotion>
          <div className="mt-4">
            <PaginationList
              hasNextPage={end < projects.length}
              hasPrevPage={start > 0}
              totalProjects={projects.length}
            />
          </div>
        </LoadMotion>

        <MotionDiv
          initial={{
            opacity: 0.2,
            y: 10,
            // scale: 0.9, // Initial scale for elastic effect
          }}
          animate={{
            opacity: 1,
            y: [10, 0],
            // scale: inView ? 1 : 0.9, // Return to normal scale
          }}
          transition={{
            delay: 1.5,
            duration: 1,
            ease: "linear",
            type: "spring", // Apply spring physics
            stiffness: 200, // Adjust stiffness as needed
          }}
        >
          <PlayInView>
            <div className="flex flex-col lg:flex-row w-full mb-4 border border-neutral border-dotted hover:border-solid">
              <Link href="/tags">
                <div className="flex flex-col w-full border-b border-neutral border-dotted lg:border-none lg:w-52 p-5 hover:dark:bg-blacks hover:bg-white transition-all ease-in-out duration-1000">
                  <pre>
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

              <div className="p-2 pl-4 w-full lg:border-l border-dotted border-neutral hover:dark:bg-blacks hover:bg-white bg-light dark:bg-black dark:hover:bg-blacks h-30 transition-all ease-in-out duration-1000">
                <Tags />
              </div>
            </div>
          </PlayInView>
        </MotionDiv>

        <MotionDiv
          initial={{
            opacity: 0.2,
            y: 10,
            // scale: 0.9, // Initial scale for elastic effect
          }}
          animate={{
            opacity: 1,
            y: [10, 0],
            // scale: inView ? 1 : 0.9, // Return to normal scale
          }}
          transition={{
            delay: 2.5,
            duration: 1,
            ease: "linear",
            type: "spring", // Apply spring physics
            stiffness: 200, // Adjust stiffness as needed
          }}
        >
          <PlayInView>
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
          </PlayInView>
        </MotionDiv>
        {/* Weather */}
        <div className="mt-6">
          <LoaderWeather />
        </div>

        <div className="mt-10">
          <Line />
        </div>
      </div>
    </>
  );
}
