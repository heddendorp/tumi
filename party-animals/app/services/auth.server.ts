import { Authenticator } from 'remix-auth';
import { sessionStorage } from '~/services/session.server';
import { Auth0Strategy } from 'remix-auth-auth0';
import { PrismaClient, User } from '~/generated/prisma';

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export const authenticator = new Authenticator<User>(sessionStorage);

const prisma = new PrismaClient();

authenticator.use(
  new Auth0Strategy(
    {
      domain: 'tumi.eu.auth0.com',
      clientID: 'BDYrE7BvffqlpP6kFI988qYXK6yamV1m',
      clientSecret: process.env.AUTH0_CLIENT_SECRET ?? '',
      callbackURL: process.env.AUTH0_CALLBACK_URL ?? '',
      scope: 'openid profile email',
    },
    async ({ accessToken, refreshToken, extraParams, profile }) => {
      const user = await prisma.user.findUnique({
        where: { authId: profile.id },
      });
      if (!user) {
        return prisma.user.create({
          data: {
            authId: profile.id,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.emails[0].value,
          },
        });
      }
      return user;
    }
  )
);