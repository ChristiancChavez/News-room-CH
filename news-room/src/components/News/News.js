import React from 'react';
import New from '../New/New';
import './News.scss';
import { connect } from 'react-redux';

const News = ({ news }) => {
    console.log();
    const currentNews = news.map(newInfo => {
        return <New srcImage={newInfo.img_url} description={newInfo.title} newspaper={newInfo.source_name} newId={newInfo.news_id} newUrl={newInfo.url} />
    });
    return (
        <div className="news">
            {currentNews}
        </div>
    );
};

const mapStateToProps = state => ({
    news: state.homeNews
})

export default connect(mapStateToProps)(News);