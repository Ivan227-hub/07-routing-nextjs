"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchNotes } from "@/lib/api";
import { Note } from "@/types/note";
import NoteList from "@/components/NoteList/NoteList";
import Pagination from "@/components/Pagination/Pagination";

interface NotesResponse {
  notes: Note[];
  totalPages: number;
}

export default function NotesPage() {
  const params = useParams();
  const rawTag = params?.tag;
  const tag = Array.isArray(rawTag) ? rawTag[0] : rawTag ?? "all"; // <-- исправлено

  const [notes, setNotes] = useState<Note[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadNotes() {
      setIsLoading(true);
      setError(null);

      try {
        const res: NotesResponse = await fetchNotes(
          tag === "all" ? undefined : tag,
          "", // search
          page
        );
        setNotes(res.notes);
        setTotalPages(res.totalPages);
      } catch (err) {
        console.error("Failed to fetch notes:", err);
        setNotes([]);
        setTotalPages(1);
        setError("Failed to load notes.");
      } finally {
        setIsLoading(false);
      }
    }

    loadNotes();
  }, [tag, page]);

  if (isLoading) return <p>Loading notes...</p>;
  if (error) return <p>{error}</p>;
  if (!notes || notes.length === 0) return <p>No notes found.</p>;

  return (
    <div>
      <h1>Notes {tag !== "all" ? `- ${tag}` : ""}</h1>
      <NoteList notes={notes} />
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
