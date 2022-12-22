import Header from './components/Header';
import Main from './components/Main';
import Counts from './components/Counts';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { CurrentSafeTotalContext } from './contexts/CurrentSafeTotalContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const safe = React.useContext(CurrentSafeTotalContext);
  return (
    <CurrentSafeTotalContext.Provider value={safe}>
      <div className="page__wrapper">
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/counts' element={<Counts />} />
        </Routes>
      </div>
    </CurrentSafeTotalContext.Provider>
  );
}

export default App;
