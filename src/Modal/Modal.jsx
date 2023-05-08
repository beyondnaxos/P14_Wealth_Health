
import React, { useEffect } from 'react'
import styles from './Modal.module.css'
import { LinearProgress } from '@mui/material'

const Modal = () => {
  const [wait, setWait] = React.useState(true)
  const [progress, setProgress] = React.useState(0)

  // from 0 to 3000 ms
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      )
    }, 30)
    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setWait(false)
    }, 3000)
  }, [])

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
  )
}

export default Modal
