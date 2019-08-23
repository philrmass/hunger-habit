import React from 'react';
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
      <div key={value.time} className={styles.value}>
        <div className={styles.weight}>
          {value.weight}
        </div>
        <div className={styles.time}>
          <div>
            {day}
          </div>
          <div>
            {time}
          </div>
        </div>
        <div>
          <button
            className={styles.deleteButton}
            onClick={() => deleteWeight(value.time)}
          >
            X
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className='weightsSection'>
      <div className={styles.box}>
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
