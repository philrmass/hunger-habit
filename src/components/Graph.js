import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Graph.module.css';


function Weights({ weights }) {
  return (
    <section className={styles.main}>
    </section>
  );
}

Weights.propTypes = {
  weights: PropTypes.arrayOf(PropTypes.object),
};

export default Weights;
