import { useState } from "react";

export default function TaskForm({ setItems }) {
  const [item, setItem] = useState("");

  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    setItems((draft) => {
      draft.push(item);
    });
    setItem("");
  }

  return (
    <>
      <form>
        <input type="text" value={item} onChange={handleChange} />
        <button type="submit" onClick={handleClick}>
          Add Task
        </button>
      </form>
    </>
  );
}
