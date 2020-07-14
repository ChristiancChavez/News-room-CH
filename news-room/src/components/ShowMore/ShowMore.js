import React from 'react';
import './ShowMore.scss';

const ShowMore = ({ newUrl }) => {
    return (
        <div className="show">
            <button href={newUrl} className="show__btn"> VER MÁS</button>
        </div>
        
    );
};

export default ShowMore;