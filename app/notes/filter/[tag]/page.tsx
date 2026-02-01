"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Note } from "@/types/note";
import { fetchNotes } from "@/lib/api";
import SidebarNotes from "../@sidebar/SidebarNotes";
import css from "./Page.module.css";
import Link from "next/link";

export default function FilteredNotesPage() {
  const params = useParams();
  const tagParam = params.tag;

  // Якщо tagParam масив (якщо catch-all), беремо перший елемент
  const tag = Array.isArray(tagParam) ? tagParam[0] : tagParam;

  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    // Викликаємо fetchNotes, а не getNotes
    fetchNotes(tag === "all" ? undefined : tag)
      .then(setNotes)
      .catch((err) => {
        console.error("Failed to fetch notes:", err);
        setNotes([]); // очищаємо список при помилці
      });
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
        {notes.length === 0 && <p>No notes found.</p>}
      </div>
    </div>
  );
}
