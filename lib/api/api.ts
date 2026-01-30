import axios from "axios";
import { Note } from "@/types/note";

const api = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
});

export const getNotes = async (tag?: string): Promise<Note[]> => {
  const response = await api.get("/notes", { params: tag && tag !== "all" ? { tag } : {} });
  return response.data;
};

export const getNoteById = async (id: string): Promise<Note> => {
  const response = await api.get(`/notes/${id}`);
  return response.data;
};
