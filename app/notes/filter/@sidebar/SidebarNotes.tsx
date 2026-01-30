import css from './SidebarNotes.module.css';
import Link from 'next/link';

const tags = ['All', 'Todo', 'Work', 'Personal'];

export default function SidebarNotes() {
  return (
    <aside className={css.sidebar}>
      <ul className={css.menuList}>
        {tags.map((tag) => (
          <li key={tag} className={css.menuItem}>
            <Link
              href={`/notes/filter/${tag === 'All' ? 'all' : tag}`}
              className={css.menuLink}
            >
              {tag === 'All' ? 'All notes' : tag}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
