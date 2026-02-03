import Link from "next/link";

export default function DefaultSidebarSlot() {
  // ✅ Масив тегів для керованості
  const tags = ["All", "Work", "Personal", "Todo", "Meeting", "Shopping"];

  return (
    <nav>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>
            <Link href={`/notes/filter/${tag}`}>{tag}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
