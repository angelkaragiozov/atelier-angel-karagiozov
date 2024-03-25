"use client";

import { FC } from "react";
import Link from "next/link";
import { Nav } from "@/app/(www)/utils/Icons";
import Tooltip from "../UI/Tooltip";

interface ProjectNavProps {
  hasPrevProject: boolean;
  hasNextProject: boolean;
  prevProjectSlug: string;
  nextProjectSlug: string;
}

const ProjectNav: FC<ProjectNavProps> = ({
  hasPrevProject,
  hasNextProject,
  prevProjectSlug,
  nextProjectSlug,
}) => {
  // const router = useRouter();

  return (
    <div className="flex flex-row justify-between">
      <Tooltip text="Previous_Project" disabled={!hasPrevProject}>
        <Link href={hasPrevProject ? `/projects/${prevProjectSlug}` : ""}>
          <div
            className={`rotate-180 border text-center border-dotted  border-dark dark:border-gray text-2xl hover:border-solid bg-light dark:bg-black hover:bg-white dark:hover:bg-blacks py-4 px-4 transition-all ease-in-out duration-1000 ${!hasPrevProject ? "opacity-30 cursor-not-allowed" : ""}`}
            aria-disabled={!prevProjectSlug}
            aria-label="Previous Project"
          >
            <div className="w-3 h-3">
              <Nav />
            </div>
          </div>
        </Link>
      </Tooltip>
      <Tooltip text="Next_Project" disabled={!hasNextProject}>
        <Link href={hasNextProject ? `/projects/${nextProjectSlug}` : ""}>
          <div
            className={`border text-center border-dotted border-dark dark:border-gray text-2xl hover:border-solid bg-light dark:bg-black hover:bg-white dark:hover:bg-blacks py-4 px-4 transition-all ease-in-out duration-1000 ${!hasNextProject ? "opacity-30 cursor-not-allowed" : ""}`}
            aria-disabled={!nextProjectSlug}
            aria-label="Next Project"
          >
            <div className="w-3 h-3">
              <Nav />
            </div>
          </div>
        </Link>
      </Tooltip>
    </div>
  );
};

export default ProjectNav;
