import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Search.scss';

const Search = () => {
    return (
        <div className="search">
            <input type="text" className="search__input" placeholder="Buscar" />
            <button className="search__icon">X</button>
        </div>
    );
};

export default Search;