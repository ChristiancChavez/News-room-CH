import React from 'react';
import Category from '../Category/Category';
import './Categories.scss';
import { connect } from 'react-redux';


const categoriesName = ['home', 'politica', 'internacional', 'tecnologia','espectaculo', 'deportes', 'diseño' ];
const Categories = () => {  
    const showCategories = categoriesName.map((category, index) => {
       return  <Category ShowCategory={showNewsSelectedcategory(Category)}  category={category} key={`${Category} ${index}`}/>
    })

    return (
        <div className="categories">
            {showCategories}
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    showNewsSelectedcategory(category) {
        dispatch({
            type: "SHOW_NEWS_SELECTED_CATEGORY",
            category
        })
    }
})

export default connect(mapDispatchToProps)(Categories);
