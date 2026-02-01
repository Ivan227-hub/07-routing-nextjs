"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import { Note } from "@/types/note";

interface NotesProps {
  tag?: string;
}

export default function Notes({ tag }: NotesProps) {
  const { data, isLoading, isError } = useQuery<Note[]>({
    queryKey: ["notes", tag],
    queryFn: () => fetchNotes(tag),
  });

  if (isLoading) return <p>Loading notes...</p>;
  if (isError || !data) return <p>Failed to load notes.</p>;

  return (
    <ul>
      {data.map((note) => (
        <li key={note.id}>{note.title}</li>
      ))}
    </ul>
  );
}
