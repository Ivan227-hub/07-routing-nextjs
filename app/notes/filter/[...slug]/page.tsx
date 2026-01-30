// app/notes/filter/[...slug]/page.tsx
import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api/notes';
import { Note } from '@/types/note';
import SidebarNotes from '../@sidebar/SidebarNotes';
import css from './NotesFilter.module.css';

interface NotesPageProps {
  params: { slug: string[] };
}

export default function NotesFilterPage({ params }: NotesPageProps) {
  const tagParam = params.slug[0];
  const tag = tagParam === 'all' ? undefined : tagParam;

  const { data: notes, isLoading } = useQuery<Note[]>({
    queryKey: ['notes', tag ?? 'all'],
    queryFn: () => fetchNotes(tag),
  });

  if (isLoading || !notes) return <p>Loading...</p>;

  return (
    <div className={css.container}>
      <SidebarNotes />
      <div className={css.notesList}>
        {notes.map(note => (
          <div key={note.id} className={css.noteItem}>
            <a href={`/notes/${note.id}`}>{note.title}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
