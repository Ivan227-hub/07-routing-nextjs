import Link from "next/link";
import { Note } from "@/types/note";
import css from "@/styles/NoteList.module.css";

export default function NotesList({ notes }: { notes: Note[] }) {
  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <li key={note.id} className={css.listItem}>
          <h3 className={css.title}>{note.title}</h3>

          <p className={css.content}>{note.content}</p>

          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>

            <Link
              href={`/notes/${note.id}`}
              className={css.link}
            >
              View
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
