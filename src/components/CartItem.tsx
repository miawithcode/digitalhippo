import { PRODUCT_CATEGORIES } from '@/config';
import { useCart } from '@/hooks/useCart';
import { formatPrice } from '@/lib/utils';
import { Product } from '@/payload-types';
import { ImageIcon, Minus } from 'lucide-react';
import Image from 'next/image';

const CartItem = ({ product }: { product: Product }) => {
  const { image } = product.images[0];

  const { removeItem } = useCart();

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === product.category
  )?.label;

  return (
    <div className="space-y-3 py-2">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded">
            {typeof image !== 'string' && image.url ? (
              <Image
                src={image.url}
                alt={product.name}
                fill
                className="absolute object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-secondary">
                <ImageIcon
                  aria-hidden="true"
                  className="h-4 w-4 text-muted-foreground"
                />
              </div>
            )}
          </div>

          <div className="flex flex-col self-start">
            <span className="line-clamp-1 text-sm font-medium">
              {product.name}
            </span>

            <span className="line-clamp-1 text-xs capitalize text-muted-foreground mb-2">
              {label}
            </span>

            <span className="text-sm font-bold line-clamp-1 ">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>

        <div className="text-muted-foreground flex flex-col space-y-1">
          <button
            onClick={() => removeItem(product.id)}
            className="ml-auto text-sm font-medium"
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
