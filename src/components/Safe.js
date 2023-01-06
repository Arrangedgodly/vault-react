import React from "react";
import Buttons from "./Buttons";
import ButtonsAlt from "./ButtonsAlt";
import { buttonsData } from "../utils/constants";
import { postStoreCount } from "../utils/api";
import { CurrentSafeTotalContext } from "../contexts/CurrentSafeTotalContext";
import { CurrentStoreContext } from "../contexts/CurrentStoreContext";
import ResetPopup from "./ResetPopup";

function Safe() {
  const safe = React.useContext(CurrentSafeTotalContext);
  const store = React.useContext(CurrentStoreContext);
  
  const totalArray = Object.keys(safe);
  const [safeTotal, setSafeTotal] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSafeTotal = () => {
    let total = 0;
    for (let i = 0; i < totalArray.length; i++) {
      total += safe[totalArray[i]];
    }
    setSafeTotal(total);
  };

  const handleReset = () => {
    let storeTemp = localStorage.getItem('store');
    localStorage.clear();
    localStorage.setItem('store', storeTemp);
    window.location.reload();
    handleCloseModal();
  }

  const handleOpenModal = () => {
    setIsOpen(true);
  }

  const handleCloseModal = () => {
    setIsOpen(false);
  }

  const handlePostStoreCount = () => {
    const count = [
      {name: 'Pennies', value: safe.Pennies},
      {name: 'Nickels', value: safe.Nickels},
      {name: 'Dimes', value: safe.Dimes},
      {name: 'Quarters', value: safe.Quarters},
      {name: 'Dollars', value: safe.Dollars},
      {name: 'Fives', value: safe.Fives},
      {name: 'Tens', value: safe.Tens},
      {name: 'Large Bills', value: safe['Large Bills']},
    ];
    postStoreCount(store, count)
      .then(res => {
        console.log(res);
        handleReset();
      })
      .catch(err => console.log(err));
  }

  return (
    <form id="safe">
      {buttonsData.map((buttons) => (
        <Buttons
          solo={buttons.solo}
          group={buttons.group}
          single={buttons.single}
          bunch={buttons.bunch}
          container={buttons.container}
          button={buttons.button}
          count={buttons.count}
          square={buttons.square}
          name={buttons.name}
          key={buttons.name}
          handleSafeTotal={handleSafeTotal}
        />
      ))}
      <ButtonsAlt handleSafeTotal={handleSafeTotal} />
      <div className="containers_alt">
        <h2 className="button__label">Total</h2>
        <div className="count" id="totalCount">
          {safeTotal}
        </div>
        <div
          className={
            safeTotal === 6500
              ? "confirmation confirmation__yes"
              : "confirmation"
          }
        >
          <p className="confirmation__text">PERIOD</p>
          <p className="confirmation__text">POOH!</p>
        </div>
        <div className='footer__buttons'>
          <button
            type="button"
            className="footer__button"
            onClick={handlePostStoreCount}
          >
            Submit
          </button>
          <button
            type="button"
            className="footer__button"
            onClick={handleOpenModal}
          >
            Reset
          </button>
        </div>
      </div>
      <ResetPopup
        isOpen={isOpen}
        handleClose={handleCloseModal}
        handleSubmit={handleReset}
      />
    </form>
  );
}

export default Safe;
