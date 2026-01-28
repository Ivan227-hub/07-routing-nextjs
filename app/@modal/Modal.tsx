"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import css from "./Modal.module.css";

export default function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();

  const closeModal = () => {
    router.back(); 
  };

  return (
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeButton} onClick={closeModal}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
