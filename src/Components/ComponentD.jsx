import React from 'react'
import { useContext } from 'react';
import { userContext } from './ComponentA';
import ComponentX from './ComponentX';
const ComponentD = (props) => {  
  const value = useContext(userContext);
  return (
    <div>
      <h1>{`ComponentD finally has ${value}`}</h1>
      <ComponentX/>
      </div>
  )
}

export default ComponentD