import React from 'react';
import '../style/App.css';
import { useLocalStorage } from '../utilities/storage';

function App() {
  const [weights, setWeights] = useLocalStorage('weights', []);

  const saveWeight = (e) => {
    if(e.keyCode === 13) {
      setWeights([...weights, {
        time: Date.now(),
        weight: e.target.value,
      }]);
    }
  }

  const deleteWeight = (time) => {
    setWeights(weights.filter((value) => value.time !== time));
  }

  return (
    <div className="page">
      <main className="weightMain">
        <section className="weightInput">
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
        </section>
        <section className="weightValues">
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
        </section>
      </main>
    </div>
  );
}

export default App;
