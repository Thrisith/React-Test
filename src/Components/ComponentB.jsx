import React, { use, useContext } from 'react'
import ComponentC from './ComponentC'
import { userContext } from './ComponentA'

const ComponentB = () => {
  const value = useContext(userContext);
  return (
    <div>
        <h1>{`ComponentB also has ${value}`}</h1>
        <ComponentC/>
        </div>
  )
}

export default ComponentB