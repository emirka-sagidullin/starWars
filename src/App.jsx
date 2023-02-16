import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Postlist from './components/Postlist/Postlist';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import People from './components/People/People';
import Planets from './components/Planets/Planets';
import Main from './components/Main/Main';
import Film from './components/Film/Film';
import Planet from './components/Planet/Planet';
import Human from './components/Human/Human';

function App() {
  const [isPostLoading, setIsPostLoading] = useState(true);
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [films, setFilms] = useState([]);
  const [filmTitle, setFilmTitle] = useState('');
  const [humanName, setHumanName] = useState('');
  const [planetName, setPlanetName] = useState('');

  async function fetchPosts() {
    setTimeout(async () => {
      const data_people = await fetch('https://swapi.dev/api/people');
      const newData_people = await data_people.json();
      const people_js = await newData_people.results;
      const data_planets = await fetch('https://swapi.dev/api/planets');
      const newData_planets = await data_planets.json();
      const planets_js = await newData_planets.results;
      const data_films = await fetch('https://swapi.dev/api/films');
      const newData_films = await data_films.json();
      const films_js = await newData_films.results;
      setPeople(people_js);
      setPlanets(planets_js);
      setFilms(films_js);
      console.log(people_js);
      console.log(planets_js);
      console.log(films_js);
      setIsPostLoading(false);
    }, 1000);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Router>
      {isPostLoading ? (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Main films={films} setFilmTitle={setFilmTitle} />} />
            <Route
              path="/people"
              element={<People people={people} setHumanName={setHumanName} />}
            />
            <Route
              path="/planets"
              element={
                <Planets planets={planets} planetName={planetName} setPlanetName={setPlanetName} />
              }
            />
            <Route path="/Film/:id" element={<Film films={films} filmTitle={filmTitle} />} />
            <Route path="/Human/:id" element={<Human humanName={humanName} people={people} />} />
            <Route
              path="/Planet/:id"
              element={<Planet planetName={planetName} planets={planets} />}
            />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
