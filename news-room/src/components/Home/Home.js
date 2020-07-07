import React from 'react';
import Header from '../Header/Header';
import Categories from '../Categories/Categories';
import News from '../News/News';

function Home(props) {
    return (
        <div>
            <Header />
            <Categories />
            <News />
        </div>
    );
}

export default Home;