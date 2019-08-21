import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Weights.module.css';


function Weights({ weights, deleteWeight }) {
  function buildWeight(value) {
    const date = new Date(value.time);
    const dayOptions = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: '2-digit' };
    const day = date.toLocaleString('en-us', dayOptions);
    const time = date.toLocaleString('en-us', timeOptions);

    return (
      <Fragment key={value.time}>
        <div className='weight'>
          {value.weight}
        </div>
        <div className='time'>
          <div>
            {day}
          </div>
          <div>
            {time}
          </div>
        </div>
        <div>
          <button onClick={() => deleteWeight(value.time)}>
            X
          </button>
        </div>
      </Fragment>
    );
  }

  return (
    <section className={styles.box}>
      <div className={styles.values}>
        { weights.slice(0).reverse().map((value) => buildWeight(value)) }
      </div>
    </section>
  );
}

Weights.propTypes = {
  weights: PropTypes.arrayOf(PropTypes.object),
  deleteWeight: PropTypes.func,
};

export default Weights;
