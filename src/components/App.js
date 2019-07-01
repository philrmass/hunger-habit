import React from 'react';
import '../style/App.css';
import storage from '../utilities/storage';

function App() {
  const saveWeight = (e) => {
    if(e.keyCode === 13) {
      console.log('SAVE', e.target.value);
    }
  }

  return (
    <div className="page">
      <main className="weight">
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
            <div>Value0</div>
            <div>Value1</div>
          </main>
        </section>
      </main>
    </div>
  );
}

export default App;
