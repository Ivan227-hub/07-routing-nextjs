import { fetchNoteById } from "@/lib/api/notes";
import NotePreview from "@/components/NotePreview/NotePreview";
import Modal from "@/components/Modal/Modal";

interface Props {
  params: {
    id: string;
  };
}

export default async function NoteModalPage({ params }: Props) {
  const note = await fetchNoteById(params.id);

  return (
    <Modal>
      <NotePreview note={note} />
    </Modal>
  );
}
