// app/@modal/notes/[id]/page.tsx
"use client";

import Modal from "@/app/@modal/Modal";
import css from "./NotePreview.module.css";
import { useRouter } from "next/navigation";

interface NotePageProps {
  params: { id: string };
}

export default function NotePage({ params }: NotePageProps) {
  const { id } = params;
  const router = useRouter();

  // Закриття модалки повертає на попередню сторінку
  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      <div className={css.container}>
        <button className={css.backBtn} onClick={handleClose}>
          &larr; Back
        </button>
        <div className={css.header}>
          <h2>Note {id}</h2>
          <span className={css.tag}>Work</span> {/* тег можна динамічно змінювати */}
        </div>
        <div className={css.content}>
          Content of note {id} goes here. {/* сюди можна вставити реальний текст нотатки */}
        </div>
        <div className={css.date}>
          Created at: {new Date().toLocaleDateString()}
        </div>
      </div>
    </Modal>
  );
}
