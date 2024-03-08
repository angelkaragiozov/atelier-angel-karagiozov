import React from "react";
import { getTags, Tag } from "@/sanity/lib/utils";
import Link from "next/link";
import ThemeSwitch from "../components/UI/ThemeSwitch";
import { Logo } from "../utils/Icons";

export const revalidate = 60;

const page = async () => {
  const tags: Tag[] = await getTags();
  console.log(tags, "tags");
  return (
    <div className="mx-4 md:ml-14 md:mr-8">
      <div className="w-20 h-20 mx-auto mt-6 mb-4 animate-spin-slow transition-all ease-in-out duration-1000">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="flex flex-row w-full justify-center">
        <Link
          href="/"
          className="hover:underline underline-offset-2 decoration-dotted"
        >
          <p className="text-xs text-neutral mb-1 lg:mb-4 ">Index</p>
        </Link>
        <span className="text-gray dark:text-dark">&nbsp;|&nbsp;</span>
        <p className="text-gray dark:text-dark">Tags</p>
      </div>

      <div className="flex flex-row justify-between w-full mt-0 lg:-mt-20">
        <pre className="text-2xs">
          {`
 _____ _____ _____ _____ 
|_   _|  _  |   __|   __|
  | | |     |  |  |__   |
  |_| |__|__|_____|_____|
`}
        </pre>

        <div className="mt-auto -mb-2 -mr-1">
          <ThemeSwitch />
        </div>
      </div>

      <div className="mt-2 w-full border-t-[3px] border-neutral border-double pt-4"></div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tags?.length > 0 &&
          tags?.map((tag) => (
            <Link key={tag?._id} href={`/tags/${tag.slug.current}`}>
              <div className="h-10 hover:text-dark dark:text-gray text-center text-base p-2 border border-dotted border-neutral hover:dark:bg-blacks  hover:bg-white bg-light dark:bg-black dark:hover:bg-blacks h-30 transition-all ease-in-out duration-1000">
                #{tag.name} ({tag?.projectCount})
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default page;