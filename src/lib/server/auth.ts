import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "./db";

export const auth = betterAuth({
	baseURL: process.env.VITE_BASE_URL,
	database: drizzleAdapter(db, {
		provider: "sqlite",
	}),

	// https://www.better-auth.com/docs/concepts/session-management#session-caching
	session: {
		cookieCache: {
			enabled: true,
			maxAge: 5 * 60, // 5 minutes
		},
	},

	// https://www.better-auth.com/docs/concepts/oauth
	socialProviders: {
		github: {
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		},
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		},
		discord: {
			clientId: process.env.DISCORD_CLIENT_ID as string,
			clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
		},
	},

	// https://www.better-auth.com/docs/authentication/email-password
	// emailAndPassword: {
	//   enabled: true,
	// },
});
