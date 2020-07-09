import React from 'react';
import Header from '../Header/Header';
import Categories from '../Categories/Categories';
import News from '../News/News';

const Home = () => {
    return (
        <div>
            <Header />
            <Categories />
            <News a={1} b={2} c={3} />
        </div>
    );
}

export default Home;