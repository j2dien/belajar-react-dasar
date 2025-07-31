import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function Task() {
  const [items, setItems] = useImmer([]);

  return (
    <div>
      <h1>Create Task</h1>
      <TaskForm setItems={setItems} />
      <h1>Task List</h1>
      <TaskList items={items} />
    </div>
  );
}
