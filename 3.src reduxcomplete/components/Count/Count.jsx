import React, { Component } from 'react'
import store from '../../redux/store'
import { addActionCreater, minusActionCreater} from '../../redux/count_action'

export default class Count extends Component {
    // state={
    //     count:0
    // } 不再有自己的状态
    // componentDidMount(){
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }
    add=()=>{
        const number=this.selectNumber.value
        store.dispatch(addActionCreater(number*1))
    }

    minus=()=>{
        const number=this.selectNumber.value
        store.dispatch(minusActionCreater(number*1))
    }

    addOdd=()=>{
        const number=this.selectNumber.value
        const preValue=store.getState()
        if(preValue%2!==0){
            store.dispatch(addActionCreater(number*1))
        }
    }

    addAsync=()=>{
        const number=this.selectNumber.value
        setTimeout(()=>{
            store.dispatch(addActionCreater(number*1))
        },2000)
    }

    render() {
        return (
            <div>
                <h1>Current value is :{store.getState()}</h1>
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
