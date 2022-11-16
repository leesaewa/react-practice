import { useState, useEffect, useRef } from "react";
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
  const slideRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide - 1);

    slideRef.current.style.transition = `all 0.5s ease`;
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    if (currentSlide === 0) {
      setCurrentSlide(1);
    }
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide + 1);
    slideRef.current.style.transition = `all 0.5s ease`;
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    if (movies.length % 4 <= currentSlide) {
      setCurrentSlide(currentSlide - 1);
    } else {
      // setCurrentSlide(1);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="loading">loading...</div>
      ) : (
        <div className="slide-wrap">
          <ul className="movie-wrapper" ref={slideRef}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                slideRef={slideRef}
              />
            ))}
          </ul>

          <div className="button-box">
            <SlideButton onClick={prevSlide} btnName="prev" />
            <SlideButton onClick={nextSlide} btnName="next" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Slide;
