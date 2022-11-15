import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({
  id,
  coverImg,
  title,
  summary,
  genres,
  numbSlide,
  currentSlide,
}) {
  return (
    <li
      className="movie-wrapper__item"
      style={{
        transform: `translateX(${(-100 / numbSlide) * (0.5 + currentSlide)}%)`,
      }}
    >
      <h2>{title}</h2>
      <img src={coverImg} alt={title} />
      <p>{summary}</p>

      <ul className="genre-wrap">
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <Link to={`/movie/${id}`} className="button">
        More Detail
      </Link>
    </li>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
