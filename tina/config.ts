import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            name: "seo",
            label: "SEO & Metadata",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
            ],
          },
          {
            type: "object",
            list: true,
            name: "blocks",
            label: "Sections",
            ui: {
              visualSelector: true,
            },
            templates: [
              {
                name: "hero",
                label: "Hero",
                fields: [
                  { type: "string", name: "headline", label: "Headline" },
                  { type: "string", name: "subline", label: "Subline" },
                  { type: "image", name: "backgroundImage", label: "Background Image" },
                  { type: "string", name: "ctaText", label: "CTA Text" },
                  { type: "string", name: "ctaLink", label: "CTA Link" },
                ],
              },
              {
                name: "philosophy",
                label: "Philosophy (Soil to Soul)",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "rich-text", name: "body", label: "Body" },
                  { type: "image", name: "image", label: "Image" },
                ],
              },
              {
                name: "about",
                label: "About (Timeline)",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "rich-text", name: "body", label: "Body" },
                  { type: "image", name: "image", label: "Portrait" },
                  {
                    type: "object",
                    list: true,
                    name: "timeline",
                    label: "Timeline",
                    fields: [
                      { type: "string", name: "year", label: "Year" },
                      { type: "string", name: "station", label: "Station" },
                      { type: "string", name: "description", label: "Description" },
                    ],
                  },
                ],
              },
              {
                name: "offerings",
                label: "Offerings",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  {
                    type: "object",
                    list: true,
                    name: "items",
                    label: "Items",
                    fields: [
                      { type: "string", name: "title", label: "Title" },
                      { type: "string", name: "description", label: "Description" },
                      { type: "image", name: "image", label: "Image" },
                      { type: "string", name: "link", label: "Link" },
                    ],
                  },
                ],
              },
              {
                name: "signatureDishes",
                label: "Signature Dishes Showcase",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  {
                    type: "object",
                    list: true,
                    name: "dishes",
                    label: "Dishes",
                    fields: [
                      {
                        type: "reference",
                        name: "dish",
                        label: "Dish",
                        collections: ["dish"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "contactForm",
                label: "Contact Form",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "email", label: "Recipient Email" },
                ],
              },
              {
                name: "news",
                label: "News Section",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description" },
                ],
              },
            ],
          },
        ],
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return `/`;
            }
            return `/${document._sys.filename}`;
          },
        },
      },
      {
        name: "dish",
        label: "Signature Dishes",
        path: "content/dishes",
        format: "md",
        fields: [
          { type: "string", name: "name", label: "Name", isTitle: true, required: true },
          { type: "string", name: "description", label: "Description" },
          { type: "image", name: "imageRaw", label: "Raw Image (Soil)" },
          { type: "image", name: "imagePlated", label: "Plated Image (Soul)" },
          { type: "image", name: "imageSketch", label: "Recipe Sketch" },
          { type: "string", name: "type", label: "Type", options: ["Starter", "Main", "Dessert"] },
          {
            type: "object",
            name: "ingredients",
            label: "Ingredients",
            list: true,
            fields: [
              { type: "string", name: "amount", label: "Amount" },
              { type: "string", name: "unit", label: "Unit" },
              { type: "string", name: "name", label: "Name" },
            ],
          },
          { type: "rich-text", name: "instructions", label: "Instructions" },
          {
            type: "object",
            name: "seo",
            label: "SEO & Metadata",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
            ],
          },
        ],
      },
      {
        name: "journal",
        label: "Journal & Media",
        path: "content/journal",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "datetime", name: "date", label: "Date" },
          { type: "image", name: "coverImage", label: "Cover Image" },
          { type: "string", name: "lead", label: "Lead Text" },
          { type: "string", name: "externalLink", label: "External Link" },
          { type: "rich-text", name: "body", label: "Body" },
          { type: "string", name: "tags", label: "Tags", list: true },
          {
            type: "object",
            name: "seo",
            label: "SEO & Metadata",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
            ],
          },
        ],
      },
    ],
  },
});
