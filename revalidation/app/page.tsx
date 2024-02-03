import Posts from "./components/Posts";

export default function Home() {
  return (
    <main>
      <p>Hello and Welcome</p>
      <span>
        I&apos;m <span className="font-bold">Zahari</span>.
      </span>
      <Posts />
    </main>
  );
}
