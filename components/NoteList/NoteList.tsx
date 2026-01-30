"use client";

import { Note } from "@/types/note";
import Link from "next/link";
import css from "./NoteList.module.css";

interface NoteListProps {
  notes: Note[];
}

export default function NoteList({ notes }: NoteListProps) {
  return (
    <div className={css.list}>
      {notes.map((note) => (
        <Link key={note.id} href={`/notes/${note.id}`} className={css.item}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <span className={css.tag}>{note.tag}</span>
        </Link>
      ))}
    </div>
  );
}
