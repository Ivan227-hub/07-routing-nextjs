// app/notes/[id]/NoteDetails.client.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Modal from "@/app/@modal/Modal";
import css from "./NoteDetails.module.css";

interface Note {
  id: string;
  title: string;
  content: string;
  tags?: string[];
}

interface NoteDetailsProps {
  note: Note;
}

// Компонент для отображения деталей заметки в модальном окне
export default function NoteDetails({ note }: NoteDetailsProps) {
  const router = useRouter();

  const handleClose = () => {
    router.back(); // возвращаемся на предыдущий маршрут
  };

  return (
    <Modal onClose={handleClose}>
      <div className={css.noteDetails}>
        <h2 className={css.title}>{note.title}</h2>
        <p className={css.content}>{note.content}</p>
        {note.tags && note.tags.length > 0 && (
          <p className={css.tags}>
            Tags: {note.tags.join(", ")}
          </p>
        )}
        <button className={css.closeBtn} onClick={handleClose}>
          Close
        </button>
      </div>
    </Modal>
  );
}
