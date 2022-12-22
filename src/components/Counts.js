import React from 'react';

function Counts() {
  const [store, setStore] = React.useState(null);

  return (
    <main>
      {store === null ? (
      <form>
        <p>Pick your Store:</p>
        <label
          htmlFor='quincy'
        >
          <input
            type='radio'
            value='quincy'
          />
          Quincy
        </label>
        <label
          htmlFor='sheridan'
        >
          <input
            type='radio'
            value='sheridan'
          />
          Sheridan
        </label>
      </form>
      ) : (
      <div>
        <p>Your Store is:</p>
      </div>
      )} 
    </main>
  );
}

export default Counts;