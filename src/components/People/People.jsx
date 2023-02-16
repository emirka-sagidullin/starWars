import React from 'react';
import { useNavigate } from 'react-router-dom';

const People = ({ people, setHumanName }) => {
  const navigate = useNavigate();

  const changeHuman = (nameHuman) => {
    setHumanName(nameHuman);
    navigate(`/Human/${nameHuman}`);
  };
  const result = people.map((human) => {
    return (
      <div key={human.name}>
        <h2>{human.name}</h2>
        <button
          onClick={() => {
            changeHuman(human.name);
          }}>
          Подробнее
        </button>
      </div>
    );
  });

  return <div>{result}</div>;
};

export default People;
