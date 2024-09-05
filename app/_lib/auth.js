import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";

export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};
const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
