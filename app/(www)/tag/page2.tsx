
import { Tag } from "@/app/(www)/utils/interface";
import { client } from "@/sanity/lib/client";
import { tag } from "@/sanity/schemas/tag";
import Link from "next/link";
import React from "react";


async function getTags() 
{
  const query = `
  *[_type == "tag"] {
    name,
    slug,
    _id,
    "projectCount": count(*[_type == "project" && references("tags", ^._id)])
  }
  `;
  const tags = client.fetch(query);
  return tags;
}

export const revalidate = 60;

const page = async () => {
  const tags: Tag[] = await getTags();
  console.log(tag, "tags");
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
