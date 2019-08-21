import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Averages.module.css';


function Averages({ weights, years }) {
  const date = new Date();

  return (
    <section className='averagesSection'>
      <div className={styles.title}>
        Averages
      </div>
      <ul>
        { years.map((year) => (
          <li key={year}>
            {year.year}
            <ul>
              { year.monthAves.slice(0).reverse().map((ave, index) =>
                ((ave !== 0) &&
                  <li key={`${year}-${index}`} className='average'>
                    <div>
                      {(new Date(date.setMonth(11 - index))).toLocaleString('en', { month: 'long' })}
                    </div>
                    <div>
                      {ave.toFixed(1)}
                    </div>
                    <div>
                      ({year.monthStdDevs[11 - index].toFixed(1)})
                    </div>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

Averages.propTypes = {
  weights: PropTypes.arrayOf(PropTypes.object),
  years: PropTypes.arrayOf(PropTypes.object),
};

export default Averages;
