import React, { useContext, useState } from 'react'
import ComponentB from "./ComponentB";
import { createContext } from 'react';
import {practiceContext}  from '../App';

export const userContext = createContext();
const ComponentA = () => {
  const [value, setValue] = useState("Thrsith");
const practiceContextValue = useContext(practiceContext);
  return (
    <div>
        <h1>{`ComponentA has ${value} ${practiceContextValue}`}</h1>
        <userContext.Provider value={value}><ComponentB/></userContext.Provider>
        
    </div>
  )
}

export default ComponentA