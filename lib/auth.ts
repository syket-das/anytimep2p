import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '@/server'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

export const authOptions: NextAuthOptions = {
  debug: false,
  adapter: PrismaAdapter(prisma),

  // Secret for Next-auth, without this JWT encryption/decryption won't work
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: '/auth/login'
  },

  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_APP_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_APP_CLIENT_SECRET as string
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    })
  ],
  session: {
    // Set to jwt in order to CredentialsProvider works properly
    strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60 // 1 days
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, token, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub
        }
      }
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account) {
        token.id = account.id
      }
      return token
    }
  }
}
