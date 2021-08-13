import React, { Component } from 'react'

export default class Count extends Component {
    state={
        count:0
    }
    add=()=>{
        const number=this.selectNumber.value
        const preValue=this.state.count
        this.setState({count:preValue+number*1})//强制类型转换
    }

    minus=()=>{
        const number=this.selectNumber.value
        const preValue=this.state.count
        this.setState({count:preValue-Number(number)})
    }

    addOdd=()=>{
        const number=this.selectNumber.value
        const preValue=this.state.count
        if(preValue%2!==0){
            this.setState({count:preValue+Number(number)})
        }
    }

    addAsync=()=>{
        const number=this.selectNumber.value
        const preValue=this.state.count
        setTimeout(()=>{
            this.setState({count:preValue+Number(number)})
        },2000)

    }

    render() {
        return (
            <div>
                <h1>Current value is :{this.state.count}</h1>
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
