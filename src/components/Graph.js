import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Graph.module.css';


function Weights({ weights }) {
  const oneDay = 1000 * 60 * 60 * 24;
  const timeScale = 4 * oneDay;
  const [graph, setGraph] = useState(null);

  function findLimits(weights) {
    const initialValue = {
      timeMin: Infinity,
      timeMax: 0,
      weightMin: Infinity,
      weightMax: 0,
    };
    return weights.reduce((limits, weight) => {
      limits.timeMin = (weight.time < limits.timeMin) ? weight.time : limits.timeMin;
      limits.timeMax = (weight.time > limits.timeMax) ? weight.time : limits.timeMax;
      const wgt = parseFloat(weight.weight, 10);
      limits.weightMin = (wgt < limits.weightMin) ? wgt : limits.weightMin;
      limits.weightMax = (wgt > limits.weightMax) ? wgt : limits.weightMax;
      return limits;
    }, initialValue);
  }

  function findRanges(limits) {
    const range = limits.weightMax - limits.weightMin;
    const weightPadding = 0.1 * range;
    const weightMin = limits.weightMin - weightPadding;
    const weightMax = limits.weightMax + weightPadding;
    const weightRange = weightMax - weightMin;
    const timeMin = limits.timeMin / timeScale;
    const timeMax = limits.timeMax / timeScale;
    const timeRange = timeMax - timeMin;

    return {
      weightMin,
      weightRange,
      timeMin,
      timeRange,
    };
  }

  function getWeightsPath(weights) {
  }

  function drawGraph(weights, ranges) {
    const path = weights.reduce((path, value, index) => {
      const time = (value.time / timeScale) - ranges.timeMin;
      const weight = ranges.weightRange - (parseFloat(value.weight, 10) - ranges.weightMin);
      path += (index === 0) ? 'M ' : 'L ';
      path += `${time.toFixed(2)} ${weight.toFixed(2)}`;
      return path;
    }, '');
    const weightsPath = getWeightsPath(weights);
    return (
      <svg height='100%' viewBox={`0 0 ${ranges.timeRange} ${ranges.weightRange}`}>
        <path d={path} fill='transparent' stroke='red' strokeWidth='0.2'/>
      </svg>
    );
  }

  useEffect(() => {
    const limits = findLimits(weights);
    const ranges = findRanges(limits);
    setGraph(drawGraph(weights, ranges));
  }, [weights]);

  return (
    <section className='graphSection'>
      <div className={styles.box}>
        {graph}
      </div>
    </section>
  );
}

Weights.propTypes = {
  weights: PropTypes.arrayOf(PropTypes.object),
};

export default Weights;
