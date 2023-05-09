/**
 * @fileoverview Modal component for displaying a success message and a progress bar.
 */

import React, { useEffect, useState } from 'react';
import styles from './Modal.module.css';
import { LinearProgress } from '@mui/material';

/**
 * @function Modal
 * @returns {React.Element} - The rendered Modal component.
 * @description Modal component for displaying a success message when an employee is created, along with a progress bar.
 */
const Modal = () => {
  const [wait, setWait] = useState(true);
  const [progress, setProgress] = useState(0);

  // Progress bar logic: from 0 to 3000 ms
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 30);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Timer to hide the progress bar
  useEffect(() => {
    setTimeout(() => {
      setWait(false);
    }, 3000);
  }, []);

  return (
    <div className={styles.modalContainer}>
      <p className={styles.modal}>L'employé a bien été créé</p>
      {/* progress bar */}
      {wait && (
        <div style={{ width: 100 }}>
          <LinearProgress value={progress} />
        </div>
      )}
    </div>
  );
};

export default Modal;
