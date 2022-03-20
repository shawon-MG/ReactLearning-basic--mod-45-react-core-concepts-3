import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
    </div>
  );
}



function ExternalUsers(){
  
  const [users, setUsers] = useState([]);   /* ----- Using useState():       */
  
  useEffect( () => {                       /* ------- Using useEffect() :   useEffect (() => { } , [])     */   
  
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json()) 
    .then(data => setUsers(data))  /* useEffect er moddhe data fetch kore ene setake setUsers e rakhlam. */

  } , [])

  return (
    <div>
      <h1>Loading API users from JSON Placeholder</h1>
      {
        users.map(user => <Users name={user.name} email={user.email}></Users>)  /* User er jonno banano component ke ei arrow func er moddhe return korlam. */
      }
    </div>
  )
}

function Users(props){         /* User er jonno arekta component banalam. prpos soho.  */    
  return (
    <div style={{backgroundColor: 'lightblue', padding: '15px', margin: '15px', border: '3px solid black', borderRadius: '20px'}}>
      <h4> Name: {props.name}</h4>
      <h5> Email: {props.email}</h5>
    </div>
  )
}

export default App;
