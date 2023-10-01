import { client } from "./sanity";

export async function getPosts(username: string) {
  return client.fetch(`
  *[_type == "post" 
    && author->username == "${username}" || author._ref 
    in *[_type == "user" && username == "${username}"].following[] -> _id]
  {
    author -> { username, name },
    photo,
    likes -> { username, name },
    comments ->
  }
`);
}
