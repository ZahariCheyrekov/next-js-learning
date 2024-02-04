import MyProfilePic from "./components/MyProfilePic";
import Posts from "./components/Posts";

export const revalidate = 10;

export default function Home() {
  return (
    <main>
      <MyProfilePic />
      <p>Hello and Welcome</p>
      <span>
        I'm <span className="font-bold">Zahari</span>.
      </span>
      <Posts />
    </main>
  );
}
