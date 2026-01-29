// app/@modal/Modal.tsx
"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import css from "./Modal.module.css";

interface ModalProps {
  children: ReactNode;    
  onClose?: () => void;   
}

export default function Modal({ children, onClose }: ModalProps) {
  const router = useRouter();

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      router.back();
    }
  };

  return (
    <div className={css.overlay} onClick={handleClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeButton} onClick={handleClose}>
          ×
        </button>
        {children} {}
      </div>
    </div>
  );
}
