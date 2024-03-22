import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <p className="mt-40 text-center text-neutral text-base">
        404 - Project Not Found
      </p>
      <Link href="/projects">
        <p className="mt-10 text-center text-neutral text-xs underline underline-offset-4 decoration-dotted hover:decoration-solid hover:text-dark dark:hover:text-gray">
          Return to All Projects
        </p>
      </Link>
    </>
  );
};

export default NotFound;
