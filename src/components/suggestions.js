import { Link } from "react-router-dom";

function Suggestions({ title, coverImg, id }) {
  return (
    <li>
      <figure>
        <img src={coverImg} alt={title} />
        <figcaption>
          <h3>{title}</h3>
          <Link to={`/movie/${id}`}>More View</Link>
        </figcaption>
      </figure>
    </li>
  );
}

export default Suggestions;
