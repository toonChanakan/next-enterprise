export async function GET() {
  let posts = [];
  return Response.json(posts= [
    {
      title: "Next.js",
      description: "Fast by default, with config optimized for performance.",
    },
    {
      title: "Tailwind CSS",
      description: "A utility-first CSS framework for rapid UI development.",
    },
  ]);
}
