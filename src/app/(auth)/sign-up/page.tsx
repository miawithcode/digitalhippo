'use client';

import { Icons } from '@/components/Icons';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Label } from '@radix-ui/react-label';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const page = () => {
  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          {/* LOGO & TITLE */}
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 w-20" />
            <h1 className="text-2xl font-bold">Create an account</h1>

            <p>
              Already have an account?{' '}
              <Link
                href="/sign-in"
                className={buttonVariants({
                  variant: 'link',
                  className: '!p-0 !text-blue-500 gap-1',
                })}
              >
                Sign in
                <ArrowRight className="h-4 w-4" />
              </Link>
            </p>
          </div>

          {/* FORM */}
          <div className="grid gap-6">
            {/* onSubmit={} */}
            <form>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    className={cn({
                      'focus-visible:ring-red-500': true,
                    })}
                    placeholder="you@example.com"
                  />
                </div>
                <div className="grid gap-1 py-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    className={cn({
                      'focus-visible:ring-red-500': true,
                    })}
                    placeholder="password"
                  />
                </div>

                <Button>Sign up</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default page;
