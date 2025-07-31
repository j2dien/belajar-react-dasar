import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import NoteAppImmerReducer from "./NoteAppImmerReducer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NoteAppImmerReducer />
  </StrictMode>
);
