// app/notes/filter/@sidebar/SidebarNotes.tsx
import Link from 'next/link';
import css from './SidebarNotes.module.css';

const tags = ['All notes', 'Todo', 'Work', 'Personal'];

export default function SidebarNotes() {
  return (
    <aside className={css.sidebar}>
      <ul className={css.menuList}>
        {tags.map(tag => (
          <li key={tag} className={css.menuItem}>
            <Link
              href={`/notes/filter/${tag === 'All notes' ? 'all' : tag}`}
              className={css.menuLink}
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
