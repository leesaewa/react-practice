import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // console.log("i run all the time");

  // 처음 실행(렌더) 시에 딱 한 번만 실행
  useEffect(() => {
    console.log("I run only once.");
  }, []);

  // keyword가 변할 때마다 실행
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]);

  // counter가 변할 때마다 실행
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
