import Todo from "./Todo";

export default function TodoList() {
    const data = [
      {
        id: 1,
        text: "Belajar HTML",
        isCompleted: true,
        isDeleted: true,
      },
      {
        id: 2,
        text: "Belajar CSS",
        isCompleted: true,
      },
      {
        id: 3,
        text: "Belajar Javascript",
        isCompleted: true,
      },
      {
        id: 4,
        text: "Belajar React",
        isCompleted: false,
      },
      {
        id: 5,
        text: "Belajar React Router",
        isCompleted: false,
      },
    ];


  return (
    <ul>
          {data.map((todo) => (
          <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
