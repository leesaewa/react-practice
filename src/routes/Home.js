// 기본적으로 로딩하거나 영화 리스트를 보여주는 화면

import { useState } from "react";
import Slide from "../components/Slide";

function Home() {
  const GROUP_BOX = {
    "High Rating": "minimum_rating=8",
    Thriller: "genre=thriller",
    Mystery: "genre=mystery",
    Crime: "genre=crime",
    Drama: "genre=drama",
    Adventure: "genre=adventure",
    Action: "genre=action",
    Music: "genre=music",
    Romance: "genre=romance",
  };

  const GROUP_KEY = Object.keys(GROUP_BOX);

  return (
    <main id="main">
      <h1>Movie Information</h1>

      {GROUP_KEY.map((group) => {
        return (
          <section key={group}>
            <h2>{group}</h2>
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
