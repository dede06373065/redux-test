import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {addPersonCreater} from '../../redux/actions/person'

class Person extends Component {
  
    addPerson=()=>{
        const name=this.nameNode.value
        const age=this.ageNode.value
        const personObj={id:nanoid(),name,age}
        this.props.addPerson(personObj)
        //this.props.person(personObj)
        this.nameNode.value=''
        this.ageNode.value=''
    }
    render() {
        //const {name,age}=this.props.people
        return (
            <div>
                <h2>Person component and the sum is :{this.props.count}</h2>
                <input type="text" placeholder="name" ref={c=>this.nameNode=c}/>
                <input type="text" placeholder="age" ref={c=>this.ageNode=c}/>
                <button onClick={this.addPerson}>add people</button>
                <ul>
                    {
                        this.props.people.map(p=>{
                            return (<li key={p.id}>name:{p.name}---age:{p.age}</li>)

                        })
                    }
                </ul>
            </div>
        )
    }
}
export default connect(
    state =>({people:state.persons,
    count:state.sum}
       ),
    {
        addPerson:addPersonCreater
    }
)(Person)