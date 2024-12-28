import { queryClient } from "@/shared/config/query-client";
import { useQuery } from "@tanstack/react-query";
import { useDocumentTitle } from "usehooks-ts";
import { z } from "zod";

const postSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

const postListQuery = () => ({
  queryKey: ["posts", "list"],
  queryFn: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json() as Promise<z.infer<typeof postSchema>[]>;
  },
});

export async function loader() {
  if (!queryClient.getQueryData(postListQuery().queryKey)) {
    await queryClient.fetchQuery(postListQuery());
  }
}

export function HomePage() {
  const { data } = useQuery(postListQuery());
  useDocumentTitle("Главная");
  return (
    <main>
      <h1>Home Page</h1>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
