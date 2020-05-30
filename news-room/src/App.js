import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import News from './components/News/News';

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <News />
    </div>
  );
}

export default App;
