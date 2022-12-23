import React from "react";
import Buttons from "./Buttons";
import ButtonsAlt from "./ButtonsAlt";
import { buttonsData } from "../utils/constants";
import { CurrentSafeTotalContext } from "../contexts/CurrentSafeTotalContext";

function Safe() {
  const safe = React.useContext(CurrentSafeTotalContext);
  const totalArray = Object.keys(safe);
  const [safeTotal, setSafeTotal] = React.useState(0);

  const handleSafeTotal = () => {
    let total = 0;
    for (let i = 0; i < totalArray.length; i++) {
      total += safe[totalArray[i]];
    }
    setSafeTotal(total);
  };

  const handleReset = () => {
    localStorage.clear();
    window.location.reload();
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
          >
            Submit
          </button>
          <button
            type="button"
            className="footer__button"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
}

export default Safe;
