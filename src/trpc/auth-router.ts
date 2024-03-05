import { AuthCredentialValidator } from '../lib/validators/account-credentials-validator';
import { getPayloadClient } from '../get-payload';
import { publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';

export const authRouter = router({
  createPayloadUser: publicProcedure
    .input(AuthCredentialValidator)
    .mutation(async ({ input }) => {
      const { email, password } = input;
      const payload = await getPayloadClient();

      // check if user already exist
      const { docs: users } = await payload.find({
        collection: 'users',
        where: {
          email: {
            equals: email,
          },
        },
      });

      if (users.length !== 0) throw new TRPCError({ code: 'CONFLICT' });

      await payload.create({
        collection: 'users',
        data: {
          email,
          password,
          role: "user"
        },
      });

      return {success: true, sentToEmail: email};
    }),
});
