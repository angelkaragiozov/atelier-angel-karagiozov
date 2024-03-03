import React from 'react'
import Image from "next/image";
import { urlForImage } from '@/sanity/lib/image';
import Link from 'next/link';
import { Project } from '@/sanity/lib/utils';




const CardComponent = async ({ project }: { project: Project }) => {
 // await new Promise((resolve) => setTimeout(resolve, 1000));
  
  return (
    <div key={project._id} className=' border border-gray border-dotted hover:border-solid hover:bg-white dark:border-dark p-4 transition-all ease-in-out duration-1000'>
      <Link href={`/projects/${project?.slug?.current}`}>
        <div className="flex justify-between p-2 h-10">
          <div className="text-xl text-blue dark:text-yellow lowercase w-20">
            {project?.title}
          </div>
          <p className={`my-2 text-xs text-center text-gray dark:text-dark`}>
            {new Date(project?.publishedAt).toDateString()}
          </p>
        </div>
        <Image
          src={urlForImage(project.cover).url()}
          width={500}
          height={200}
          alt="projects"
        />
          <div className='h-20 mt-4'>
        <p className="text-neutral text-sm">{project?.excerpt}</p>


          {/* TAGS */}

            {project?.tags?.map((tag) => (
              <span key={tag?._id} className='mr-2 px-1 border text-xs border-gray border-dotted text-2xs text-neutral dark:text-neutral dark:border-dark lowercase'>#{tag?.name}</span>
            ))}
          </div>




      
      
      </Link>
    </div>
  );
};

export default CardComponent
