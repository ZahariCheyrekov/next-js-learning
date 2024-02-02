import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav>
      <h1>
        <Link href="/">WikiRocket!</Link>
      </h1>
      <Search />
      <h1 className="title">HUAHUAHH</h1>
    </nav>
  );
}
