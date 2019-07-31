import React, { useState } from 'react';
import PropTypes from 'prop-types';


function Weights({ weights, saveWeight, deleteWeight }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleKeyUp(e) {
    if (e.keyCode === 13) {
      saveWeight(value);
      setValue('');
    }
  }

  return (
    <section className='weights'>
      <section>
        <div className='weightInput'>
          <div>
            Add Current Weight
          </div>
          <div>
            {(new Date()).toLocaleString()}
          </div>
          <div>
            <input
              id='yo'
              type='number'
              min='0'
              max='1000'
              step='0.1'
              value={value}
              onChange={handleChange}
              onKeyUp={handleKeyUp}
            />
          </div>
        </div>
        <div className='weightValues'>
          <header>
            Values
          </header>
          <main>
            { weights.reverse().map((value) => (
              <div key={value.time}>
                <span className='weight'>
                  {value.weight}
                </span>
                <span className='time'>
                  {(new Date(value.time)).toLocaleString()}
                </span>
                <button onClick={() => deleteWeight(value.time)}>
                  Delete
                </button>
              </div>
            ))}
          </main>
        </div>
      </section>
    </section>
  );
}

Weights.propTypes = {
  weights: PropTypes.arrayOf(PropTypes.object),
  saveWeight: PropTypes.func,
  deleteWeight: PropTypes.func,
};

export default Weights;
