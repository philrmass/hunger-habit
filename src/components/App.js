import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '../utilities/storage';
import Averages from './Averages';
import Graph from './Graph';
import Weight from './Weight';


function averageMonths(weights) {
  const aves = Array.from(Array(12), () => 0);
  const counts = Array.from(Array(12), () => 0);
  weights.forEach((weight) => {
    aves[weight.month] += parseInt(weight.weight, 10);
    counts[weight.month]++;
  });
  return aves.map((ave, index) => counts[index] === 0 ? 0 : (ave / counts[index]));
}

function stdDevMonths(weights, averages) {
  const sums = Array.from(Array(12), () => 0);
  const counts = Array.from(Array(12), () => 0);
  weights.forEach((weight) => {
    const diff = parseInt(weight.weight, 10) - averages[weight.month];
    sums[weight.month] += (diff * diff);
    counts[weight.month]++;
  });
  const y = sums.map((sum, index) => counts[index] === 0 ? 0 : Math.sqrt(sum / counts[index]));
  return y;
}

function App() {
  const [weights, setWeights] = useLocalStorage('weights', []);
  const [years, setYears] = useState([]);

  useEffect(() => {
    const sortedWeights = weights.sort((a, b) => a.time - b.time);
    setWeights(sortedWeights);

    const yearsObj = weights.reduce((years, weight) => {
      const date = new Date(weight.time);
      const year = date.getFullYear();
      const month = date.getMonth();
      if (!years[year]) {
        years[year] = {
          year,
          weights: [],
        };
      }
      years[year].weights.push({ month, weight: weight.weight });
      return years;
    }, {});
    const sorted = Object.values(yearsObj).sort((a, b) => a.year - b.year);
    const averaged = sorted.map((year) => {
      const monthAves = averageMonths(year.weights);
      return {
        year: year.year,
        monthAves,
        monthStdDevs: stdDevMonths(year.weights, monthAves),
      };
    });
    setYears(averaged);
  }, [weights]);

  function saveWeight(value) {
    setWeights([...weights, {
      time: Date.now(),
      weight: value,
    }]);
  }

  function deleteWeight(time) {
    setWeights(weights.filter((value) => value.time !== time));
  }

  return (
    <main className='page'>
      <div className='top'>
        <Weight
          weights={weights}
          saveWeight={saveWeight}
          deleteWeight={deleteWeight}
        />
        <Averages
          weights={weights}
          years={years}
        />
      </div>
      <Graph
        weights={weights}
      />
    </main>
  );
}

export default App;
