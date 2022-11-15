import { useState, useEffect } from "react";
import Movie from "./Movie";
import SlideButton from "./SlideButton";

function Slide() {
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
  };

  useEffect(() => {
    getMovies();
  }, []);

  //
  //
  const slide = [movies];
  const numbSlide = slide.length;
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(numbSlide);

  // console.log(setCurrentSlide);

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
