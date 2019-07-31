import React from 'react';
import PropTypes from 'prop-types';


function Averages({ weights, years }) {
  const date = new Date();

  return (
    <section className='averages'>
      <div>
        Averages
      </div>
      <ul>
        { years.map((year) => (
          <li key={year}>
            {year.year}
            <ul>
              { year.monthAves.map((ave, index) => 
                ((ave !== 0) &&
                  <li key={`${year}-${index}`} className='average'>
                    <div>
                      {(new Date(date.setMonth(index))).toLocaleString('en', { month: 'long' })}
                    </div>
                    <div>
                      {ave.toFixed(1)}
                    </div>
                    <div>
                      ({year.monthStdDevs[index].toFixed(1)})
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
