import React, { useState } from 'react'
import "../css/Form.css"
import {IStates as Props} from '../App'

interface IProps {
    people: Props['people']
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}
const Form = ({people, setPeople}: IProps) => {
    const [ inputData, setInputData] = useState({name: '', age: '', address: ''}) // const inputData: { name: string; age: string; address: string}
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputData({...inputData, [e.target.name]: e.target.value});
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setPeople([...people, {
            name: inputData.name,
            age: Number(inputData.age),
            address: inputData.address
        }])
        setInputData({name: '', age: '', address: ''})
    }

    return (
        <div className="form-container">
            <h1>Form Input</h1>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" id="name" placeholder="name..." value={inputData.name} onChange={onChange}/>
                <input type="number" name="age" id="age" placeholder="age..." value={inputData.age} onChange={onChange} />
                <textarea name="address" id="address" placeholder="address..." value={inputData.address} onChange={onChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form