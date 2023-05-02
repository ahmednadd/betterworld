import React from 'react';
import Search from '../../components/search';
import './header.scss';

//Assets
import { ReactComponent as LightIcon } from '../../assets/icons/light.svg';

const Header = (props) => {
     const { searchProductsByTitle } = props;

     const toggleDarkMode = () => {
          if (document.body.classList.contains('dark-mode')) {
               document.body.classList.remove('dark-mode');
          } else document.body.classList.add('dark-mode');
     };

     return (
          <header className="header-wrapper">
               <div className="header-wrapper-search">
                    <Search searchProductsByTitle={searchProductsByTitle} />
               </div>
               <div className="header-wrapper-utils">
                    <LightIcon onClick={() => toggleDarkMode()} />
               </div>
          </header>
     );
};

export default Header;
