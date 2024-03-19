'use client';

import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { useCart } from '@/hooks/useCart';
import { Product } from '@/payload-types';

const AddToCartButton = ({ product }: { product: Product }) => {
  const { addItem } = useCart();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [isSuccess]);

  return (
    <Button
      onClick={() => {
        addItem(product), setIsSuccess(true);
      }}
      size="lg"
    >
      {isSuccess ? 'Added!' : 'Add to cart'}
    </Button>
  );
};
export default AddToCartButton;
