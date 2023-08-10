import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const countries= [
  {name:'India', value: 'IN', cities: ['Delhi','Mumbai'] },
  {name:'Pak', value: 'PK', cities: ['Lahore','Karachi'] },
  {name:'Bangladesh', value: 'BG', cities: ['Dhaka','Chittagong'] },
]



function App() {

  const [getState, setState] = useState(0);

  const handle= (num)=> {
    console.log(num.target.value);
    setState(num.target.value);
  }
  
  return (
    <div className="App">
      <div>
    {/* Dropdown 1 */}
            <select onChange= {handle}>
        {countries.map((val, index)=> (
              <option value={index} key={val.value} > 
              {val.name}
              </option>   
         
            ))}
              </select>  
          
       {/*Dropdown 2*/}

       <select>
          {countries[getState].cities.map((tar)=> (
            <option>
                {tar}
            </option>
          ))}
       </select>

      </div>
        
    </div>
  );
}

export default App;
