"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        placeholder="Search"
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <button>🚀 Rock IT</button>
    </form>
  );
}
