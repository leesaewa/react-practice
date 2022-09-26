import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi :");
    return () => console.log("bye :(");
  }, []);
  // 위와 아래의 코드는 같은 결과를 출력하지만,
  // 위의 코드가 더 간결함.
  // useEffect(function () {
  //   console.log("hi :");
  //   return function () {
  //     console.log("bye :(");
  //   };
  // }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
