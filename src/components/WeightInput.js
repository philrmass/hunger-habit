import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/WeightInput.module.css';


function WeightInput({ saveWeight }) {
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
    <section className='weightInputSection'>
      <div className={styles.inputBox}>
        <div className={styles.label}>
          Add Current Weight
        </div>
        <div className={styles.input}>
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
    </section>
  );
}

WeightInput.propTypes = {
  saveWeight: PropTypes.func,
};

export default WeightInput;
