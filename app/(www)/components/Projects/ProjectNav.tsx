'use client'

import { FC } from 'react'
import { useRouter } from 'next/navigation'
import Tooltip from '../UI/Tooltip';

interface ProjectNavProps {
    hasPrevProject: boolean
    hasNextProject: boolean
    prevProjectSlug: string
    nextProjectSlug: string
  }
  
  const ProjectNav: FC<ProjectNavProps> = (
    {
      hasPrevProject,
      hasNextProject,
      prevProjectSlug,
      nextProjectSlug,
    }
  ) => {
    const router = useRouter()
  
    return (
      <div className='flex gap-2 float-end'>
        <Tooltip text="Previous Project" disabled={!hasPrevProject}>
        <button
           className={`border text-center border-dotted border-gray text-2xl dark:border-dark hover:border-solid bg-light dark:bg-black text-blue dark:text-yellow hover:bg-white dark:hover:bg-blacks py-1.5 px-4 transition-all ease-in-out duration-1000 ${!hasPrevProject ? 'opacity-30 cursor-not-allowed' : ''}`}
          disabled={!hasPrevProject}
          onClick={() => {
            router.push(`/projects/${prevProjectSlug}`)
          }}>
         	&lt;
        </button> </Tooltip>
        <Tooltip text="Next Project" disabled={!hasNextProject}>
        <button
           className={`border text-center border-dotted border-gray  text-2xl dark:border-dark hover:border-solid bg-light dark:bg-black text-blue dark:text-yellow hover:bg-white dark:hover:bg-blacks py-1.5 px-4 transition-all ease-in-out duration-1000 ${!hasNextProject ? 'opacity-30 cursor-not-allowed' : ''}`}
          disabled={!hasNextProject}
          onClick={() => {
            router.push(`/projects/${nextProjectSlug}`)
          }}>
          	&gt;
        </button></Tooltip>
      </div>
    )
  }
  
  export default ProjectNav
  