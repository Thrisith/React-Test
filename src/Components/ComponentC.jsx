import React from 'react'
import ComponentD from './ComponentD'
import { userContext } from './ComponentA'
import { useContext } from 'react'
const ComponentC = () => {
  
  const value = useContext(userContext);
  return (
    <div>
        <h1>{`ComponentC also has ${value}`}</h1>
        <ComponentD/></div>
  )
}

export default ComponentC