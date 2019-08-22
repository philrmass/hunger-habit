import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Averages.module.css';
import { groupByMonth, computeAverages, computeStdDevs } from '../utilities/average';


function Averages({ weights, years }) {
  const [averages, setAverages] = useState([]);
  const date = new Date();

  useEffect(() => {
    const months0 = groupByMonth(weights);
    const months1 = computeAverages(months0);
    const months2 = computeStdDevs(months1);
    setAverages(months2);
  }, [weights]);

  return (
    <section className='averagesSection'>
      <div className={styles.box}>
        <div className={styles.values}>
          <ul>
            {averages.map((value) => (
              <li key={`${value.year}_${value.month}`}>
                <div>
                  {(new Date(date.setMonth(value.month - 1))).toLocaleString('en', { month: 'long' })}
                </div>
                <div>
                  {value.year}
                </div>
                <div>
                  {value.average}
                </div>
                <div>
                  {value.stdDev}
                </div>
                <div>
                  {value.count}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

Averages.propTypes = {
  weights: PropTypes.arrayOf(PropTypes.object),
  years: PropTypes.arrayOf(PropTypes.object),
};

export default Averages;
