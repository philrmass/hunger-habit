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

  function timeToX(time, ranges) {
    return (time / timeScale) - ranges.timeMin;
  }

  function weightToY(weight, ranges) {
    const value = parseFloat(weight, 10);
    return ranges.weightRange + ranges.weightMin - value;
  }

  function drawTimeLines(ranges) {
    return (
      <line x1='0' y1='0' x2='30' y2='30' className={styles.minor}/>
    );
  }

  function drawWeightLines(ranges) {
    let value = Math.round(ranges.weightMin + ranges.weightRange);
    let lines = [];
    while (value >= ranges.weightMin) {
      lines = [...lines, value];
      value -= 1;
    }
    return lines.map((line) => {
      let lineClass = 'normal';
      if ((line % 10) === 0) {
        lineClass = 'major';
      } else if ((line % 5) === 0) {
        lineClass = 'minor';
      }
      const y = weightToY(line, ranges);
      return (
        <line key={y} x1='0' y1={y} x2={ranges.timeRange} y2={y} className={styles[lineClass]}/>
      );
    });
  }

  function getWeightsPath(weights, ranges) {
    return weights.reduce((path, value, index) => {
      const time = (value.time / timeScale) - ranges.timeMin;
      const x = timeToX(value.time, ranges);
      const y = weightToY(value.weight, ranges);
      path += (index === 0) ? 'M ' : 'L ';
      path += `${x.toFixed(2)} ${y.toFixed(2)}`;
      return path;
    }, '');
  }

  function drawGraph(weights, ranges) {
    const weightsPath = getWeightsPath(weights, ranges);
    return (
      <svg height='100%' viewBox={`0 0 ${ranges.timeRange} ${ranges.weightRange}`}>
        <path d={weightsPath} className={styles.weights} />
        {drawWeightLines(ranges)}
        {drawTimeLines(ranges)}
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
