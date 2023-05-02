import React, { useEffect, useState } from 'react';

import './App.scss';

//components
import Header from './layout/header';
import Home from './layout/home';
import Navbar from './layout/navbar';

//Assets
import { ReactComponent as MenuIcon } from './assets/icons/menu.svg';
import { baseUrl } from './utils/base';
import { getReq } from './utils/api';

let newFilteredData = [];
function App() {
     const [productsData, setProductsData] = useState([]);
     const [filteredProducts, setFilteredProducts] = useState([]);
     const [isToggleMenu, setIsToggleMenu] = useState(false);
     const [productCategories, setProductCategories] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
     const [selectedNavValue, setSelectedNavValue] = useState('home');
     const [selectedCatValue, setSelectedCatValue] = useState('All');

     useEffect(() => {
          getAllProducts();
     }, []);

     const getAllProducts = async () => {
          setIsLoading(true);
          let url = `${baseUrl}/products`;
          const response = await getReq({
               url
          });
          if (response) {
               setIsLoading(false);
               setProductsData(response);
               setFilteredProducts(response);
               getAllProductCategories(response);
          }
     };

     const getAllProductCategories = (data) => {
          if (data?.length) {
               const categories = [];
               data.forEach((element) => {
                    const category = element.category;
                    if (!categories.includes(category)) {
                         categories.push(category);
                    }
               });
               categories.unshift('All');
               setProductCategories(categories);
          }
     };

     const searchProductsByTitle = (title) => {
          let array = [...newFilteredData];
          if (!title) {
               setFilteredProducts(array);
          }
          array = array.filter((product) => product?.title.toLowerCase().includes(title.toLowerCase()));
          setFilteredProducts([...array]);
     };

     const getFilteredProducts = (selectedValue) => {
          if (productsData && selectedValue !== 'All') {
               let data = productsData.filter((product) => product.category === selectedValue);
               newFilteredData = data;
               setFilteredProducts(data);
          } else if (selectedValue === 'All') {
               newFilteredData = productsData;
               setFilteredProducts(productsData);
          }
     };

     return (
          <div className="App">
               <Header searchProductsByTitle={searchProductsByTitle} />
               <Navbar
                    selectedNavValue={selectedNavValue}
                    productCategories={productCategories}
                    isToggleMenu={isToggleMenu}
                    setSelectedNavValue={setSelectedNavValue}
                    getFilteredProducts={getFilteredProducts}
                    setSelectedCatValue={setSelectedCatValue}
                    selectedCatValue={selectedCatValue}
               />
               <Home filteredProducts={filteredProducts} isLoading={isLoading} />
               <div className="App-mobile" onClick={() => setIsToggleMenu(!isToggleMenu)}>
                    <MenuIcon />
               </div>
          </div>
     );
}

export default App;
