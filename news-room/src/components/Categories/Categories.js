import React from 'react';
import Category from '../Category/Category';
import './Categories.scss';


const categoriesName = ['home', 'politica', 'internacional', 'tecnologia','espectaculo', 'deportes', 'diseño' ];
const Categories = (props) => {  
    const showCategories = categoriesName.map((category, index) => {
       return  <Category  category={category} key={`${Category} ${index}`}/>
    })

    return (
        <div className="categories">
            {showCategories}
        </div>
    );
};

export default Categories;
