export default async function fetchTodo() {
  const res = await fetch(`http://localhost:3000/todos`);

  if (!res.ok) return undefined;

  const todos: Todo[] = await res.json();

  return todos;
}
