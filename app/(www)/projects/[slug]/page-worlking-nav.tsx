import { Project, Params } from "@/app/(www)/utils/interface"
import { notFound } from 'next/navigation'
import { getProject, getProjects } from "@/sanity/lib/utils";
import ProjectNav from "../../components/Projects/ProjectNav";



export const revalidate = 60;

const page = async ({ params }: Params) => {
  console.log(params, "params");
  const project: Project = await getProject(params?.slug);
  console.log(project, "project");

  if (!project) {
    notFound();
  }

  const projects = await getProjects();
  const projectIndex = projects.findIndex(proj => proj._id === project._id);

  const hasPrevProject = projectIndex > 0;
  const hasNextProject = projectIndex < projects.length - 1;

  return (
    <div className="flex flex-row w-full justify-center text-xs text-neutral"> 

      <p className="text-gray text-center text-2xl dark:text-dark">
        {project?.title}
      </p>
      <ProjectNav 
          hasPrevProject={hasPrevProject} 
          hasNextProject={hasNextProject} 
          nextProjectSlug={projects[projectIndex + 1]?.slug.current} 
          prevProjectSlug={projects[projectIndex - 1]?.slug.current} 
        />
              </div> 
  )
};

export default page;
