"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import css from "./NotePreview.module.css";
import { useEffect, useState } from "react";
import { Note } from "@/types/note";
import { getNoteById } from "@/lib/api";

interface NotePageProps {
  params: { id: string };
}

export default function NotePreview({ params }: NotePageProps) {
  const { id } = params;
  const router = useRouter();
  const [note, setNote] = useState<Note | null>(null);

  useEffect(() => {
    getNoteById(id).then(setNote);
  }, [id]);

  if (!note) return null;

  return (
    <Modal onClose={() => router.back()}>
      <div className={css.note}>
        <h2 className={css.title}>{note.title}</h2>
        <p className={css.content}>{note.content}</p>
        <p className={css.tag}>Tag: {note.tag}</p>
      </div>
    </Modal>
  );
}
