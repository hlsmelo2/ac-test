import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const response = await fetch('http://localhost:3001/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(credentials),
                });

                const user = await response.json();

                console.log({ response });
                console.log({ user });

                if (user && response.ok) {
                    return user;
                }

                return null
            }
        })
    ],
    pages: {
        signIn: '/login',
    },
    callbacks: {
		async jwt({ token , user }) {
			user && (token.user = user)

            return token;
		},
		async session({ session, token }) {
			session = token.user as any

            return session;
		}
	}
  }

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST, authOptions }
