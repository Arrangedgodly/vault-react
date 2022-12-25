import Header from "./components/Header";
import Main from "./components/Main";
import Counts from "./components/Counts";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { CurrentSafeTotalContext } from "./contexts/CurrentSafeTotalContext";
import { CurrentStoreContext } from "./contexts/CurrentStoreContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const safe = React.useContext(CurrentSafeTotalContext);
  const [store, setStore] = React.useState(localStorage.getItem('store'));

  const handleInput = (e) => {
    setStore(e.target.value);
  }

  return (
    <CurrentStoreContext.Provider value={store}>
      <CurrentSafeTotalContext.Provider value={safe}>
        <div className="page__wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/counts" element={<Counts handleInput={handleInput}/>} />
          </Routes>
        </div>
      </CurrentSafeTotalContext.Provider>
    </CurrentStoreContext.Provider>
  );
}

export default App;
