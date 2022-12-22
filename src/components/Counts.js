import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { getStoreCount } from '../utils/api';

function Counts() {
  const [store, setStore] = React.useState(null);
  const [prevCounts, setPrevCounts] = React.useState([]);

  const handleInput = (e) => {
    setStore(e.target.value);
  }

  const handleStoreCount = () => {
    getStoreCount(store)
      .then(res => setPrevCounts(res));
  }

  return (
    <main>
      {store === null ? (
      <form  className='counts__form'>
        <h3 className='counts__header'>Pick your Store:</h3>
        <label
          htmlFor='Quincy'
          className='counts__label'
        >
          <input
            type='radio'
            value='Quincy'
            className='counts__input'
            name='store'
            onChange={handleInput}
          />
          Quincy
        </label>
        <label
          htmlFor='Sheridan'
          className='counts__label'
        >
          <input
            type='radio'
            value='Sheridan'
            className='counts__input'
            name='store'
            onChange={handleInput}
          />
          Sheridan
        </label>
        <label
          htmlFor='Northfield'
          className='counts__label'
        >
          <input
            type='radio'
            value='Northfield'
            className='counts__input'
            name='store'
            onChange={handleInput}
          />
          Northfield
        </label>
        <label
          htmlFor='Littleton'
          className='counts__label'
        >
          <input
            type='radio'
            value='Littleton'
            className='counts__input'
            name='store'
            onChange={handleInput}
          />
          Littleton
        </label>
        <label
          htmlFor='Colfax'
          className='counts__label'
        >
          <input
            type='radio'
            value='Colfax'
            className='counts__input'
            name='store'
            onChange={handleInput}
          />
          Colfax
        </label>
        <label
          htmlFor='Fraser'
          className='counts__label'
        >
          <input
            type='radio'
            value='Fraser'
            className='counts__input'
            name='store'
            onChange={handleInput}
          />
          Fraser
        </label>
        <label
          htmlFor='Nederlands'
          className='counts__label'
        >
          <input
            type='radio'
            value='Nederlands'
            className='counts__input'
            name='store'
            onChange={handleInput}
          />
          Nederlands
        </label>
        <label
          htmlFor='GotG'
          className='counts__label'
        >
          <input
            type='radio'
            value='GotG'
            className='counts__input'
            name='store'
            onChange={handleInput}
          />
          Garden of the Gods
        </label>
      </form>
      ) : (
      <div className='counts'>
        <h3 className='counts__header'>Your Store is: {store}</h3>
        <div className='counts__buttons'>
          <button
            className='counts__button'
            onClick={handleStoreCount}
          >Fetch Previous Counts</button>
          <button
            className='counts__button'
          >Post Current Count</button>
        </div>
        <Accordion className='counts__prev'>
          {prevCounts.map(count => (
              <Accordion.Item eventKey={count._id} key={count._id}>
                <Accordion.Header>{count.date}</Accordion.Header>
                <Accordion.Body className='counts__value'>
                  <div className='counts__coin'>
                    <li>Pennies: {count.count[0].value}</li>
                    <li>Nickels: {count.count[1].value}</li>
                    <li>Dimes: {count.count[2].value}</li>
                    <li>Quarters: {count.count[3].value}</li>
                  </div>
                  <div className='counts__bill'>
                    <li>Ones: {count.count[4].value}</li>
                    <li>Fives: {count.count[5].value}</li>
                    <li>Tens: {count.count[6].value}</li>
                    <li>Large Bills: {count.count[7].value}</li>
                  </div>
                  <li className='counts__final'>Total Count: {count.count[0].value + count.count[1].value + count.count[2].value + count.count[3].value + count.count[4].value + count.count[5].value + count.count[6].value + count.count[7].value}</li>
                </Accordion.Body>
              </Accordion.Item>
          ))}
        </Accordion>
      </div>
      )} 
    </main>
  );
}

export default Counts;