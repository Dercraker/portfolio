"use server";

import { prisma } from "@/lib/prisma";
import { action } from "@/lib/safeAction";

import { z } from "zod";

const GetFeedBackCountSchema = z.object({});

type GetFeedBackCountSchema = z.infer<typeof GetFeedBackCountSchema>;

export const GetFeedbackCountAction = action
  .schema(GetFeedBackCountSchema)
  .action(async () => {
    return await prisma.feedback.count();
  });
