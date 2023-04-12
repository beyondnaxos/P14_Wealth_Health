import React from 'react'
import styles from './List.module.css'
import { Datablify } from 'datablify'
import { useContext } from 'react'
import { usersInfosContext } from '../../App'

/**
 * This is a React component that renders a table using the Datablify component, displaying user
 * information if there is any available.
 * @returns The `List` component is being returned. If `usersInfos` has a length greater than 0, it
 * will return a `div` containing a `Datablify` component with the `data` and `categories` props passed
 * in. If `usersInfos` has a length of 0, it will return `null`.
 */

const List = () => {
  const { usersInfos } = useContext(usersInfosContext)

  const categories = [
    'First Name',
    'Last Name',
    'Date of Birth',
    'Start Date',
    'Department',
    'Street',
    'City',
    'State',
    'Zip Code',
  ]

  return usersInfos.length > 0 ? (
    <div className={styles.datablifyContainer}>
      <Datablify
        data={usersInfos}
        categories={categories}
        // headColor={'green'}
        // titleHeadColor={'black'}
      />
    </div>
  ) : null
}

export default List
