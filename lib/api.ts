import axios from "axios";
import { Note } from "@/types/note";

const api = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
});

export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data } = await api.get(`/notes/${id}`);
  return data;
};
