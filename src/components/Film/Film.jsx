import React from 'react';

const Film = ({ films, filmTitle }) => {
  const result = films.map((film) => {
    if (film.title === filmTitle) {
      return (
        <div key={film.title}>
          <h2>{film.title}</h2>
          <h4>Director - {film.director}</h4>
          <h4>Producer - {film.producer}</h4>
        </div>
      );
    }
  });
  return <div>{result}</div>;
};

export default Film;
