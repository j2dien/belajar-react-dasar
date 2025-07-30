import Todo from "./Todo";

export default function TodoList() {
    const data = [
        {
            text: "Belajar HTML",
            isCompleted: true,
            isDeleted: true
        },
        {
            text: "Belajar CSS",
            isCompleted: true,
        },
        {
            text: "Belajar Javascript",
            isCompleted: true
        },
        {
            text: "Belajar React",
            isCompleted: false
        }
    ]

    const todos = data.map((todo) => (
        <Todo {...todo} />
    ));
  return (
    <ul>
      {todos}
    </ul>
  );
}
