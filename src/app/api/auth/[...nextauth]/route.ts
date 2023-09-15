import CredentialsProvider from "next-auth/providers/credentials";
import { type NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import { JWT } from "next-auth/jwt";

const BASE_URL = "http://localhost:5000/api";

const refreshToken = async (token: JWT): Promise<JWT> => {
  const response = await fetch(BASE_URL + "/users/refresh", {
    method: "POST",
    headers: {
      authorization: `Refresh ${token.tokens.refresh}`,
    },
  });
  console.log("refreshed");

  const data = await response.json();

  return {
    ...token,
    tokens: data,
  };
}

const EXPIRE_DATE = 5 * 60 * 60 * 1000;

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/auth/signIn',
    signOut: '/auth/signOut',
  },
  session: {
    strategy: "jwt",
    maxAge: Date.now() + EXPIRE_DATE 
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Имя пользователя",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "*********",
        },
      },
      async authorize(credentials: any, req: any) {
        if (!credentials) return null;

        const { username, password } = credentials;

        const response = await fetch(BASE_URL + "/users/login", {
          method: "POST",
          body: JSON.stringify({
            username,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 401) {
          console.log(response.statusText);
          return null;
        }
        const user = await response.json();
        return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };

      if (Date.now() < token.expiresIn)
        return token;

      return await refreshToken(token);
    },

    async session({ token, session }) {
      session.user = token.user;
      session.tokens = token.tokens;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}
