import { useRef, useContext, useState, useMemo } from "react";
import Note from "./Note";
import { NotesContext } from "./NoteContext";

export default function NoteList() {
    const notes = useContext(NotesContext);
    const [search, setSearch] = useState("");
    const searchInput = useRef(null);

    const filteringNotes = useMemo(() => {
        console.info("Filtering notes");
        return notes.filter(note => note.text.includes(search));
    }, [notes, search])

    function handleSearch() {
        console.info("Handle Search");
        setSearch(searchInput.current.value);
    }

    return (
        <div>
            <input ref={searchInput} placeholder="Search" />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {filteringNotes.map(note => (
                    <li key={note.id}>
                        <Note note={note} />
                    </li>
                ))}
            </ul>
        </div>
    )
}