import React from 'react';
import './Category.scss';
import PropTypes from 'prop-types';

const Category = ({category}) => {
    return (
        <div className="category" id={category}>
            <h2 className="category__title">{category}</h2>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.string,
};

export default Category;