import axios from "axios";
import { Note } from "@/types/note";

const api = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
});

export const fetchNotes = async (tag?: string): Promise<Note[]> => {
  const { data } = await api.get("/notes", {
    params: tag ? { tag } : {},
  });
  return data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data } = await api.get(`/notes/${id}`);
  return data;
};

export const deleteNoteById = async (id: string): Promise<void> => {
  await api.delete(`/notes/${id}`);
};
