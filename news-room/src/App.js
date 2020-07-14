import React from 'react';
import './App.scss';
//import Routes from './components/Routes';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home/Home';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
