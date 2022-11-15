import { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { IoIosArrowBack, IoMdThumbsUp, IoMdStar } from "react-icons/io";
import Suggestions from "../components/suggestions";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const [movies, setSuggestion] = useState([]);
  const backBtn = useHistory();

  const backHistory = () => {
    backBtn.goBack();
  };

  const getDetail = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setLoading(false);
    setDetails(json.data.movie);
    setGenres(json.data.movie.genres);
  }, [id]);

  const getSuggestion = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`)
    ).json();

    setSuggestion(json.data.movies);
    console.log(json);
  }, [id]);

  useEffect(() => {
    if (id !== "" && id.length > 1) {
      getDetail();
      getSuggestion();
    }
  }, [getDetail, getSuggestion, id]);

  return (
    <main id="detail">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <section>
          <header>
            <div>
              <button onClick={backHistory}>
                <IoIosArrowBack />
              </button>
              <h2>{movie.title}</h2>
            </div>
          </header>

          <aside
            className="bg-wrap"
            style={{
              backgroundImage: `url(${movie.background_image_original})`,
            }}
          ></aside>

          <div className="movie-wrap">
            <div className="movie-wrap__info">
              <h1>{movie.title}</h1>
              <ul className="info-wrap">
                <li>{movie.year}</li>
                <li>{movie.runtime}m</li>
                <li>
                  <IoMdStar /> {movie.rating}
                </li>
                <li>
                  <IoMdThumbsUp /> {movie.like_count}
                </li>
              </ul>

              <ul className="genre-wrap">
                {genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>

            <figure className="movie-wrap__img">
              <img src={movie.large_cover_image} alt={movie.title} />

              <figcaption>
                <h3>Trailer</h3>
                <iframe
                  src={`https://www.youtube.com/embed/${movie.yt_trailer_code}?controls=0?autoplay=1&mute=1`}
                  title={movie.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                <div className="movie-wrap__story">
                  <h4>Storyline</h4>
                  <p>{movie.description_full}</p>
                </div>
              </figcaption>
            </figure>
          </div>

          <article className="Suggestion-wrap">
            <h2>Suggestions</h2>
            {movies.map((sug) => (
              <Suggestions
                key={sug.id}
                title={sug.title}
                coverImg={sug.medium_cover_image}
              />
            ))}
          </article>
        </section>
      )}
    </main>
  );
}
export default Detail;
