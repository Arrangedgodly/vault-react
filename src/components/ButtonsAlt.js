import React from "react";
import { CurrentSafeTotalContext } from '../contexts/CurrentSafeTotalContext';

function ButtonsAlt({ handleSafeTotal }) {
    const [twentyTracker, setTwentyTracker] = React.useState(0);
    const [fiftyTracker, setFiftyTracker] = React.useState(0);
    const [hundredTracker, setHundredTracker] = React.useState(0);
    const [totalTracker, setTotalTracker] = React.useState(0);
    const safe = React.useContext(CurrentSafeTotalContext);

    const setTwenty = (e) => {
        if (e.target.value < 0) {
            setTwentyTracker(0);
        } else {
            setTwentyTracker(e.target.value);
        }
    }

    const setFifty = (e) => {
        if (e.target.value < 0) {
            setFiftyTracker(0);
        } else {
            setFiftyTracker(e.target.value);
        }
    }

    const setHundred = (e) => {
        if (e.target.value < 0) {
            setHundredTracker(0);
        } else {
            setHundredTracker(e.target.value);
        }
    }

    const checkTotals = () => {
        setTotalTracker((twentyTracker * 20) + (fiftyTracker * 50) + (hundredTracker * 100));
    }

    const handleDenominationTotal = () => {
      safe['Large Bills'] = totalTracker;
    }

    React.useEffect(() => {
        checkTotals()
    }, [twentyTracker])

    React.useEffect(() => {
        checkTotals()
    }, [fiftyTracker])

    React.useEffect(() => {
        checkTotals()
    }, [hundredTracker])

    React.useEffect(() => {
      handleDenominationTotal();
    }, [totalTracker])

    React.useEffect(() => {
      handleSafeTotal()
    }, [totalTracker])

    return (
        <div className="containers containers_red">
            <div className="container">
              <h2 className="button__label button__label_red">Twenty Bills</h2>
                <input type="number" className="count count_red" value={twentyTracker} onChange={setTwenty} required />
            </div>
            <div className="container">
              <h2 className="button__label button__label_red">Fifty Bills</h2>
                <input type="number" className="count count_red" value={fiftyTracker} onChange={setFifty} required />
            </div>
            <div className="container">
              <h2 className="button__label button__label_red">Hundred Bills</h2>
                <input type="number" className="count count_red" value={hundredTracker} onChange={setHundred} required />
            </div>
            <div className="container_square container_square_red">
              <h2 className="button__label button__label_alt_red">Large Bill Total</h2>
              <div className="count count_alt_red" id="redBagTotal">
                {totalTracker}
              </div>
            </div>
          </div>
    );
}

export default ButtonsAlt;