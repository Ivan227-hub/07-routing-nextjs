import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  sidebar: ReactNode;
};

export default function NotesLayout({ children, sidebar }: Props) {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <aside>{sidebar}</aside>
      <main style={{ flexGrow: 1 }}>{children}</main>
    </div>
  );
}
