import React, { Component } from 'react'
import {nanoid} from 'nanoid'

export default class Person extends Component {
  
    addPerson=()=>{
        const name=this.nameNode.value
        const age=this.ageNode.value
        const personObj={id:nanoid(),name,age}
        console.log(personObj)
    }
    render() {
        return (
            <div>
                <h2>Person component:</h2>
                <input type="text" placeholder="name" ref={c=>this.nameNode=c}/>
                <input type="text" placeholder="age" ref={c=>this.ageNode=c}/>
                <button onClick={this.addPerson}>add people</button>
                <ul>
                    <li>name:{}---age:{}</li>
                </ul>
            </div>
        )
    }
}
