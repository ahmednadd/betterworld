import React from 'react';
import './productCardDetails.scss';

//Assets
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

const ProductCardDetails = (props) => {
     const { selectedCard, setSelectedCard } = props;

     const { category, description, id, image, price, rating, title } = selectedCard;

     const getRatingWidth = () => {
          return (rating?.rate / 10) * 100;
     };

     return (
          <div className="product-details-container">
               <CloseIcon onClick={() => setSelectedCard({})} />

               <div className="product-details-wrapper">
                    <div
                         className="product-details-wrapper-img"
                         style={{
                              backgroundImage: `url(${image})`
                         }}
                    />
                    <img src={image} alt="Poster" />
                    <div className="product-details-wrapper-content">
                         <h1>{title}</h1>
                         <div className="product-details-wrapper-content-rating">
                              <div
                                   style={{
                                        width: getRatingWidth() + '%'
                                   }}
                              />
                              <span>{rating?.rate} / 10</span>
                         </div>
                         <ul>
                              <li>
                                   <span>Product Id:</span> {id}
                              </li>
                              <li>
                                   <span>Category:</span> {category}
                              </li>
                              <li>
                                   <span>Price:</span> {price}
                              </li>
                         </ul>
                         <span>{description}</span>
                         <div className="product-details-wrapper-content-btn">
                              <button className="bg-btn">Buy Now</button>
                              <button className="outline-btn">Add to Cart</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ProductCardDetails;
