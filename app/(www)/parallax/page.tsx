import { getProjects } from "@/sanity/lib/utils";

import { Suspense } from "react";
import LoadingProjectCard from "../components/Loading/LoadingProjectCard";
import ParalaxImages from "../components/Projects/ParalaxImages";

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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {entries.map((project, index) => (
          <Suspense key={project._id} fallback={<LoadingProjectCard />}>
            <ParalaxImages project={project} index={index} />
          </Suspense>
        ))}
      </div>
    </div>
  );
}
