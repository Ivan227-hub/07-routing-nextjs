"use client"; 
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import NotesList from "@/components/NotesList/NotesList";
import { Note } from "@/types/note";

export default function NotesPage() {
  const { data: notes = [], isLoading, error } = useQuery<Note[]>({
    queryKey: ["notes"],
    queryFn: async () => {
      const res = await axios.get("https://notehub-public.goit.study/api/notes", {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY || ""}`,
        },
      });
      return res.data;
    },
  });

  if (isLoading) return <p>Loading notes...</p>;
  if (error) return <p>Error loading notes</p>;

  return <NotesList notes={notes} />;
}
