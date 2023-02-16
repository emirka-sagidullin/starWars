import React from 'react';
import { useNavigate } from 'react-router-dom';

const Planets = ({ planets, planetName, setPlanetName }) => {
  const navigate = useNavigate();

  const changePlanet = (namePlanet) => {
    setPlanetName(namePlanet);
    navigate(`/Planet/${namePlanet}`);
  };
  const result = planets.map((planet) => {
    return (
      <div key={planet.name}>
        <h2>{planet.name}</h2>
        <button
          onClick={() => {
            changePlanet(planet.name);
          }}>
          Подробнее
        </button>
      </div>
    );
  });

  return <div>{result}</div>;
};

export default Planets;
