import { getProjects } from "@/sanity/lib/utils";
import CardComponent from "../components/Projects/CardComponent";
import { Suspense } from "react";
import Link from "next/link";
import PaginationCard from "../components/Projects/PaginationCard";
import LoadingProjectCard from "../components/Loading/LoadingProjectCard";
import Line from "../components/Motion/Line";
import TagsAll from "../components/UI/TagsAll";
import ThemeSwitch from "../components/UI/ThemeSwitch";

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
          <p className="text-gray dark:text-dark text-xs">Projects</p>
        </div>
      </div>
      <div className="relative">
        <div className="mt-32 lg:mt-20">
          <pre>
            {` _____ _____ _____    __ _____ _____ _____ _____ 
|  _  | __  |     |__|  |   __|     |_   _|   __|
|   __|    -|  |  |  |  |   __|   --| | | |__   |
|__|  |__|__|_____|_____|_____|_____| |_| |_____|`}
          </pre>
        </div>

        <div className="hidden sm:block absolute right-0 bottom-0">
          <ThemeSwitch />
        </div>
        <Line />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {entries.map((project, index) => (
          <Suspense key={project._id} fallback={<LoadingProjectCard />}>
            <CardComponent project={{ ...project, index }} />
          </Suspense>
        ))}
      </div>

      <PaginationCard
        hasNextPage={end < projects.length}
        hasPrevPage={start > 0}
        totalProjects={projects.length}
      />

      <TagsAll />

      <div className="mt-4">
        <Line />
      </div>
    </div>
  );
}
