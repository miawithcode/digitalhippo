import { TRPCError } from '@trpc/server';
import { privateProcedure, router } from './trpc';
import { z } from 'zod';

export const paymentRouter = router({
  createSession: privateProcedure
    .input(z.object({ productIds: z.array(z.string()) }))
    .mutation(({ ctx, input }) => {
      const { user } = ctx;
    }),
});
