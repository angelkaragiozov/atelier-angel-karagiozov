import React from "react";
import Link from "next/link";
import { getTags } from "@/sanity/lib/utils";

interface Tag {
  name: string;
  slug: { current: string };
  _id: string;
  projectCount?: number;
}

export default async function Tags() {
  const tags: Tag[] = await getTags();
  return (
    <div className="text-xs  text-blue dark:text-yellow">
      {tags?.length > 0 &&
        tags?.map((tag) => (
          <Link key={tag?._id} href={`/d/tags/${tag.slug.current}`}>
            <span className=" flex lowercase">
              #
              <p className="hover:underline underline-offset-2 decoration-dotted">
                {tag.name}
              </p>
              &nbsp;({tag?.projectCount})
            </span>
          </Link>
        ))}
    </div>
  );
}
