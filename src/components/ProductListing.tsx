'use client';

import { Product } from '@/payload-types';
import { useState } from 'react';
import { ProductSkeleton } from './Skeletons';

interface ProductListingProps {
  product: Product | null;
  index: number;
}

const ProductListing = ({ product, index }: ProductListingProps) => {

  // for stagger animation
  const [isVisible, setIsVisible] = useState<boolean>(false);

  if (!product || !isVisible) return <ProductSkeleton />;
};

export default ProductListing;
