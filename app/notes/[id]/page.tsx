"use client";

import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import { Note } from "@/types/note";
import Modal from "@/components/Modal/Modal";
import css from "./NotePreview.module.css"; // стиль для заголовка і контенту

interface NotePageProps {
  params: { id: string };
}

export default function NotePage({ params }: NotePageProps) {
  const { id } = params;
  const router = useRouter();

  const { data: note, isLoading, isError } = useQuery<Note>({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  const handleClose = () => router.back();

  if (isLoading) return <p>Loading note...</p>;
  if (isError || !note) return <p>Failed to load note.</p>;

  return (
    <Modal onClose={handleClose}>
      <h2 className={css.title}>{note.title}</h2>
      <p className={css.content}>{note.content}</p>
      <button onClick={handleClose}>Close</button>
    </Modal>
  );
}
