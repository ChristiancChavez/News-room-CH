import React from 'react';
import './App.scss';
import Routes from './components/Routes';
import { Provider } from 'react-redux';
import store from './components/redux/store';
// import Home from './components/Home/Home';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
