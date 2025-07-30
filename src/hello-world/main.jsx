import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import Todo from "../todolist/Todo";
import TodoList from "../todolist/TodoList";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoList />
    </Container>
  </StrictMode>
);
