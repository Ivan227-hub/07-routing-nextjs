// app/@modal/notes/[id]/page.tsx
'use client';
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal/Modal';
import { useQuery } from '@tanstack/react-query';
import { fetchNoteById } from "@/lib/api";
import { Note } from '@/types/note';
import css from './NotePreview.module.css';

interface NoteModalProps {
  params: { id: string };
}

export default function NotePreview({ params }: NoteModalProps) {
  const router = useRouter();
  const { id } = params;

  const { data: note, isLoading } = useQuery<Note>({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  const handleClose = () => router.back();

  if (isLoading || !note) return null;

  return (
    <Modal onClose={handleClose}>
      <h2 className={css.title}>{note.title}</h2>
      <p className={css.content}>{note.content}</p>
    </Modal>
  );
}
