import { ReactNode } from "react";
import SidebarNotes from "@/components/SidebarNotes/SidebarNotes";

type Props = {
  children: ReactNode;
};

export default function NotesLayout({ children }: Props) {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <aside>
        <SidebarNotes />
      </aside>
      <main style={{ flexGrow: 1 }}>{children}</main>
    </div>
  );
}
