import { Note } from "@/types/note";
import css from "@/styles/NotePreview.module.css";

export default function NotePreview({ note }: { note: Note }) {
  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
        </div>

        <p className={css.content}>{note.content}</p>

        <span className={css.tag}>{note.tag}</span>
      </div>
    </div>
  );
}
