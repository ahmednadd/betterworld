import React from 'react';
import ProductCard from '../../components/productCard';
import './home.scss';

//Components
import ProductCardDetails from '../../components/productCardDetails';

const Home = (props) => {
     const { filteredProducts, isLoading, selectedCard, setSelectedCard } = props;
     return (
          <div className="home-wrapper">
               {isLoading ? (
                    <p>Hang tight while we get our awesome products ready for you!</p>
               ) : selectedCard.title ? (
                    <ProductCardDetails selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
               ) : filteredProducts.length === 0 ? (
                    <p>
                         Oopsie! No luck finding what you're after. <br /> Please try a new search!
                    </p>
               ) : (
                    filteredProducts?.length &&
                    filteredProducts.map((item, index) => {
                         if (item) {
                              return (
                                   <React.Fragment key={index}>
                                        <ProductCard item={item} setSelectedCard={setSelectedCard} />
                                   </React.Fragment>
                              );
                         } else return null;
                    })
               )}
          </div>
     );
};

export default Home;
