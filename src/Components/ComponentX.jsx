import React, { useContext } from 'react'
import { userContext } from './ComponentA'

const ComponentX = () => {
    const value = useContext(userContext);
  return (
    <div>ComponentX {value}</div>
  )
}

export default ComponentX