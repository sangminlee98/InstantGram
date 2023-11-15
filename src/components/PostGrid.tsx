import useSWR from "swr";
import GridSpinner from "./ui/icons/GridSpinner";
import { SimplePost } from "@/model/post";
import PostGridCard from "./PostGridCard";

type PostGridProps = {
  username: string;
  query: string;
};

export default function PostGrid({ username, query }: PostGridProps) {
  const { data: posts, isLoading } = useSWR<SimplePost[]>(
    `/api/users/${username}/${query}`
  );
  return (
    <div className="w-full text-center">
      {isLoading && <GridSpinner />}
      <ul className="grid grid-cols-3 gap-4 py-4 px-8">
        {posts &&
          posts.map((post, index) => (
            <li key={post.id}>
              <PostGridCard post={post} priority={index < 6} />
            </li>
          ))}
      </ul>
    </div>
  );
}
