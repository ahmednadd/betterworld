import React, { useState } from 'react';
import './navigation.scss';

//Data
import { NavData } from '../../_mock/NavigationData';

const Navigation = ({
     setSelectedNavValue,
     productCategories,
     selectedNavValue,
     getFilteredProducts,
     setSelectedCatValue,
     selectedCatValue,
     setSelectedCard,
     setIsToggleMenu
}) => {
     const [selectedIndex, setSelectedIndex] = useState(0);

     const getSelectedNav = (index, value) => {
          setSelectedNavValue(value);
          setSelectedIndex(index);
          if (value !== 'Categories') {
               setIsToggleMenu(false);
               getFilteredProducts('All');
               setSelectedCatValue('All');
               setSelectedCard({});
          }
     };

     return (
          <ul className="navigation-wrapper">
               {NavData?.map((item, index) => {
                    if (item) {
                         return (
                              <React.Fragment key={index}>
                                   <li
                                        className={selectedIndex === index ? 'active' : ''}
                                        onClick={() => getSelectedNav(index, item.name)}
                                        style={{
                                             marginBottom: 'Categories' === selectedNavValue && selectedIndex === index ? '140px' : '0'
                                        }}
                                   >
                                        {item.icon} {item.name}
                                        <div className="sub-item">
                                             {'Categories' === selectedNavValue &&
                                                  selectedIndex === index &&
                                                  productCategories.map((item, index) => {
                                                       if (item) {
                                                            return (
                                                                 <span
                                                                      key={index}
                                                                      onClick={() => {
                                                                           setIsToggleMenu(false);
                                                                           getFilteredProducts(item);
                                                                           setSelectedCatValue(item);
                                                                      }}
                                                                      className={selectedCatValue === item ? 'active' : ''}
                                                                 >
                                                                      {item}
                                                                 </span>
                                                            );
                                                       } else return null;
                                                  })}
                                        </div>
                                   </li>

                                   {(index === 1 || index === 4) && <hr />}
                              </React.Fragment>
                         );
                    } else return null;
               })}
          </ul>
     );
};

export default Navigation;
