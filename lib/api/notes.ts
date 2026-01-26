import axios from "axios";
import { Note } from "@/types/note";

const api = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
  },
});

export const fetchNotes = async (tag?: string): Promise<Note[]> => {
  const params = tag ? { tag } : {};
  const { data } = await api.get("/notes", { params });
  return data.notes;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data } = await api.get(`/notes/${id}`);
  return data;
};
