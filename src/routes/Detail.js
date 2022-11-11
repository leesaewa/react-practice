import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <section>
      {loading ? <div className="loading">Loading...</div> : <div>hi</div>}

      <div></div>
    </section>
  );
}
export default Detail;
