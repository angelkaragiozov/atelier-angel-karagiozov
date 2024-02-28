import React from 'react'
import Image from "next/image";
import { urlForImage } from '@/sanity/lib/image';
import Link from 'next/link';
import { Project } from '@/sanity/lib/utils';




const CardComponent = async ({ project }: { project: Project }) => {

  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  return (
    <div key={project._id}>
      <Link href={`/projects/${project?.slug?.current}`}>
        <div className="flex justify-between h-10 border border-blue">
          <div className="text-[18px] text-blue dark:text-yellow font-pixel lowercase w-20">
            {project?.title}
          </div>
          <p className={`my-2 text-2xs text-gray dark:text-dark`}>
            {new Date(project?.publishedAt).toDateString()}
          </p>
        </div>
        <Image
          src={urlForImage(project.cover).url()}
          width={500}
          height={200}
          alt="projects"
        />
        <p className="text-neutral text-2xs">{project?.excerpt}</p>
      </Link>
    </div>
  );
};

export default CardComponent
