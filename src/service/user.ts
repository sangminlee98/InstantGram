import { SearchUser } from "@/model/user";
import { client } from "./sanity";

type OAuthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
};
export async function addUser({ id, email, name, username, image }: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    username,
    email,
    name,
    image,
    following: [],
    follower: [],
    bookmarks: [],
  });
}

export async function getUserByUsername(username: string) {
  return client.fetch(`
    *[_type == "user" && username == "${username}"][0]{
      ...,
      "id": _id,
      following[]->{username, image},
      follower[]->{username, image},
      "bookmarks": bookmarks[]->_id
    }
  `);
}

export async function searchUsers(keyword?: string) {
  const query = keyword
    ? `&& (name match "${keyword}") || (username match "${keyword}")`
    : "";
  return client
    .fetch(
      `
      *[_type == "user" ${query}] {
        ...,
        "following": count(following),
        "follower": count(follower),
      }
    `
    )
    .then((users) =>
      users.map((user: SearchUser) => ({
        ...user,
        following: user.following ?? 0,
        follower: user.follower ?? 0,
      }))
    );
}

export async function getUserForProfile(username: string) {
  return client
    .fetch(
      `
  *[_type == "user" && username =="${username}"][0]{
    ...,
    "id": _id,
    "following": count(following),
    "follower": count(follower),
    "posts": count(*[_type == 'post' && author->username == "${username}"]),
  }
  `
    )
    .then((user) => ({
      ...user,
      following: user.following ?? 0,
      follower: user.follower ?? 0,
      posts: user.posts ?? 0,
    }));
}
