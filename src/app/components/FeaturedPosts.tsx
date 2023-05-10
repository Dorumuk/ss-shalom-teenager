import { getAllPosts } from "../../service/posts";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPosts() {
  const posts = await getAllPosts();

  return (
    <section>
      <h2 className="text-2xl font-bold">포스트</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
