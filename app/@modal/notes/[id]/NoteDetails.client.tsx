"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";

export default function NoteDetails({ id }: { id: string }) {
  const { data } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  if (!data) return null;

  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </>
  );
}
