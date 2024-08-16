import moment from "moment";
import { z } from "zod";
import { ProjectSize } from "./ProjectSize";

export const ProjectSchema = z.object({
  title: z.string(),
  desc: z.string(),
  link: z.string().url().optional(),
  date: z.custom<moment.Moment>().optional(),
  size: ProjectSize,
});

export type ProjectSchema = z.infer<typeof ProjectSchema>;
