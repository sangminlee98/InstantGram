"use client";

import useSWR from "swr";

export default function PostList() {
  const { data } = useSWR("/api/posts");
  console.log(data);
  return <div>PostList</div>;
}
