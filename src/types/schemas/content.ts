import { z } from "zod";

const createContentSchema = z.object({
  title: z.string().min(4).max(100),
  html: z.string(),
  puckConf: z.string(),
  urlKey: z.string().min(1),
  active: z.boolean(),
});

type createContentSchemaType = z.infer<typeof createContentSchema>;

const editContentSchema = z.object({
  title: z.string().min(4).max(100),
  html: z.string(),
  puckConf: z.string(),
  urlKey: z.string().min(1),
  active: z.boolean(),
});

type editContentSchemaType = z.infer<typeof editContentSchema>;

export { createContentSchema, editContentSchema };
export type { createContentSchemaType, editContentSchemaType };
