import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Image } from "sanity";

export interface Project {
  renamedId: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  subtitle: string;
  excerpt: string;
  body: any;
  tags: Array<Tag>;
  _id: string;
  cover: Image;
  url: string;
  group: string;
  source: string;
  target: string;
  value: number;
}
export interface Tag {
  name: string;
  slug: { current: string };
  _id: string;
  projectCount?: number;
}

export interface Params {
  params: {
    name: string;
    slug: string;
    title: string;
  };
}

export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      publishedAt,
      title,
      cover,
      slug,
      body,
      excerpt,
      tags[]-> {
        _id,
        slug,
        name
      }
    }
    
    `
  );
}

export async function getProject(slug: string): Promise<Project> {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      slug,
      publishedAt,
      title,
      subtitle,
      cover,
      body,
      excerpt,
      body,
      tags[]-> {
        _id,
        slug,
        name
      }
    }`,
    { slug }
  );
}

export async function getTags(): Promise<Tag[]> {
  return client.fetch(
    groq`
    *[_type == "tag"] {
      name,
      slug,
      _id,
      "projectCount": count(*[_type == "project" && references(^._id)])
    }
    `
  );
}

export async function getProjectsByTag(tag: string): Promise<Project[]> {
  return client.fetch(
    groq`
    *[_type == "project" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]{
      title,
      slug,
      cover,
      publishedAt,
      excerpt,
      tags[]-> {
        _id,
        slug,
        name
      }
    }
    `
  );
}
