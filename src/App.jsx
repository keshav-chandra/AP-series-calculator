import React, { useState } from 'react';
import './App.css';

function NumberInputForm() {
  const [firstTerm, setFirstTerm] = useState('');
  const [commonDifference, setCommonDifference] = useState('');
  const [numberOfTerms, setNumberOfTerms] = useState('');
  const [seriesSum, setSeriesSum] = useState(null);
  const [apSeries, setAPSeries] = useState([]);

  const handleCalculateClick = () => {
    const a = Number(firstTerm);
    const d = Number(commonDifference);
    const n = Number(numberOfTerms);

    // Calculate the sum of the AP series
    const sum = (n * (2 * a + (n - 1) * d)) / 2;

    // Calculate the AP series
    const apSeriesArray = Array.from({ length: n }, (_, i) => a + i * d);

    setSeriesSum(sum);
    setAPSeries(apSeriesArray);
  };

  return (
    <div className='get-lost'>
     <center>  <h1 class="h1">  AP Series Calculator</h1>
      <p class="p">Welcome to Keshav's AP-Series Calculator </p>
    </center>
    <div className="form-container">
      <div className="form">
        <label class="label">First  term (a):</label>
        <input
           type="text"  // Change the type to "text"
           inputMode="numeric"  // Set inputMode to "numeric"
           pattern="[0-9]*"
          value={firstTerm}
          onChange={(e) => setFirstTerm(e.target.value)}
        />
        <br />
        <label class="label">Common Difference (d):</label>
          <input
            type="text"  // Change the type to "text"
            inputMode="numeric"  // Set inputMode to "numeric"
            pattern="[0-9]*"  // Set the pattern to allow only numeric characters
            value={commonDifference}
            onChange={(e) => setCommonDifference(e.target.value)}
          />
        <br />
        <label class="label">Total number (n):  </label>
        <input
          type="text"  // Change the type to "text"
          inputMode="numeric"  // Set inputMode to "numeric"
          pattern="[0-9]*"
          value={numberOfTerms}
          onChange={(e) => setNumberOfTerms(e.target.value)}
        />
        <br />
        <button class="button-17" role="button" onClick={handleCalculateClick}>Submit</button>
      </div>
      {seriesSum !== null && (
       <div className="result">
       <div>
         <strong>Sum of the AP Series:</strong>
         <div>{seriesSum}</div>
       </div>
       <div>
         <strong>AP Series:</strong>
         <div>{apSeries.join(', ')}</div>
       </div>
     </div>
        
      )}
    </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <NumberInputForm />
    </div>
  );
}

export default App;
