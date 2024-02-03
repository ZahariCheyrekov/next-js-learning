import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div>
        <h1>
          <Link href="/">Next Todos</Link>
        </h1>
        <Link href="/add">Add</Link>
      </div>
    </nav>
  );
}
