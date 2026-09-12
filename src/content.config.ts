import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Directory names are `{YYYYMMDD}-{slug}` for ordering only. Routing uses the
// `postSlug` frontmatter field, never the directory name or entry id.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    excerpt: z.string().optional(),
    draft: z.boolean().optional().default(false),
    ai_translated: z.boolean().optional().default(false),
    lang: z.enum(["ja", "en", "zh"]),
    postSlug: z.string(),
  }),
});

export const collections = { blog };
