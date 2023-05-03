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
     const [selectedCard, setSelectedCard] = useState({});

     // to fetch all the products from the API when the component mounts for the first time
     useEffect(() => {
          getAllProducts();
     }, []);

     // This is an asynchronous function that retrieves all the products from the API
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

     // This function takes the product data as input, and returns an array of all the unique categories in the products
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

     // This function filters the product data by the input title and sets the filteredProducts state to the filtered array.
     // If no title is given, it sets the filteredProducts state to the original array.
     const searchProductsByTitle = (title) => {
          let array = [...newFilteredData];
          if (!title) {
               setFilteredProducts(array);
          }
          array = array.filter((product) => product?.title.toLowerCase().includes(title.toLowerCase()));
          setFilteredProducts([...array]);
     };

     // This function filters the products based on the selected category value and sets the filteredProducts state to the filtered array.
     // If the selected value is 'All', it sets the filteredProducts state to the original array
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
                    setSelectedCard={setSelectedCard}
                    setIsToggleMenu={setIsToggleMenu}
               />
               <Home
                    filteredProducts={filteredProducts}
                    isLoading={isLoading}
                    setSelectedCard={setSelectedCard}
                    selectedCard={selectedCard}
               />
               <div className="App-mobile" onClick={() => setIsToggleMenu(!isToggleMenu)}>
                    <MenuIcon />
               </div>
          </div>
     );
}

export default App;
