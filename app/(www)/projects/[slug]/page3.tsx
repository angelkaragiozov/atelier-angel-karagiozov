
import { getProjects } from "@/sanity/lib/utils";
import { useRouter } from 'next/navigation';
import { Project, Params } from "@/app/(www)/utils/interface"
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { notFound } from 'next/navigation'
import DynamicPlaiceholderBlur from "../../components/Images/ImageBlur";
import { Logo} from "../../utils/Icons";
import Cover from "../../components/Images/Cover";
import LoadingProject from "../../components/Loading/LoadingProjects";
import { getProject } from "@/sanity/lib/utils";
import { Suspense } from "react";
import { project } from "@/sanity/schemas/project";
import ProjectNav from "../../components/Projects/ProjectNav";

export default async function ProjectPage({ searchParams }) {
  const router = useRouter();
  const projectId = searchParams['id'] ?? '1';

  const projects = await getProjects();
  const projectIndex = projects.findIndex(project => project._id === projectId);

  const hasPrevProject = projectIndex > 0;
  const hasNextProject = projectIndex < projects.length - 1;

  return (
  
      <div>




      <Suspense fallback={<div><LoadingProject/></div>} >
          <Cover project={project} />
        </Suspense>
     
        <div className=" w-24 h-24 mx-auto mt-8 mb-4 animate-spin-slow transition-all ease-in-out duration-1000">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div className="flex flex-row w-full justify-center text-xs text-neutral"> 
        <Link href="/" className="hover:underline underline-offset-2 decoration-dotted">
            Index
          </Link>
            <span className="text-gray dark:text-dark">&nbsp;|&nbsp;</span>
          <Link href="/projects" className="hover:underline underline-offset-2 decoration-dotted">
            Projects
          </Link>
            <span className="text-gray dark:text-dark">&nbsp;|&nbsp;</span>
          <p className="text-gray dark:text-dark">
            {project?.title}
          </p>






      </div>

      <ProjectNav 
            hasPrevProject={hasPrevProject} 
            hasNextProject={hasNextProject} 
            prevProjectId={projects[projectIndex - 1]?._id} 
            nextProjectId={projects[projectIndex + 1]?._id} 
            />


      
      {/* <div className='flex gap-2'>
        <button
          className='bg-blue-500 text-white p-1'
          disabled={!hasPrevProject}
          onClick={() => {
            router.push(`project/?id=${projects[projectIndex - 1]._id}`)
          }}>
          Previous Project
        </button>
        <button
          className='bg-blue-500 text-white p-1'
          disabled={!hasNextProject}
          onClick={() => {
            router.push(`project/?id=${projects[projectIndex + 1]._id}`)
          }}>
          Next Project
        </button>
      </div> */}
    </div>
  )
}
