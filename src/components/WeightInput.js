import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/WeightInput.module.css';


function WeightInput({ saveWeight, exportWeights }) {
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
      <div className={styles.box}>
        <div>
          <div className={styles.title}>
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
            <div className={styles.time}>
              <div>{day}</div>
              <div>{time}</div>
            </div>
            <div>
              <button
                className={styles.exportButton}
                onClick={exportWeights}
              >
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

WeightInput.propTypes = {
  saveWeight: PropTypes.func,
  exportWeights: PropTypes.func,
};

export default WeightInput;
