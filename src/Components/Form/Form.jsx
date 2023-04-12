import React from 'react'
import styles from './Form.module.css'
import * as state from '../../assets/states.json'
import { useContext } from 'react'
import { usersInfosContext } from '../../App.jsx'
import Modal from '../../Modal/Modal'
import { useState } from 'react'

/**
 * This is a React component that renders a form with input fields for user information and address,
 * and submits the data to a context state.
 * @returns A React functional component called `Form` is being returned. It renders a form with input
 * fields for user information such as first name, last name, date of birth, start date, department,
 * street, city, state, and zip code. The form also includes a submit button. When the form is
 * submitted, the data is collected and added to the `usersInfos` state using the `set
 */

const Form = () => {
  const [sent, setSent] = useState(false)
  const { usersInfos, setUsersInfos } = useContext(usersInfosContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    setUsersInfos([...usersInfos, data])
    setSent(true)
    setTimeout(() => {
      setSent(false)
    }, 3000)
    e.target.reset()
  }

  return (
    <div className={styles.formContainer} onSubmit={(e) => handleSubmit(e)}>
      <form className={styles.form}>
        <div className={styles.sideSquare}></div>
        <div className={styles.userFormContainer}>
          <h2 className={styles.groupTitle}>
            <span className={styles.bar}>|</span> Infos
          </h2>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="first-name">
              First Name
            </label>
            <input
              className={styles.input}
              pattern="^[a-zA-Z]+$"
              required
              title="Please enter a valid name"
              type="text"
              id="first-name"
              name="first-name"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="last-name">
              Last Name
            </label>
            <input
              className={styles.input}
              pattern="^[a-zA-Z]+$"
              required
              title="Please enter a valid name"
              type="text"
              id="last-name"
              name="last-name"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="date-of-birth">
              Date of Birth
            </label>
            <input
              className={styles.input}
              type="date"
              pattern="^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[0-9]{4}$"
              required
              title="Please enter a valid date"
              id="date-of-birth"
              name="date-of-birth"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="start-date">
              Start Date
            </label>
            <input
              className={styles.input}
              type="date"
              pattern="^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[0-9]{4}$"
              required
              title="Please enter a valid date"
              id="start-date"
              name="start-date"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="department">
              Department
            </label>
            <select className={styles.input} id="department" name="department">
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
              <option value="engineering">Engineering</option>
              <option value="human-resources">Human Resources</option>
              <option value="accounting">Accounting</option>
            </select>
          </div>
        </div>
        <div className={styles.addressFormContainer}>
          <h2 className={styles.groupTitle}>
            <span className={styles.bar}>|</span> Address
          </h2>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="street">
              Street
            </label>
            <input
              className={styles.input}
              pattern="^[a-zA-Z0-9\s,]+$"
              required
              title="Please enter a valid address"
              type="text"
              id="street"
              name="street"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="city">
              City
            </label>
            <input
              className={styles.input}
              type="text"
              id="city"
              name="city"
              pattern="^[a-zA-Z0-9\s,]+$"
              required
              title="Please enter a valid city "
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="state">
              State
            </label>
            <select
              className={styles.input}
              type="text"
              id="state"
              name="state"
            >
              {state.default.map((state, index) => {
                return (
                  <option key={index} value={state.abbreviation}>
                    {state.name}
                  </option>
                )
              })}
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="zip-code">
              Zip Code
            </label>
            <input
              className={styles.input}
              type="text"
              id="zip-code"
              name="zip-code"
            />
          </div>
          <div className={styles.formGroup}>
            <button className={styles.button} type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
            {sent ? <div className={styles.modalContainer}><Modal /></div> : null}
          
    </div>
  )
}

export default Form
