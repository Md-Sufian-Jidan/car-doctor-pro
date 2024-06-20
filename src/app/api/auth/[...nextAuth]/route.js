import { connectDb } from "@/components/leave/connectDb";
import NextAuth from "next-auth/next"
import CredentialProviders from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import bcrypt from 'bcrypt'

const handler = NextAuth({
    secret: process.env.NEXT_PUBLIC_JWT_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    providers: [
        CredentialProviders({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                const { email, password } = credentials;
                if (!email || !password) return console.log('not email and password');
                const db = await connectDb();
                const currentUser = await db.collection('users').findOne({ email });
                if (!currentUser) return console.log('not user');

                const passwordMatch = bcrypt.compareSync(password, currentUser?.password);
                if (!passwordMatch) return console.log('password match');;
                return currentUser;
            },
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET
        }),
    ],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === "google" || account?.provider === "github") {
                const { email } = user;
                try {
                    const db = await connectDb();
                    const userCollection = await db.collection('users');
                    const userExists =  userCollection.findOne({ email });
                    if (!userExists) {
                        const res = await userCollection.insertOne(user);
                        return user;
                    }
                    else {
                        return user;
                    }
                }
                catch (error) {
                    console.log(error);
                }
            }
            else {
                return user;
            }
        }
    },
});

export { handler as GET, handler as POST };