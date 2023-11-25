import React from 'react';
import ProductoInfo from './ProductoInfo';

const productData = {
  name: 'Lavarropa Dream 8.12',
  description: 'Descripción del producto...',
  price: 12049.99,
  sku: 'ABC123',
  quantity: 100,
};

const ProductoDetalle = () => {
  return (
    <div>
      
      <ProductoInfo product={productData} />
    </div>
  );
};

export default ProductoDetalle;
