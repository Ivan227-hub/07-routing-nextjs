import css from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={css.header}>
      <Link href="/" className={css.logo}>
        NoteHub
      </Link>
    </header>
  );
}
