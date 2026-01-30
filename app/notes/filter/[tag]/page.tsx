"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Note } from "@/types/note";
import { getNotes } from "@/lib/api";
import SidebarNotes from "../@sidebar/SidebarNotes";
import css from "./Page.module.css";
import Link from "next/link";

export default function FilteredNotesPage() {
  const params = useParams();
  const tagParam = params.tag; // замість let → const

  // Якщо tagParam масив (якщо catch-all), беремо перший елемент
  const tag = Array.isArray(tagParam) ? tagParam[0] : tagParam;

  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    getNotes(tag === "all" ? undefined : tag).then(setNotes);
  }, [tag]);

  return (
    <div className={css.container}>
      <SidebarNotes />
      <div className={css.notesList}>
        {notes.map((note) => (
          <Link key={note.id} href={`/notes/${note.id}`} className={css.noteItem}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
