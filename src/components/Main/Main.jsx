import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = ({ films, setFilmTitle }) => {
  const navigate = useNavigate();

  const changeFilm = (nameFilm) => {
    setFilmTitle(nameFilm);
    navigate(`/Film/${nameFilm}`);
  };
  const result = films.map((film) => {
    return (
      <div key={film.title}>
        <h2>{film.title}</h2>
        <button
          onClick={() => {
            changeFilm(film.title);
          }}>
          Подробнее
        </button>
      </div>
    );
  });

  return <div>{result}</div>;
};

export default Main;
