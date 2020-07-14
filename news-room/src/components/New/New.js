import React from 'react';
import ShowMore from '../ShowMore/ShowMore';
import './New.scss';

const New = ({ srcImage, description, newId, newspaper, newUrl }) => {
    return (
        <div className="new" id={newId}>
            <img className="new__img" src={srcImage} alt={newspaper} />
            <p className="new__description">{description}</p>
            <h3 className="new__newspaper">{newspaper}</h3>
            <ShowMore newUrl={newUrl} />
        </div>
    );
};

export default New;