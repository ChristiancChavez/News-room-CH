import React from 'react';
import Header from '../Header/Header';
import Categories from '../Categories/Categories';
import News from '../News/News';

const Home = () => {
    return (
        <div>
            <Header />
            <Categories />
            <News />
        </div>
    );
}

export default Home;