"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";

export default function Notes({ tag }: { tag?: string }) {
  const { data } = useQuery({
    queryKey: ["notes", tag],
    queryFn: () => fetchNotes(tag === "all" ? undefined : tag),
  });

  if (!data) return null;

  return (
    <ul>
      {data.map(note => (
        <li key={note.id}>{note.title}</li>
      ))}
    </ul>
  );
}
