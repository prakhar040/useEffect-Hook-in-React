import "./App.css";
import Header from "./components/Header.js";
import { useState, useEffect } from "react";


function App() {

  const [state,setState]=useState(2);
  const [data, setData]=useState([]);

  useEffect(()=>{
    async function getData(){
      const get= await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);

      const res= await get.json();
      setData(res);
    }
    getData();
  }, [state])
  
  return (
    <div className="App">
      <Header />
      <button className="btn" onClick={()=> setState(state+1)}>Click Me</button>
      {
        data.map((element,index)=>{
          return (
            <div className="data" key={index}>
            <h4>{element.firstName}</h4>
            <h4>{element.lastName}</h4>
            <h4>{element.email}</h4>
            </div>
          )
        })
      }
      </div>
          

  );
}

export default App;
