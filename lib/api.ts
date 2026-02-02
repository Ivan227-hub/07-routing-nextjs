// lib/api.ts
import axios from "axios";
import { Note } from "@/types/note";

const token = process.env.NEXT_PUBLIC_API_TOKEN;

export interface NotesResponse {
  notes: Note[];
  totalPages: number;
}

const api = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchNotes = async (
  tag?: string,
  search?: string,
  page: number = 1
): Promise<NotesResponse> => {
  const { data } = await api.get<NotesResponse>("/notes", {
    params: {
      tag: tag !== "all" ? tag : undefined,
      search,
      page,
    },
  });

  return data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data } = await api.get<Note>(`/notes/${id}`);
  return data;
};

export const createNote = async (
  note: Omit<Note, "id" | "createdAt">
): Promise<Note> => {
  const { data } = await api.post<Note>("/notes", note);
  return data;
};

export const deleteNote = async (id: string): Promise<void> => {
  await api.delete(`/notes/${id}`);
};
