import React from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import { Project } from "@/sanity/lib/utils";
import { Parallax } from "./Parallax";

const CardComponent = async ({
  project,
  index,
}: {
  project: Project;
  index: any;
}) => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div>
      <Parallax
        speed={Math.random() * 4 - 2}
        className={`${index % 2 === 0 ? "self-start" : "self-end"} z-${index}`}
      >
        <div
          key={project._id}
          // className=" border w-80 border-blue hover:translate-x-11 hover:text-dark dark:hover:text-gray p-3 transition-all ease-in-out duration-1000"
          // className={`${index % 2 === 0 ? "self-start" : "self-end"} z-${index}`}
        >
          <Link href={`/projects/${project?.slug?.current}`}>
            <Image
              src={urlForImage(project.cover).url()}
              width={300}
              height={150}
              alt="projects"
            />
          </Link>
        </div>
      </Parallax>
    </div>
  );
};

export default CardComponent;
