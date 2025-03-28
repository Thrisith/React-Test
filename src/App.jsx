import './App.css'
import { use, useState } from 'react';

function App() {
  const [add, setAdd] = useState(0);
  const countHandler = () => {
    setAdd( add + 1);
  };
  const [invalue, setInvalue] = useState("");
  const [apiData, setapiData] = useState(false);
  const onChangeHandler = (e) =>
  {
    setInvalue(e.target.value);
  }
  const dataHandler = async () =>
  {
     setapiData(await fetch("https://reqres.in/api/users?page=2").then(response => response.json()).then(result  => 
      result.data));
  }
  console.log(apiData);
  return (
    <>
      <h1>{add}</h1>
      <button onClick={countHandler}>Count</button><br/>
      <input onChange={onChangeHandler}/>
      <h1>{invalue}</h1>
      <button onClick={dataHandler}>Fetch Data</button>
      {apiData?<ol>{apiData.map((data,id)=>
        <li key={id}>{data.email}</li>
       )}</ol>:<h1>Data Not Loaded</h1>}
    </>
  )
}

export default App
