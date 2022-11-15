import { useState, useEffect } from "react";
import Movie from "./Movie";
import SlideButton from "./SlideButton";

function Slide({ movieApi }) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (await fetch(movieApi)).json();

    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, [setMovies]);

  //
  //
  const slide = ["1", "2"];
  const numbSlide = slide.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleSwipe(direction) {
    setCurrentSlide((currentSlide) => currentSlide + direction);
  }

  return (
    <div>
      {loading ? (
        <div className="loading">loading...</div>
      ) : (
        <div className="slide-wrap">
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

          <div className="button-box">
            <SlideButton
              direction="prev"
              onClick={() => {
                handleSwipe(-1);
              }}
            />
            <SlideButton
              direction="next"
              onClick={() => {
                handleSwipe(1);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Slide;
