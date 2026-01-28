import Modal from "@/app/@modal/Modal";

export default function NotePage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <Modal>
      <h2>Note {id}</h2>
      {/* Тут можна підключити компонент NotePreview для детальної нотатки */}
    </Modal>
  );
}
