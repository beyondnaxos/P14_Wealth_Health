import React from 'react'
import styles from './List.module.css'
import { Datablify } from 'datablify'
import { useContext } from 'react'
import { usersInfosContext } from '../../App'

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
      <Datablify data={usersInfos} categories={categories} />
    </div>
  ) : null
}

export default List
