import css from "./LayoutNotes.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function LayoutNotes({ children }: Props) {
  return <div className={css.layout}>{children}</div>;
}
