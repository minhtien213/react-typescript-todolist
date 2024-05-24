import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'
import List from './components/List'

export interface IStates {
  people: {
    name: string;
    age: number;
    address: string
  }[]

  // setPeople: React.Dispatch<React.SetStateAction<IStates['people']>>
}

function App() {
  // const [ name, setName] = useState('Minh Tien') //const name: string
  // const [ age, setAge] = useState(30) //const age: number
  // const [size, setSize] = useState<string | number>(28)
  // const [size, setSize] = useState<string | number>('M')
  // const [people, setPeople] = useState<{name: string; age: number; address: string}[]>([{name: 'John', age: 30, address: "QN"}])
  const [ inputData, setInputData] = useState({name: '', age: '', address: ''}) // const inputData: { name: string; age: string; address: string}
  const [people, setPeople] = useState<IStates['people']>([{name: 'Minh Tien', age: 30, address: "QN"}])

  return (
    <div className="container">
      <Form people = {people} setPeople = {setPeople}/>
      <List people = {people}/>
    </div>
  );
}

export default App;
