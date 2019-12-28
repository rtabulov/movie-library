import React, { useEffect, useState } from 'react';
import axios from 'axios';

import 'tailwindcss/dist/utilities.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import './App.scss';

import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';

const App = () => {
  const omdbKey = '9f776a18';

  const [status, setStatus] = useState('loading');
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const [query, setQuery] = useState('spider-man');

  useEffect(() => {
    setStatus('loading');
    setMovies([]);

    axios
      .get('https://www.omdbapi.com/', {
        params: {
          apikey: omdbKey,
          s: query,
        },
      })
      .then((res) => {
        if (res.data.Response === 'False') {
          setErrorMessage(res.data.Error);
          setStatus('error');
        } else {
          setStatus('ready');
          setMovies(res.data.Search);
        }
      })
      .catch(() => {
        setStatus('error');
      });
  }, [query]);

  const mainSection = () => {
    if (status === 'loading') {
      return (
        <>
          <h1 className="text-center py-20">Loading</h1>
          <div className="flex justify-center">
            <div className="preloader-wrapper big active">
              <div className="spinner-layer spinner-blue">
                <div className="circle-clipper left">
                  <div className="circle" />
                </div>
                <div className="gap-patch">
                  <div className="circle" />
                </div>
                <div className="circle-clipper right">
                  <div className="circle" />
                </div>
              </div>

              <div className="spinner-layer spinner-red">
                <div className="circle-clipper left">
                  <div className="circle" />
                </div>
                <div className="gap-patch">
                  <div className="circle" />
                </div>
                <div className="circle-clipper right">
                  <div className="circle" />
                </div>
              </div>

              <div className="spinner-layer spinner-yellow">
                <div className="circle-clipper left">
                  <div className="circle" />
                </div>
                <div className="gap-patch">
                  <div className="circle" />
                </div>
                <div className="circle-clipper right">
                  <div className="circle" />
                </div>
              </div>

              <div className="spinner-layer spinner-green">
                <div className="circle-clipper left">
                  <div className="circle" />
                </div>
                <div className="gap-patch">
                  <div className="circle" />
                </div>
                <div className="circle-clipper right">
                  <div className="circle" />
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }

    if (status === 'error') {
      return (
        <div className="container">
          {errorMessage && <h1>{errorMessage}</h1>}
          {!errorMessage && <h1>Something went wrong</h1>}
        </div>
      );
    }

    if (status === 'ready') {
      return (
        <div className="container">
          <h1>
            Search results for&nbsp;
            {query}
          </h1>
          <div className="movie-list">
            {movies.map((m) => (
              <Movie
                key={m.imdbID}
                title={m.Title}
                desc={m.Year}
                poster={m.Poster}
              />
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="container">
        <h1>Something went wrong</h1>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <Search onSubmit={setQuery} />
      {mainSection()}
    </div>
  );
};

export default App;
