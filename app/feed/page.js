import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

export async function generateMetadata(params) {
  const posts = await getPosts();
  const num = posts.length;
  return {
    title: `Browse all our ${num} posts`,
    description: "Browse All out posts",
  };
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
