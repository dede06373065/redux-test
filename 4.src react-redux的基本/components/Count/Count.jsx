import React, { Component } from 'react'


export default class Count extends Component {

    add=()=>{
        const number=this.selectNumber.value
        this.props.add(number*1)
    }

    minus=()=>{
        const number=this.selectNumber.value 
        this.props.minus(number*1)
    }

    addOdd=()=>{
        const number=this.selectNumber.value
        if(this.props.count%2!==0){
            this.props.add(number*1)
        }
    }

    addAsync=()=>{
        const number=this.selectNumber.value
        this.props.addAsync(number*1)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Current value is :{this.props.count}</h1>
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
