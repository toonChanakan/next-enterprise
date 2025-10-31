export default async function Page() {
  let data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog-data`)
  let postsData = await data.json();
  const posts = Array.isArray(postsData) ? postsData : [];

  return (
    <ul>
      {posts.map((post: any, idx: number) => (
        <li key={idx}>
          <>{post.title}</> : {post.description}
        </li>
      ))}
    </ul>
  );
}