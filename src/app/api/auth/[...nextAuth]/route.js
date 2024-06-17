import { connectDb } from "@/components/leave/connectDb";
import NextAuth from "next-auth/next"
import CredentialProviders from "next-auth/providers/credentials"
import bcrypt from 'bcrypt'

const handler = NextAuth({
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
    ],
    callbacks: {
        pages: {
            signIn: '/login',
        },
    },
    pages: {},
});

export { handler as GET, handler as POST };