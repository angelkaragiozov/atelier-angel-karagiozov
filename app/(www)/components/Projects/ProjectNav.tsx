"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import Tooltip from "../UI/Tooltip";
import { Nav } from "../../utils/Icons";
import Link from "next/link";

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
  const router = useRouter();

  return (
    <div className="flex flex-row justify-between">
      <Tooltip text="Previous_Project" disabled={!hasPrevProject}>
        <button
          className={`rotate-180 border text-center border-dotted border-neutral text-2xl hover:border-solid bg-light dark:bg-black text-blue dark:text-yellow hover:bg-white dark:hover:bg-blacks py-4 px-4 transition-all ease-in-out duration-1000 ${!hasPrevProject ? "opacity-30 cursor-not-allowed" : ""}`}
          disabled={!hasPrevProject}
          onClick={() => {
            router.push(`/projects/${prevProjectSlug}`);
          }}
        >
          <div className="w-3 h-3">
            <Nav />
          </div>
        </button>{" "}
      </Tooltip>
      <Tooltip text="Next_Project" disabled={!hasNextProject}>
        <Link href={`/projects/${nextProjectSlug}`}>
          <div
            className={`border text-center border-dotted border-neutral text-2xl hover:border-solid bg-light dark:bg-black text-blue dark:text-yellow hover:bg-white dark:hover:bg-blacks py-4 px-4 transition-all ease-in-out duration-1000 ${!hasNextProject ? "opacity-30 cursor-not-allowed" : ""}`}
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
