interface Props {
  onClose: () => void;
}

export default function NoteForm({ onClose }: Props) {
  return (
    <form>
      <input placeholder="Title" />
      <textarea placeholder="Content" />
      <button type="submit">Save</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
}
