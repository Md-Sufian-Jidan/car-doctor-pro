import NextAuth from "next-auth/next"
import CredentialProviders from "next-auth/providers/credentials"

const handler = async () => NextAuth({
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
                return true;
            }

        })
    ],
    callbacks: {
        pages: {
            signIn: '/login'
        }
    },
    pages: {},
});

export { handler as GET, handler as POST };