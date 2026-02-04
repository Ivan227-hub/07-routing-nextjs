import Link from "next/link";

export default function DefaultSidebarSlot() {
  const tags = [
    { label: "All", value: "all" },
    { label: "Work", value: "work" },
    { label: "Personal", value: "personal" },
    { label: "Todo", value: "todo" },
    { label: "Meeting", value: "meeting" },
    { label: "Shopping", value: "shopping" },
  ];

  return (
    <nav>
      <ul>
        {tags.map(({ label, value }) => (
          <li key={value}>
            <Link href={`/notes/filter/${value}`}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
