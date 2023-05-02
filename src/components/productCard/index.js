import React from 'react';
import './productCard.scss';

const ProductCard = (props) => {
     const { item, setSelectedCard } = props;
     const { image, title, price } = item;

     return (
          <div onClick={() => setSelectedCard(item)} className="product-card-wrapper">
               <img src={image} alt="product Poster" />
               <span>{title}</span>
               <span>{'$' + price}</span>
          </div>
     );
};

export default ProductCard;
