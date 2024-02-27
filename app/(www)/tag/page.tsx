import React from "react";
import { getTags, Tag } from "@/sanity/lib/utils";
import Link from "next/link";


export const revalidate = 60;

const page = async () => {
  const tags: Tag[] = await getTags();
  console.log(tags, "tags");
  return (
    <div>
      <div>
        {tags?.length > 0 &&
          tags?.map((tag) => (
            <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
              <div className="mb-2 p-2 text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 hover:text-purple-500">
                #{tag.name} ({tag?.projectCount})
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default page;
