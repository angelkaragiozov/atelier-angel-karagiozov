import { type SchemaTypeDefinition } from "sanity";
import { project } from "./schemas/project";
import { tag } from "./schemas/tag";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, tag],
};
