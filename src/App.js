import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //Loading data from JSON PLACEHOLDER 
  const [Nayoks, setNayoks] = useState([])
useEffect(()=>{
  fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(data => /*console.log(data)*/ setNayoks(data))
  
},[])

  // const Nayoks =
  // [
  //   {name:'Omar Sunny',age:25},
  //   {name:'Manna',age:25},
  //   {name:'Bapparaz',age:25},
  //   {name:'Dipjol',age:25}, 
  //   {name:'Maruf',age:25}
  // ]

  return (
    <div className="App">
      <header className="App-header">
        <MovieCounter></MovieCounter>
        {
        Nayoks.map(nk => <Nayok name={nk.result.gender.female.name.title}></Nayok> )
        }
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}


function MovieCounter() {
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>Movie Counter:{count}</h1>
      <button onClick = {() => setCount(count+1)} >Add Movie</button>
      <Movies name={count} ></Movies>
      <Movies name={count} ></Movies>
      <Movies name={count * 2} ></Movies>
      <Movies name={count} ></Movies>
    </div>
  )
  
}

function Movies(props) {
return <h3>Movie I have acted:{props.name}</h3>
}

function Nayok(props){
  const NayokStyle = {
    border:'1px solid red',
    margin:'5px',
    padding:'5px'
  }
  return (
    <div style={NayokStyle}>
      <h1>Ami Nayok-{props.name}</h1>
      <p>My age:{props.age}</p>
      <p>I have done 5 movies</p>
    </div>
  )
}

export default App;
