import React from 'react';
import { useLocalStorage } from '../utilities/storage';
import Averages from './Averages';
import Graph from './Graph';
import WeightInput from './WeightInput';
import Weights from './Weights';


function App() {
  const [weights, setWeights] = useLocalStorage('weights', []);

  function saveWeight(value) {
    setWeights([...weights, {
      time: Date.now(),
      weight: value,
    }]);
  }

  function deleteWeight(time) {
    setWeights(weights.filter((value) => value.time !== time));
  }

  function exportWeights() {
    console.log('Export', weights.length);
  }

  return (
    <main className='page'>
      <WeightInput
        saveWeight={saveWeight}
        exportWeights={exportWeights}
      />
      <Weights
        weights={weights}
        deleteWeight={deleteWeight}
      />
      <div className='spacer'></div>
      <Averages
        weights={weights}
      />
      <div className='spacer'></div>
      <Graph
        weights={weights}
      />
    </main>
  );
}

export default App;
