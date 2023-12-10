// [...nextauth]/route.ts
import NextAuth from 'next-auth';
import * as Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add other authentication providers as needed
  ],
  // Add additional configurations as needed
});
