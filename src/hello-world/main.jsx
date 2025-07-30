import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import TodoList from "../todolist/TodoList";
import Table from "../table/Table";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";
import Toolbar from "../button/Toolbar";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
            <TodoList />
            <Table />
            <AlertButton text="Click Me!" message="You clicked me!" />
            <MyButton text="Smash Me!" onSmash={() => alert("Button smashed!")} />
            <Toolbar onClick={(e) => {
                e.stopPropagation(); //mencegah event menjalar ke atas
                alert("Toolbar clicked!");
            }} />
    </Container>
  </StrictMode>
);
