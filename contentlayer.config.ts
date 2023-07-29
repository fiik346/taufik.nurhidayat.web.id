import { defineDocumentType, makeSource } from "contentlayer/source-files";
export const Project = defineDocumentType(() => ({
  name: "Project",
  filepathPathPattern: "project/*.md",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    website: {
      type: "string",
      required: true,
    },
    cover: {
      type: "string",
      required: true,
    },
    featured: {
      type: "boolean",
      required: false,
      default: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (item) => `/${item._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Project],
});
