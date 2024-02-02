import { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import UserPosts from "./components/UserPosts";
import getUser from "@/lib/getUser";
import getAllUsers from "@/lib/getAllUsers";
import getUserPosts from "@/lib/getUserPosts";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  if (!user?.name) {
    return {
      title: "User Not Found",
    };
  }

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const postsData: Promise<Post[]> = getUserPosts(userId);

  //   const [user, userPosts] = await Promise.all([userData, postsData]);
  const user = await userData;

  if (!user?.name) {
    return notFound();
  }

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={postsData} />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return users.map((user) => {
    userId: user.id.toString();
  });
}
