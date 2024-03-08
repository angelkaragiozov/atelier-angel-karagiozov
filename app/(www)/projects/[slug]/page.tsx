import { notFound } from "next/navigation";
import { getProject, getProjects, Project, Params } from "@/sanity/lib/utils";
import ProjectNav from "../../components/Projects/ProjectNav";
import { Suspense } from "react";
import Cover from "../../components/Images/Cover";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import DynamicPlaiceholderBlur from "../../components/Images/ImageBlur";
import { Logo } from "../../utils/Icons";
import LoadingProject from "../../components/Loading/LoadingProject";
import ThemeSwitch from "../../components/UI/ThemeSwitch";

export const revalidate = 60;

const page = async ({ params }: Params) => {
  console.log(params, "params");
  const project: Project = await getProject(params?.slug);
  console.log(project, "project");

  if (!project) {
    notFound();
  }

  const projects = await getProjects();
  const projectIndex = projects.findIndex((proj) => proj._id === project._id);

  const hasPrevProject = projectIndex > 0;
  const hasNextProject = projectIndex < projects.length - 1;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <Suspense
        fallback={
          <div>
            <LoadingProject />
          </div>
        }
      >
        <Cover project={project} />
      </Suspense>

      <div className="float-right mt-10 mr-6">
        <ThemeSwitch />
      </div>

      <div className=" w-20 h-20 mx-auto mt-8 mb-4 animate-spin-slow transition-all ease-in-out duration-1000">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="flex flex-row w-full justify-center text-xs text-neutral">
        <Link
          href="/"
          className="hover:underline underline-offset-2 decoration-dotted"
        >
          Index
        </Link>
        <span>&nbsp;|&nbsp;</span>
        <Link
          href="/projects"
          className="hover:underline underline-offset-2 decoration-dotted"
        >
          Projects
        </Link>
        <span>&nbsp;|&nbsp;</span>
        <p className="text-gray dark:text-dark">{project?.title}</p>
      </div>

      <div className="mx-4 md:ml-14 md:mr-8">
        <div className="mx-auto 2xl:max-w-screen-xl">
          <div className=" border-b-[3px] border-double border-neutral mt-2"></div>

          <h1 className="text-4xl lg:text-6xl text-neutral text-center mt-4">
            {project?.title}
          </h1>

          <h1 className="text-base text-center my-8 text-neutral">
            {project?.subtitle}
          </h1>

          <div className="border border-dotted border-neutral">
            <div className={richTextStyles}>
              <PortableText
                value={project?.body}
                components={myPortableTextComponents}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full mt-4 border mb-2 border-neutral border-dotted  hover:border-solid ">
            <div className="px-4 border-b border-dotted border-neutral lg:border-0 hover:bg-white dark:hover:bg-blacks transition-all ease-in-out duration-1000">
              <Link href="/projects">
                <pre className="text-2xs mx-3">
                  {`                                          
 _____ _____ _____    __ _____ _____ _____ 
|  _  | __  |     |__|  |   __|     |_   _|
|   __|    -|  |  |  |  |   __|   --| | |  
|__|  |__|__|_____|_____|_____|_____| |_|  
                   `}
                </pre>
                <p className="text-center">Back to all Projects</p>
              </Link>
            </div>

            <div className="p-2 pl-4 w-full border-0 lg:border-l border-dotted border-neutral hover:dark:bg-blacks  hover:bg-white bg-light dark:bg-black dark:hover:bg-blacks h-30 transition-all ease-in-out duration-1000">
              <div className="flex flex-row">
                <div className="w-30 text-2xs text-right leading-7 align-middle">
                  <div>_id:</div>
                  <div>date:</div>
                  <div>title:</div>
                  <div>media:</div>
                  <div>tags:</div>
                </div>

                <div className="flex flex-col flex-grow pl-4 leading-7 text-dark  dark:text-gray text-xs">
                  <div>{project?.title}</div>
                  <div>{new Date(project?.publishedAt).toDateString()}</div>
                  <div>Right Column 4</div>
                  <div>
                    <p className="text-neutral text-2xs truncate">
                      {project?.excerpt}
                    </p>{" "}
                  </div>
                  <div>
                    {project?.tags?.map((tag) => (
                      <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
                        <span className=" p-1 text-2xs lowercase border border-dotted dark:border-dark">
                          #{tag.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 border border-neutral border-dotted p-4">
          <ProjectNav
            hasPrevProject={hasPrevProject}
            hasNextProject={hasNextProject}
            nextProjectSlug={projects[projectIndex + 1]?.slug.current}
            prevProjectSlug={projects[projectIndex - 1]?.slug.current}
          />
        </div>
      </div>
    </div>
  );
};

export default page;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <DynamicPlaiceholderBlur src={urlForImage(value).url()} />
    ),
  },
};

const richTextStyles = `
mt-14
text-justify
max-w-2xl
m-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;
