'use client';

import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import styles from './modal.module.css';

export default function Modal({ onClose, children }) {
  const modalRoot = document.getElementById('modal-root');
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    const keyDownEvent = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', keyDownEvent);

    return () => {
      document.body.style.overflowY = 'auto';
      window.removeEventListener('keydown', keyDownEvent);
    };
  }, [onClose]);
  const onCloseBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.backdrop} onClick={onCloseBackdrop}>
      <div className={styles.modal_container}>{children}</div>
    </div>,
    modalRoot
  );
}
