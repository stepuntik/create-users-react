import { useEffect } from 'react';

import Card from './Card';
import Button from './Button';

import styles from './ErrorModal.module.css';

const { backdrop, modal, header, content, actions } = styles;

const ErrorModal = ({ errorTitle, errorMessage, onConfirm }) => {
  useEffect(() => {
    const closeModal = (e) => {
      if (e.keyCode !== 27) return;
      onConfirm();
    };
    window.addEventListener('keydown', closeModal);
    return () => window.removeEventListener('keydown', closeModal);
  });

  return (
    <>
      <div className={backdrop} onClick={onConfirm} />

      <Card className={modal}>
        <header className={header}>
          <h2>{errorTitle}</h2>
        </header>
        <div className={content}>
          <p>{errorMessage}</p>
        </div>
        <footer className={actions}>
          <Button type="button" onClick={onConfirm}>
            Okay
          </Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
