import React from 'react';
import ShowMore from '../ShowMore/ShowMore';
import './New.scss';

const New = ({ img_url, title, source_name, url, news_id }) => {
    return (
        <div className="new" id={news_id}>
            <img className="new__img" src={img_url} alt={title} />
            <p className="new__description">{title}</p>
            <h3 className="new__newspaper">{source_name}</h3>
            <ShowMore newUrl={url} />
        </div>
    );
};

export default New;