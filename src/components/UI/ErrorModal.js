import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import Card from './Card';
import Button from './Button';

import styles from './ErrorModal.module.css';

const { backdrop, modal, header, content, actions } = styles;

const Backdrop = ({ onConfirm }) => {
  return <div className={backdrop} onClick={onConfirm} />;
};

const ModalOverlay = ({ errorTitle, errorMessage, onConfirm }) => {
  useEffect(() => {
    const closeModal = (e) => {
      if (e.keyCode !== 27) return;
      onConfirm();
    };
    window.addEventListener('keydown', closeModal);
    return () => window.removeEventListener('keydown', closeModal);
  });

  return (
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
  );
};

const ErrorModal = ({ errorTitle, errorMessage, onConfirm }) => {
  return (
    <>
      {createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {createPortal(
        <ModalOverlay
          errorTitle={errorTitle}
          errorMessage={errorMessage}
          onConfirm={onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default ErrorModal;
