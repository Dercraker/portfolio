import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    RESEND_API_KEY: z.string().min(1),
    RESEND_AUDIENCE_ID: z.string().optional(),
    NODE_ENV: z.enum(["development", "production", "test"]),
    GITHUB_TOKEN: z.string().min(1),
    DERCRAKER_GITHUB_ACCOUNT_ID: z.string().min(1),
  },
  experimental__runtimeEnv: process.env,
});
