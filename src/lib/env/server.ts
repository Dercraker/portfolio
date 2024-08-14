import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    RESEND_API_KEY: z.string().min(1),
    RESEND_AUDIENCE_ID: z.string().optional(),
    NODE_ENV: z.enum(["development", "production", "test"]),
  },
  experimental__runtimeEnv: process.env,
});
