import useStore from "@/store/store";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";

function TodoListItems() {
  const store = useStore((state) => state);

  return (
    <>
      {store.todos.map((todo) => {
        return (
          <div className="flex" key={todo.id}>
            <Checkbox
              onClick={() => store.toggleTodo(todo.id)}
              checked={todo.done}
            />
            <Input
              value={todo.text}
              max={2}
              onChange={(e) => store.updateTodo(todo.id, e.target.value)}
            />
            <Button onClick={() => store.removeTodo(todo.id)}>Delete</Button>
          </div>
        );
      })}
    </>
  );
}

export default function TodoList() {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pt-10 text-center pb-10">
        Todo List
      </h1>
      <TodoListItems />
    </>
  );
}
