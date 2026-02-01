"use client";

import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api"; 
import { Note } from "@/types/note";
import Modal from "@/components/Modal/Modal";

interface NotePageProps {
  params: { id: string };
}

export default function NotePage({ params }: NotePageProps) {
  const { id } = params;
  const router = useRouter();

  
  const { data, isLoading, isError } = useQuery<Note>({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  if (isLoading) return <p>Loading note...</p>;
  if (isError || !data) return <p>Failed to load note.</p>;

  return (
    <Modal>
      <button
        onClick={() => router.back()}
        style={{ marginBottom: "1rem" }}
      >
        Close
      </button>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
    </Modal>
  );
}
