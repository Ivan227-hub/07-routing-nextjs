// app/notes/filter/[...slug]/page.tsx
"use client";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React from "react";

interface Note {
  id: string;
  title: string;
  content: string;
  tags?: string[];
}

async function fetchNotes(tag?: string): Promise<Note[]> {
  const query = tag ? `?tag=${tag}` : "";
  const res = await fetch(`/api/notes${query}`);
  if (!res.ok) throw new Error("Failed to fetch notes");
  const data: Note[] = await res.json();
  return data;
}

export default function FilteredNotesPage() {
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag") ?? undefined;

  const { data: notes, isLoading, error } = useQuery<Note[]>({
    queryKey: ["notes", tag ?? "all"],
    queryFn: () => fetchNotes(tag),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading notes.</p>;
  if (!notes || notes.length === 0) return <p>No notes found.</p>;

  return (
    <div>
      <h1>Notes {tag ? `- ${tag}` : ""}</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
