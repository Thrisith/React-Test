import { Component, createContext } from 'react';
import './App.css'
import { use, useEffect, useId, useRef, useState } from 'react';
import ComponentA from './Components/ComponentA';

export const practiceContext = createContext();

function App() {
  const [practiceValue, setPracticeContext] = useState("Thrisith Context");
  const [add, setAdd] = useState(0);
  const countHandler = () => {
    setAdd( add + 1);
  };
  const uniqueId = useId();
  const [invalue, setInvalue] = useState("");
  const [apiData, setapiData] = useState(false);
  const inputRef = useRef(null);
  const onChangeHandler = (e) =>
  {
    setInvalue(e.target.value);
  }
  const dataHandler = async () =>
  {
     setapiData(await fetch("https://reqres.in/api/users?page=2").then(response => response.json()).then(result  => 
      result.data));
  }
  useEffect((

  )=> {console.log(apiData)},[apiData]);
  const refHandler= () =>
  {
    // ref.current = ref.current+1;
    // console.log(ref);
    inputRef.current.focus();
    inputRef.current.style.color = "red";
    console.log(inputRef.current.value);  
  }
  return (
    <practiceContext.Provider value={practiceValue}>
      <h1>{add}</h1>
      <button onClick={countHandler}>Count</button><br/>
      <input onChange={onChangeHandler}/>
      <h1>{invalue}</h1>
      <button onClick={dataHandler}>Fetch Data</button>
      {apiData?<ol>{apiData.map((data,id)=>
        <li key={id}>{data.email}</li>
       )}</ol>:<h1>Data Not Loaded</h1>}
       <h2 id={uniqueId}>Unique ID</h2>
       <button onClick={refHandler}>UseRef</button>
       {/* <h1>{ref.current}</h1> */}
       <input ref={inputRef}/>
       <ComponentA/>
    </practiceContext.Provider>
  )
}

export default App
