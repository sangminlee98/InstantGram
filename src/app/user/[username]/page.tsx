import UserProfile from "@/components/UserProfile";
import { getUserForProfile } from "@/service/user";
import { notFound } from "next/navigation";

type UserPageProps = {
  params: {
    username: string;
  };
};

export default async function UserPage({
  params: { username },
}: UserPageProps) {
  const user = await getUserForProfile(username);
  if (!user) {
    notFound();
  }
  return <UserProfile user={user} />;
}
