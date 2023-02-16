import React from 'react';

const Planet = ({ planets, planetName }) => {
  const result = planets.map((planet) => {
    if (planet.name === planetName) {
      return (
        <div key={planet.name}>
          <h2>{planet.name}</h2>
          <h4>Climate - {planet.climate}</h4>
          <h4>Diameter - {planet.diameter}</h4>
        </div>
      );
    }
  });

  return <div>{result}</div>;
};

export default Planet;
