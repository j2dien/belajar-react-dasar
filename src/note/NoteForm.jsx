import { useState } from "react";

export default function NoteForm({ onAddNote }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    onAddNote(text);
    setText("");
  }
  return (
    <>
      <input
        type="text"
        placeholder="Add note"
        value={text}
        onChange={handleChange}
          />
          <button onClick={handleClick}>Add</button>
    </>
  );
}
