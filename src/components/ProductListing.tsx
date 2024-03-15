'use client';

import { Product } from '@/payload-types';
import { useEffect, useState } from 'react';
import { ProductSkeleton } from './Skeletons';
import Link from 'next/link';
import { cn, formatPrice } from '@/lib/utils';
import { PRODUCT_CATEGORIES } from '@/config';
import ImageSlider from './ImageSlider';

interface ProductListingProps {
  product: Product | null;
  index: number;
}

const ProductListing = ({ product, index }: ProductListingProps) => {
  // for stagger animation
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === product?.category
  )?.label;

  const validUrls = product?.images
    .map(({ image }) => (typeof image === 'string' ? image : image.url))
    .filter(Boolean) as string[];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 75);

    return () => clearTimeout(timer);
  }, [index]);

  if (!product || !isVisible) return <ProductSkeleton />;

  if (isVisible && product) {
    return (
      <Link
        className={cn('invisible h-full w-full cursor-pointer group/main', {
          'visible animate-in fade-in-5': isVisible,
        })}
        href={`/products/${product.id}`}
      >
        <div className="flex flex-col w-full">
          <ImageSlider urls={validUrls} />

          <h3 className="mt-4 font-medium text-sm text-gray-700">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{label}</p>
          <p className="mt-1 font-medium text-sm text-gray-900">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    );
  }
};

export default ProductListing;
