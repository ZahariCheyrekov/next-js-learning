"use client";

import { FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState, useTransition, ChangeEvent, MouseEvent } from "react";
import Link from "next/link";

export default function Todo(todo: Todo) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  const isMutating = isFetching || isPending;

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setIsFetching(true);

    const res = await fetch(`http://127.0.0.1:3500/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...todo,
        completed: !todo.completed,
      }),
    });

    await res.json();

    setIsFetching(false);

    startTransition(() => {
      // Refresh the current route and fetch new data
      // from the server without losing
      // client-side browser or React state.
      router.refresh();
    });
  };

  const handleDelete = async (e: MouseEvent<HTMLButtonElement>) => {
    setIsFetching(true);

    const res = await fetch(`http://127.0.0.1:3500/todos/${todo.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: todo.id,
      }),
    });

    await res.json();

    setIsFetching(false);

    startTransition(() => {
      // Refresh the current route and fetch new data
      // from the server without losing
      // client-side browser or React state.
      router.refresh();
    });
  };

  return (
    <article style={{ opacity: !isMutating ? 1 : 0.7 }}>
      <label>
        <Link href={`/edit/${todo.id}`}>{todo.title}</Link>
      </label>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          id="completed"
          name="completed"
          onChange={handleChange}
          disabled={isPending}
        />

        <button onClick={handleDelete} disabled={isPending}>
          <FaTrash />
        </button>
      </div>
    </article>
  );
}
