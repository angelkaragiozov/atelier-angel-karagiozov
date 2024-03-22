"use client";

import { FC } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/app/(www)/utils/Icons";
import Tooltip from "../UI/Tooltip";

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
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "12";

  return (
    <div className="my-4 border border-dark dark:border-gray border-dotted p-4">
      <div className="flex items-center justify-between">
        <Tooltip text="Previous_Page" disabled={!hasPrevPage}>
          <Link
            href={
              hasPrevPage
                ? `/d/projects/?page=${Number(page) - 1}&per_page=${per_page}`
                : ""
            }
          >
            <div
              className={`rotate-180 border text-center border-dotted border-dark dark:border-gray text-2xl hover:border-solid bg-light dark:bg-black hover:bg-white dark:hover:bg-blacks px-4 py-4 transition-all ease-in-out duration-1000 ${!hasPrevPage ? "opacity-30 cursor-not-allowed" : ""}`}
              aria-disabled={!hasPrevPage}
              aria-label="Previous Page"
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
          <Link
            href={
              hasNextPage
                ? `/d/projects/?page=${Number(page) + 1}&per_page=${per_page}`
                : ""
            }
          >
            <div
              className={`border text-center border-dotted  border-dark dark:border-gray text-2xl hover:border-solid bg-light dark:bg-black hover:bg-white dark:hover:bg-blacks px-4 py-4 transition-all ease-in-out duration-1000 ${!hasNextPage ? "opacity-30 cursor-not-allowed" : ""}`}
              aria-disabled={!hasNextPage}
              aria-label="Next Page"
            >
              <div className="w-3 h-3">
                <Nav />
              </div>
            </div>
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default PaginationControls;
