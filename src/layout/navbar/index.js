import React from 'react';
import Avatar from '../../components/avatar';
import './navbar.scss';

//Assets
import UserImage from '../../assets/user.webp';
import Navigation from '../../components/navigation';

const Navbar = (props) => {
     const {
          isToggleMenu,
          handleClick,
          setSelectedNavValue,
          productCategories,
          selectedNavValue,
          getFilteredProducts,
          setSelectedCatValue,
          selectedCatValue
     } = props;
     return (
          <nav
               className="navbar-wrapper"
               style={{
                    left: isToggleMenu && '0'
               }}
          >
               <div className="navbar-wrapper-user">
                    <Avatar handleClick={handleClick} dimension={80} imgSrc={UserImage} />
                    <h3>John Doe</h3>
               </div>
               <hr />
               <Navigation
                    selectedNavValue={selectedNavValue}
                    productCategories={productCategories}
                    setSelectedNavValue={setSelectedNavValue}
                    getFilteredProducts={getFilteredProducts}
                    setSelectedCatValue={setSelectedCatValue}
                    selectedCatValue={selectedCatValue}
               />
          </nav>
     );
};

export default Navbar;
