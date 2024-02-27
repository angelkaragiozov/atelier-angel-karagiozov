import React from "react";
// import Header from "@/app/(www)/components/Header";
import { Page } from "@/app/(www)/utils/interface";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Params } from "@/app/(www)/utils/interface";
import ProjectsPagination from "../components/Projects/ProjectsPagination";





  
  export default async function Home() {
   
  
    return (
      <div>

        <ProjectsPagination projects={[]} page={0} totalPages={0} setPage={function (value: React.SetStateAction<number>): void {
          throw new Error("Function not implemented.");
        } } />

      </div>
    );
  }
  


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
