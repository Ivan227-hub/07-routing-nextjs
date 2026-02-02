// app/notes/filter/[...slug]/page.tsx
import { fetchNotes } from "@/lib/api";
import Notes from "./Notes.client";
import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";

interface Props {
  params: { slug: string[] };
}

export default async function FilteredNotesPage({ params }: Props) {
  const tag = params.slug?.[0] ?? "all";

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", tag, "", 1],
    queryFn: () => fetchNotes(tag, "", 1),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Notes tag={tag} />
    </HydrationBoundary>
  );
}
