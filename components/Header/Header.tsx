import css from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Link href="/" className={css.logo}>
          NoteHub
        </Link>
        <Link href="/notes/filter/all">Notes</Link>
      </nav>
    </header>
  );
}
