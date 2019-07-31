import React from 'react';
import PropTypes from 'prop-types';

function Weights({ weights }) {
  return (
    <section className='graph'>
      <div>Graph</div>
    </section>
  );
}

Weights.propTypes = {
  weights: PropTypes.arrayOf(PropTypes.object),
};

export default Weights;
