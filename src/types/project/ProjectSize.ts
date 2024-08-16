import { z } from "zod";

export const ProjectSize = z.enum(["small", "medium", "large"]);

export type ProjectSize = z.infer<typeof ProjectSize>;
