import MaxWidthWrapper from './MaxWidthWrapper';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your go-to marketplace for unleashing creativity with exceptional{' '}
          <span className=" text-blue-600">digital assets</span>.
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Every asset on DigitalHippo is carefully verified by team members,
          guaranteeing our promise of utmost quality.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <Link href="/products" className={buttonVariants()}>
            Browse Trending
          </Link>
          <Button variant="ghost">Our quality promise &rarr;</Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
export default Hero;
