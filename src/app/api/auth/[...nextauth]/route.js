import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import signToken from "@/db/helpers/jwt";
import signToken from "@/db/models/userModel";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";

const authOption = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GG_ID ,
            clientSecret: process.env.NEXT_PUBLIC_GG_SECRET 
        })
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (account?.provider === 'google') {
                const data = {
                    name: profile?.name,
                    username: (profile?.name?.split(" ")[1]) ? profile?.name?.split(" ")[1] : profile?.name,
                    email: profile?.email,
                    password: Math.random().toString(),
                }
                const user = await UserModel.googleLogin(data)
                const token = signToken({
                    _id: user._id.toString(),
                    email: user.email,
                });
                cookies().set("Authorization", `Bearer ${token}`);
            }
            return true
        }
    }
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }