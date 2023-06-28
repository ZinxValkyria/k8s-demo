import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { config } from "dotenv";

config();
if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {throw new Error("REQUIRED ENV VARS NOT SET")}

const handler = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ]
});

export { handler as GET, handler as POST}