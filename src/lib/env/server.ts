import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
export const env = createEnv({
  server: {
    VERCEL_ENV: z.enum(["production", "preview"]).optional(),
    VERCEL_URL: z.string().optional(),

    RESEND_API_KEY: z.string().min(1),
    RESEND_AUDIENCE_ID: z.string().optional(),
    RESEND_EMAIL_FROM: z.string().min(1).email(),

    GITHUB_TOKEN: z.string().min(1),

    NODE_ENV: z.enum(["development", "production"]),

    LINKEDIN_CLIENT_ID: z.string().min(1),
    LINKEDIN_CLIENT_SECRET: z.string().min(1),
  },
  experimental__runtimeEnv: {
    ...process.env,
  },
});
