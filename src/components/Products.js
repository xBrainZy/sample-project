import React from 'react';

const Products = () => {
  const products = [
    { id: 1, name: 'DSLR Camera', price: '$999', image: 'dslr.jpg' },
    { id: 2, name: 'Mirrorless Camera', price: '$799', image: 'mirrorless.jpg' },
    { id: 3, name: 'Action Camera', price: '$299', image: 'action.jpg' },
  ];

  return (
    <section>
      <h2>Our Products</h2>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;