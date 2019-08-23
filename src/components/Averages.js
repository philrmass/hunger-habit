import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Averages.module.css';
import { groupByMonth, computeAverages, computeStdDevs } from '../utilities/average';


function Averages({ weights }) {
  const [months, setMonths] = useState([]);
  const date = new Date();

  useEffect(() => {
    const months0 = groupByMonth(weights);
    const months1 = computeAverages(months0);
    const months2 = computeStdDevs(months1);
    setMonths(months2);
  }, [weights]);

  return (
    <section className='averagesSection'>
      <div className={styles.box}>
        <ul>
          {months.slice(0).reverse().map((value) => (
            <li key={`${value.year}_${value.month}`}>
              <div className={styles.month}>
                <div className={styles.date}>
                  {(new Date(date.setMonth(value.month - 1))).toLocaleString('en', { month: 'long' })} {value.year}
                </div>
                <div>
                  <span className={styles.label}>
                    Average
                  </span>
                  <span className={styles.value}>
                    {value.average.toFixed(1)}
                  </span>
                </div>
                <div>
                  <span className={styles.label}>
                    Measurements
                  </span>
                  <span className={styles.value}>
                    {value.count}
                  </span>
                </div>
                <div>
                  <span className={styles.label}>
                    Std Dev
                  </span>
                  <span className={styles.value}>
                    {value.stdDev.toFixed(1)}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

Averages.propTypes = {
  weights: PropTypes.arrayOf(PropTypes.object),
};

export default Averages;
