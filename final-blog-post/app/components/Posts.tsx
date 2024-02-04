import { getPostsMeta } from "@/lib/posts";
import ListItem from "./ListItem";

export default async function Posts() {
  const posts = getPostsMeta();

  if (!posts) {
    return <h1>Sorry, no posts are available</h1>;
  }

  return (
    <section>
      <h2>Blog</h2>
      <ul>
        {posts.map((post) => {
          return <ListItem key={post.id} post={post} />;
        })}
      </ul>
    </section>
  );
}
