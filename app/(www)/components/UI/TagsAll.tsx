import React from "react";
import Link from "next/link";
import Tags from "./Tags";
import TransitionLink from "./TransitionLink";

const TagsAll = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full my-4 border border-dark dark:border-gray border-dotted hover:border-solid">
      <Link href="/tags">
        <div className="flex flex-col w-full border-b  border-dark dark:border-gray border-dotted lg:border-none lg:w-52 p-5 hover:dark:bg-blacks hover:bg-white transition-all ease-in-out duration-1000">
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

      <div className="p-2 pl-4 w-full lg:border-l border-dotted  border-dark dark:border-gray hover:dark:bg-blacks hover:bg-white bg-light dark:bg-black dark:hover:bg-blacks h-30 transition-all ease-in-out duration-1000">
        <Tags />

        <TransitionLink href="/tags" label="Work" />
      </div>
    </div>
  );
};

export default TagsAll;
