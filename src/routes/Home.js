// 기본적으로 로딩하거나 영화 리스트를 보여주는 화면

import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);

    // 위는 아래의 간편 버전
    // fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    // )
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setMovies(json.data.movies);
    //     setLoading(false);
    //   });
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <main id="main">
      <h1>Movie Information</h1>
      {loading ? (
        <div className="loading">loading...</div>
      ) : (
        <ul className="movie-wrapper">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </ul>
      )}
    </main>
  );
}

export default Home;
