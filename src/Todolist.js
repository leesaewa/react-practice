import { useState, useEffect } from "react";

function Todolist() {
  const [toDo, setToDo] = useState(""); //setToDo는 toDo값을 수정하는 함수.
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return alert("Please your to do list.");
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo(""); // input값 비우기
  };

  // delete

  const onDelete = (index) => {
    setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
  };

  console.log(toDos);

  return (
    <div className={styles.wrapper}>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do"
        />
        <button>Add To Do</button>
      </form>

      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
