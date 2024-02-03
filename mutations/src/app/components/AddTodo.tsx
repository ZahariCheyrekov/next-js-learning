"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition, FormEvent, ChangeEvent } from "react";
import { usePathname } from "next/navigation";

const initState: Partial<Todo> = {
  userId: 1,
  title: "",
};

export default function AddTodo() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState(initState);

  const isMutating = isFetching || isPending;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { userId, title } = data;

    setIsFetching(true);

    const res = await fetch(`http://localhost:3000/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        title,
      }),
    });

    await res.json();

    setIsFetching(false);

    setData((prevData) => ({
      ...prevData,
      title: "",
    }));

    startTransition(() => {
      if (pathname === "/add") {
        router.push("/");
      } else {
        // Refresh the current route and fetch new data
        // from the server without losing
        // client-side browser or React state.
        router.refresh();
      }
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;

    setData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  const content = (
    <form onSubmit={handleSubmit} style={{ opacity: !isMutating ? 1 : 0.7 }}>
      <input
        type="text"
        id="title"
        name="title"
        value={data.title}
        onChange={handleChange}
        placeholder="New Todo"
        autoFocus
      />

      <button type="submit">Submit</button>
    </form>
  );

  return content;
}
