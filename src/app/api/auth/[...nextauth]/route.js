
import { signToken } from "@/db/helpers/jwt";
import { UserModel } from "@/db/models/userModel";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";

const authOption = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GG_ID,
            clientSecret: process.env.NEXT_PUBLIC_GG_SECRET
        })
    ],
    callbacks: {
        async signIn(el) {
            const { account, user } = el
            if (account?.provider === 'google') {
                const data = {
                    fullname: user?.name,
                    email: user?.email,
                    password: Math.random().toString(),
                    age: 5
                }
                const newUser = await UserModel.googleLogin(data)
                const token = signToken({
                    _id: newUser._id.toString(),
                    email: newUser.email,
                });
                cookies().set("Authorization", `Bearer ${token}`);
            }
            return true
        }
    }
}

const handler = NextAuth(authOption)
export { handler as GET, handler as POST }