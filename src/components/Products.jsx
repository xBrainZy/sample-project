import React from 'react';
import '../styles/App.css';

import dslr from '../assets/dslr.jpg'
import mirrorless from '../assets/mirrorless.jpg'
import action from '../assets/action.jpg'

const Products = () => {

  return (
    <section id="products" className="products">
      <h2>Our Products</h2>
      <div className="product-list">
        
      <div key={1} className="product">
            <img src={dslr} alt={'DSLR Camera'} />
            <h3>DSLR Camera</h3>
            <p>999 QAR</p>
      </div>

      <div key={1} className="product">
            <img src={mirrorless} alt={'Mirrorless Camera'} />
            <h3> Mirrorless Camera </h3>
            <p> 799 QAR </p>
      </div>

      <div key={1} className="product">
            <img src={action} alt={'Action Camera'} />
            <h3> Action Camera </h3>
            <p> 299 QAR </p>
      </div>
       
      </div>
    </section>
  );
};

export default Products;