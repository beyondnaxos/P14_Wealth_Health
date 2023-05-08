import React, { useEffect } from 'react'
import styles from './Modal.module.css'
import { LinearProgress } from '@mui/material'

/* This is a React component called `Modal`. It displays a message "L'employé a bien été créé" (which
means "The employee has been created successfully" in French) and a progress bar. The progress bar
starts at 0 and increases to 100% over a period of 3 seconds (3000ms). The `wait` state is used to
control whether the progress bar should be displayed or not. When `wait` is true, the progress bar
is displayed, and when it becomes false after 3 seconds, the progress bar disappears. The
`useEffect` hook is used to update the progress bar every 30ms. The `LinearProgress` component is
imported from the Material-UI library and used to display the progress bar. The CSS styles for the
component are defined in a separate file called `Modal.module.css`. */

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

  setTimeout(() => {
    setWait(false)
  }, 3000)

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
