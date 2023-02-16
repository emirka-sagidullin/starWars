import React from 'react';

const Human = ({ people, humanName }) => {
  const result = people.map((human) => {
    if (human.name === humanName) {
      return (
        <div key={human.name}>
          <h2>{human.name}</h2>
          <h4>Height - {human.height}</h4>
          <h4>Mass - {human.mass}</h4>
        </div>
      );
    }
  });
  return <div>{result}</div>;
};

export default Human;
