'use client';

import { useEffect, useState } from 'react';
import { Button } from './ui/button';

const AddToCartButton = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [isSuccess]);

  return (
    <Button onClick={() => setIsSuccess(true)} size="lg">
      {isSuccess ? 'Added!' : 'Add to cart'}
    </Button>
  );
};
export default AddToCartButton;
