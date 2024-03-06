"use client";

import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "12";

  return (
    <div className="flex w-fill items-center justify-between p-4 mb-4 border border-dotted border-neutral">
      <Tooltip text="Previous Page" disabled={!hasPrevPage}>
        <button
          className={`border text-center border-dotted border-neutral text-2xl hover:border-solid bg-light dark:bg-black text-blue dark:text-yellow hover:bg-white dark:hover:bg-blacks py-1.5 px-5 transition-all ease-in-out duration-1000 ${!hasPrevPage ? "opacity-30 cursor-not-allowed" : ""}`}
          disabled={!hasPrevPage}
          onClick={() => {
            router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`);
          }}
        >
          &lt;
        </button>
      </Tooltip>
      <div>
        {page} / {Math.ceil(totalProjects / Number(per_page))}
      </div>

      <Tooltip text="Next Page" disabled={!hasNextPage}>
        <button
          className={`border text-center border-dotted border-neutral text-2xl hover:border-solid bg-light dark:bg-black text-blue dark:text-yellow hover:bg-white dark:hover:bg-blacks py-1.5 px-5 transition-all ease-in-out duration-1000 ${!hasNextPage ? "opacity-30 cursor-not-allowed" : ""}`}
          disabled={!hasNextPage}
          onClick={() => {
            router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`);
          }}
        >
          &gt;
        </button>
      </Tooltip>
    </div>
  );
};

export default PaginationControls;
