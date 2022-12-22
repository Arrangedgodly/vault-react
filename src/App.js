import Header from './components/Header';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { CurrentSafeTotalContext } from './contexts/CurrentSafeTotalContext';

function App() {
  const safe = React.useContext(CurrentSafeTotalContext);
  return (
    <CurrentSafeTotalContext.Provider value={safe}>
      <div className="page__wrapper">
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </div>
    </CurrentSafeTotalContext.Provider>
  );
}

export default App;
