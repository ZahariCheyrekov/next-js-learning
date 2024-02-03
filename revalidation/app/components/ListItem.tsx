import getFormattedDate from "@/lib/getFormatedDate";
import Link from "next/link";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <li>
      <Link href={`/posts/${id}`}>{title}</Link>
      <br />
      <p>{formattedDate}</p>
    </li>
  );
}
