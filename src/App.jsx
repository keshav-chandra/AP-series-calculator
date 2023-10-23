import React, { useState } from 'react';
import APSeries from './ap.jsx';

function NumberInputForm() {
  // State to manage input values
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  
 

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Process the input values as needed
    // For this example, we'll just log them to the console
    console.log('a', input1);
    console.log('d', input2);
    console.log('n', input3);
    
  };

  return (
    <div>
      <h1>AP calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="a"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="n"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
         <br/>
        <input
          type="number"
          placeholder="d"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
        />
         <br />
       
        <button type="submit">Submit</button>
       
      </form>
       {input1 && input2 && input3 && (
        <APSeries
          firstTerm={Number(input1)}
          commonDifference={Number(input3)}
          numberOfTerms={Number(input2)}
        />
      )}
    </div>
    
  );
}

export default NumberInputForm;
