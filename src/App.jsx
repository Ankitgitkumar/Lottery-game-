import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./Counter.jsx";
import TodoList from './TodoList.jsx';
import Lottery from './Lottery.jsx';

function App(){
  let winCondition = (ticket)=>{
    return ticket[0] === 1;
  };

  return  (
  <>
  <Lottery n = {3} winCondition = {winCondition} />
  </>
  );
  
}

export default App
