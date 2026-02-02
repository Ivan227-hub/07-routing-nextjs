import Link from "next/link";
import css from "./NoteList.module.css";
import { Note } from "@/types/note";

interface NoteListProps {
  notes: Note[];
}

export default function NoteList({ notes }: NoteListProps) {
  return (
    <div className={css.container}>
      {notes.map((note) => (
        <Link key={note.id} href={`/notes/${note.id}`} className={css.note}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <span className={css.tag}>{note.tag}</span> {/* <- исправлено */}
        </Link>
      ))}
    </div>
  );
}
