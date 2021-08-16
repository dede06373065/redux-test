import React, { Component } from 'react'


export default class Count extends Component {

    add=()=>{
        const number=this.selectNumber.value
    }

    minus=()=>{
        const number=this.selectNumber.value 
    }

    addOdd=()=>{
        const number=this.selectNumber.value
    }

    addAsync=()=>{
        const number=this.selectNumber.value
    }

    render() {
        return (
            <div>
                <h1>Current value is :???</h1>
                <select ref={c=>this.selectNumber=c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.add}>+</button>&nbsp;
                <button onClick={this.minus}>-</button>&nbsp;
                <button onClick={this.addOdd}>odd+</button>&nbsp;
                <button onClick={this.addAsync}>asyn+</button>
            </div>
        )
    }
}
