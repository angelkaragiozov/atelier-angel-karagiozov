"use client";

import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Tooltip from "../UI/Tooltip";
import { Nav } from "../../utils/Icons";
import Link from "next/link";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalProjects: number;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  totalProjects,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "12";

  return (
    <div className="flex items-center justify-between">
      <Tooltip text="Previous_Page" disabled={!hasPrevPage}>
        <Link href={`projects/?page=${Number(page) - 1}&per_page=${per_page}`}>
          <div
            className={`rotate-180 border text-center border-dotted border-neutral text-2xl hover:border-solid bg-light dark:bg-black hover:bg-white dark:hover:bg-blacks px-4 py-4 transition-all ease-in-out duration-1000 ${!hasPrevPage ? "opacity-30 cursor-not-allowed" : ""}`}
          >
            <div className="w-3 h-3">
              <Nav />
            </div>
          </div>
        </Link>
      </Tooltip>

      <div>
        {page} / {Math.ceil(totalProjects / Number(per_page))}
      </div>

      <Tooltip text="Next_Page" disabled={!hasNextPage}>
        <button
          className={`border text-center border-dotted border-neutral text-2xl hover:border-solid bg-light dark:bg-black hover:bg-white dark:hover:bg-blacks py-4 px-4 transition-all ease-in-out duration-1000 ${!hasNextPage ? "opacity-30 cursor-not-allowed" : ""}`}
          disabled={!hasNextPage}
          onClick={() => {
            router.push(
              `projects/?page=${Number(page) + 1}&per_page=${per_page}`
            );
          }}
        >
          <div className="w-3 h-3">
            <Nav />
          </div>
        </button>
      </Tooltip>
    </div>
  );
};

export default PaginationControls;
