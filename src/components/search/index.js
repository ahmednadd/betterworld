import React, { useRef, useEffect, useState } from 'react';
import './search.scss';

//Assets
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

let isToggle = false;

const Search = (props) => {
     const { searchProductsByTitle } = props;
     const [searchVal, setSearchVal] = useState('');
     const inputRef = useRef(null);
     const inputWrapperRef = useRef(null);

     useEffect(() => {
          searchProductsByTitle(searchVal);
     }, [searchVal]);

     useEffect(() => {
          document.addEventListener('click', handleClickOutside, false);
          return () => {
               document.removeEventListener('click', handleClickOutside, false);
          };
     }, []);

     const handleClickOutside = (event) => {
          if (!inputWrapperRef.current.contains(event.target) && isToggle && !inputRef.current.value) {
               inputRef.current.style.width = '40px';
               inputRef.current.style.backgroundColor = 'transparent';
               inputRef.current.style.padding = '0';
               inputRef.current.style.opacity = '0';
          }
     };

     return (
          <div className="search-wrapper" ref={inputWrapperRef}>
               <SearchIcon
                    onClick={() => {
                         isToggle = true;
                         inputRef.current.style.width = '100%';
                         inputRef.current.style.backgroundColor = 'var(--bg-color-2)';
                         inputRef.current.style.padding = '0 44px';
                         inputRef.current.style.opacity = '1';
                    }}
               />
               {!!searchVal.length && (
                    <CloseIcon
                         onClick={(e) => {
                              e.stopPropagation();
                              setSearchVal('');
                         }}
                    />
               )}
               <input
                    autoFocus
                    placeholder="Product Title.."
                    ref={inputRef}
                    value={searchVal}
                    onChange={(e) => setSearchVal(e.target.value)}
               />
          </div>
     );
};

export default Search;
