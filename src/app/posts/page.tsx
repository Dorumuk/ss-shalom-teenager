import { getAllPosts } from "@/service/posts";
import PostsGrid from "../components/PostsGrid";
import FilterablePosts from "../components/FilterablePosts";

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map(post => post.category))];
  
  return (
    <>
      <h1>제목</h1>
      <FilterablePosts posts={posts} categories={categories}/>
    </>
  );
}
