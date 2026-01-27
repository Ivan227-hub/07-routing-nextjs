import css from "./NotePreview.module.css";
import { Note } from "@/types/note";

interface Props {
  note: Note;
}

export default function NotePreview({ note }: Props) {
  return (
    <div className={css.preview}>
      <h2 className={css.title}>{note.title}</h2>
      <p className={css.content}>{note.content}</p>
    </div>
  );
}
