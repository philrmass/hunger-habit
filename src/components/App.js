import React, { useEffect, useState } from 'react';
import '../style/App.css';
import { useLocalStorage } from '../utilities/storage';

function averageMonths(weights) {
  const aves = Array.from(Array(12), () => 0);
  const counts = Array.from(Array(12), () => 0);
  weights.forEach((weight) => {
    aves[weight.month] += parseInt(weight.weight);
    counts[weight.month]++;
  });
  return aves.map((ave, index) => counts[index] === 0 ? 0 : (ave / counts[index]));
}

function stdDevMonths(weights, averages) {
  const sums = Array.from(Array(12), () => 0);
  const counts = Array.from(Array(12), () => 0);
  weights.forEach((weight) => {
    const diff = parseInt(weight.weight) - averages[weight.month];
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
      }
    });
    setYears(averaged);
  }, [weights]);

  function saveWeight(e) {
    if(e.keyCode === 13) {
      setWeights([...weights, {
        time: Date.now(),
        weight: e.target.value,
      }]);
    }
  }

  function deleteWeight(time) {
    setWeights(weights.filter((value) => value.time !== time));
  }

  const date = new Date();
  return (
    <div className="page">
      <main className="weightMain">
        <section>
          <div className="weightInput">
            <div>
              Add Current Weight
            </div>
            <div>
              {(new Date()).toLocaleString()}
            </div>
            <div>
              <input 
                type="number"
                min="0"
                max="1000"
                step="0.1"
                onKeyUp={saveWeight}
              />
            </div>
          </div>
          <div className="weightValues">
            <header>
              Values
            </header>
            <main>
              { weights.map((value) => (
                <div key={value.time}>
                  <span className="weight">
                    {value.weight}
                  </span>
                  <span className="time">
                    {(new Date(value.time)).toLocaleString()}
                  </span>
                  <button onClick={() => deleteWeight(value.time)}>
                    Delete
                  </button>
                </div>
              ))}
            </main>
          </div>
        </section>
        <section>
          <div>
            Averages
          </div>
          <ul>
            { years.map((year) => (
              <li key={year}>
                {year.year}
                <ul>
                  { year.monthAves.map((ave, index) => 
                    ((ave != 0) &&
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
      </main>
    </div>
  );
}

export default App;
