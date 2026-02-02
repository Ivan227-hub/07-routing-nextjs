"use client";

import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import Modal from "@/components/Modal/Modal";
import { Note } from "@/types/note";

export default function NotePreview({ id }: { id: string }) {
  const router = useRouter();

  const { data, isLoading, isError } = useQuery<Note>({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <Modal onClose={() => router.back()}>Loading...</Modal>;
  if (isError || !data)
    return <Modal onClose={() => router.back()}>Error</Modal>;

  return (
    <Modal onClose={() => router.back()}>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
      <p>{data.tag}</p> {/* <- исправлено */}
      <small>{new Date(data.createdAt).toLocaleDateString()}</small>
    </Modal>
  );
}
