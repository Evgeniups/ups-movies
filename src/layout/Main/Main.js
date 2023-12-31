import React, {useState, useEffect} from 'react';
import Movies from '../../components/Movies/Movies';
import Preloader from '../../components/Preloader/Preloader';
import Search from '../../components/Search/Search';

// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = 'e1a00c61';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (str, type = 'all') => {
    setLoading(true);

    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=mission+impossible`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  return (
    <main className='container content'>
      <Search searchMovies={searchMovies} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
};

export default Main;
