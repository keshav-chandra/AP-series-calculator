import React from 'react';

function APSeries({ firstTerm, numberOfTerms ,commonDifference }) {
  const apSeries = [];

  for (let i = 0; i < numberOfTerms; i++) {
    apSeries.push(firstTerm + i * commonDifference);
  }

  return (
    <div>
      <h2>Arithmetic Progression (AP) Series</h2>
      <ul>
        {apSeries.map((term, index) => (
          <li key={index}>{term}</li>
        ))}
      </ul>
    </div>
  );
}

export default APSeries;
