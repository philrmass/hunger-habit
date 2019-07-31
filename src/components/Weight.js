import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Weights from './Weights';


function Weight({ weights, saveWeight, deleteWeight }) {
  const [value, setValue] = useState('');
  const date = new Date();
  const dayOptions = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
  const timeOptions = { hour: 'numeric', minute: '2-digit' };
  const day = date.toLocaleString('en-us', dayOptions);
  const time = date.toLocaleString('en-us', timeOptions);

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
    <section className='weight'>
      <div className='weightInput'>
        <div className='label'>
          Add Current Weight
        </div>
        <div className='input'>
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
          <div>
            <div>{day}</div>
            <div>{time}</div>
          </div>
          <div></div>
        </div>
      </div>
      <Weights
        weights={weights}
        deleteWeight={deleteWeight}
      />
    </section>
  );
}

Weight.propTypes = {
  weights: PropTypes.arrayOf(PropTypes.object),
  saveWeight: PropTypes.func,
  deleteWeight: PropTypes.func,
};

export default Weight;
