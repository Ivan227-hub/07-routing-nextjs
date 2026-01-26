import { fetchNotes } from "@/lib/api/notes";
import NotesList from "@/components/NotesList/NotesList";

interface Props {
  params: {
    tag?: string[];
  };
}

export default async function FilteredNotesPage({ params }: Props) {
  const tag = params.tag?.[0];
  const notes = await fetchNotes(tag === "all" ? undefined : tag);

  return <NotesList notes={notes} />;
}
