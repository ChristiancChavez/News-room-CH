import React from 'react';
import './Category.scss';
import PropTypes from 'prop-types';

const Category = ({ category, ShowCategory }) => {
    return (
        <button onClick={() => ShowCategory(category)} className="category" id={category}>
            <h2 className="category__title">{category}</h2>
        </button>
    );
};

Category.propTypes = {
    category: PropTypes.string,
};

export default Category;