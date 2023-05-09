/**
 * @fileoverview List component for displaying user information in a table.
 */

import React, { useContext } from 'react';
import styles from './List.module.css';
import { Datablify } from 'datablify';
import { usersInfosContext } from '../../App';

/**
 * @function List
 * @returns {React.Element|null} - The rendered List component or null if there is no data to display.
 * @description List component for displaying user information in a table using the Datablify library.
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
        headColor={'green'}
        titleHeadColor={'black'}
      />
    </div>
  ) : null
}

export default List
