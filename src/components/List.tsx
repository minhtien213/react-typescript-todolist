import React from 'react'
import "../css/List.css"
import {IStates as IProps} from '../App'

const List = ({people}: IProps) => {
    
    const render = () : JSX.Element[] => {
        return people.map( person => {
            return (
                <div className="list-item-container">
                    {person.name} - {person.age} - {person.address}
                </div>
            )
        })
    }
    return (
        
        <div className="list-container">
            <h1>List People</h1>
            {render()}
        </div>
    )
}

export default List