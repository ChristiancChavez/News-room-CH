import React from 'react';
import './Category.scss';
import PropTypes from 'prop-types';

const Category = ({ category }) => {
    const callApp = () => {
        console.log('helloooooooooooooooooooooooooooo')
    }
    return (
        <button onClick={callApp} className="category" id={category}>
            <h2 className="category__title">{category}</h2>
        </button>
    );
};

Category.propTypes = {
    category: PropTypes.string,
};

export default Category;