// 기본적으로 로딩하거나 영화 리스트를 보여주는 화면
import Slide from "../components/Slide";

function Home() {
  const GROUP_BOX = {
    "High Rating": "minimum_rating=8",
    Drama: "genre=drama",
    Adventure: "genre=adventure",
    Fantasy: "genre=fantasy",
    "Sci-fi": "genre=sci-fi",
    Crime: "genre=crime",
    Mystery: "genre=mystery",
    Thriller: "genre=thriller",
    Horror: "genre=horror",
    Action: "genre=action",
    Comedy: "genre=comedy",
    Animation: "genre=animation",
    Romance: "genre=romance",
  };

  const GROUP_KEY = Object.keys(GROUP_BOX);

  return (
    <main id="main">
      <h1>Movie Information</h1>

      {GROUP_KEY.map((group) => {
        return (
          <section key={group}>
            <h2 className="movie-ttl">{group}</h2>
            <Slide
              movieApi={`https://yts.mx/api/v2/list_movies.json?limit=10&${GROUP_BOX[group]}&sort_by=rating`}
            />
          </section>
        );
      })}
    </main>
  );
}

export default Home;
