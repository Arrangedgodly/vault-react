import React from "react";
import { CurrentSafeTotalContext } from '../contexts/CurrentSafeTotalContext';

function Buttons({ solo, group, single, bunch, container, button, count, square, name, handleSafeTotal }) {
    const [singleTracker, setSingleTracker] = React.useState(localStorage.getItem(solo) | 0);
    const [bunchTracker, setBunchTracker] = React.useState(localStorage.getItem(group) | 0);
    const [totalTracker, setTotalTracker] = React.useState(localStorage.getItem(name) | 0);
    const safe = React.useContext(CurrentSafeTotalContext);

    const setSingle = (e) => {
        if (e.target.value < 0) {
            setSingleTracker(0);
            localStorage.setItem(solo, 0);
        } else {
            setSingleTracker(e.target.value);
            localStorage.setItem(solo, e.target.value);
        } 
    }

    const setBunch = (e) => {
        if (e.target.value < 0) {
            setBunchTracker(0);
            localStorage.setItem(group, 0);
        } else {
            setBunchTracker(e.target.value);
            localStorage.setItem(group, e.target.value);
        }
    }

    const checkTotals = () => {
        setTotalTracker((single * singleTracker) + (bunch * bunchTracker));
        localStorage.setItem(name, totalTracker);
    }

    const handleDenominationTotal = () => {
      safe[name] = totalTracker;
    }

    React.useEffect(() => {
        checkTotals();
    }, [singleTracker])

    React.useEffect(() => {
        checkTotals();
    }, [bunchTracker])

    React.useEffect(() => {
      handleDenominationTotal();
    }, [totalTracker])

    React.useEffect(() => {
      handleSafeTotal()
    }, [totalTracker])

    return (
        <div className={`containers ${container}`}>
            <div className="container">
              <h2 className={`${button}`}>{solo}</h2>
              <input type="number" value={singleTracker} className={`${count}`} onChange={setSingle} required />
            </div>
            <div className="container">
              <h2 className={`${button}`}>{group}</h2>
                <input type="number" value={bunchTracker} className={`${count}`} onChange={setBunch} required />
            </div>
            <div className="container">
              <div className={`${square}`}>
                <h2 className={`${button} button__label_alt`}>Total</h2>
                <div className="count count_alt">
                    {totalTracker}
                </div>
              </div>
            </div>
        </div>
    );
}

export default Buttons;