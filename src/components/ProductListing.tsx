'use client';

import { Product } from '@/payload-types';
import { useEffect, useState } from 'react';
import { ProductSkeleton } from './Skeletons';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ProductListingProps {
  product: Product | null;
  index: number;
}

const ProductListing = ({ product, index }: ProductListingProps) => {
  // for stagger animation
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 75);

    return clearTimeout(timer);
  }, [index]);

  if (!product || !isVisible) return <ProductSkeleton />;

  if (isVisible && product) {
    return (
      <Link
        className={cn('invisible h-full w-full cursor-pointer group/main', {
          'visible animate-in fade-in-5': isVisible,
        })}
        href={`/products/${product.id}`}
      ></Link>
    );
  }
};

export default ProductListing;
