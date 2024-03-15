import MaxWidthWrapper from './MaxWidthWrapper';
import ProductReel from './ProductReel';

const Products = () => {
  return (
    <MaxWidthWrapper>
      <ProductReel
        query={{ sort: 'desc', limit: 4 }}
        title="Brand new"
        href="/products"
      />
    </MaxWidthWrapper>
  );
};
export default Products;
