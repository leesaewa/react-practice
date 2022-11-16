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
  const slideRef = useRef([movies]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const isLastSlide = currentSlide === movies.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
    console.log(newIndex);

    slideRef.current.style.transition = `all 0.5s ease`;
    slideRef.current.style.transform = `translateX(-${newIndex}00%)`;
  };

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? movies.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
    console.log(newIndex);

    slideRef.current.style.transition = `all 0.5s ease`;
    slideRef.current.style.transform = `translateX(-${newIndex}00%)`;
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
