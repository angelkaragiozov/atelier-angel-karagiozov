import React from "react";
import { getTags, Tag } from "@/sanity/lib/utils";
import Link from "next/link";
import ThemeSwitch from "../components/UI/ThemeSwitch";
import Line from "../components/Motion/Line";

export const revalidate = 60;

const page = async () => {
  const tags: Tag[] = await getTags();
  console.log(tags, "tags");

  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="fadein-animation mx-4 md:ml-14 md:mr-8 3xl:mx-auto 3xl:max-w-screen-2xl">
      <div className="absolute top-28 left-1/2 -translate-x-1/2 z-20">
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
          <p className="text-gray dark:text-dark text-xs">Tags</p>
        </div>
      </div>
      <div className="relative">
        <div className="mt-32 md:mt-20">
          <pre>
            {` _____ _____ _____ _____ 
|_   _|  _  |   __|   __|
  | | |     |  |  |__   |
  |_| |__|__|_____|_____|
`}
          </pre>
        </div>

        <div className="absolute right-0 bottom-0">
          <ThemeSwitch />
        </div>
        <Line />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tags?.length > 0 &&
          tags?.map((tag) => (
            <Link key={tag?._id} href={`/m/tags/${tag.slug.current}`}>
              <div className="h-10 hover:text-dark dark:text-gray text-center text-base p-2 border border-dotted border-dark dark:border-gray hover:dark:bg-blacks  hover:bg-white bg-light dark:bg-black dark:hover:bg-blacks transition-all ease-in-out duration-1000">
                #{tag.name} ({tag?.projectCount})
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default page;
