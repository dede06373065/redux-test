import React, { Component } from 'react'
import {
    addActionCreater,
    minusActionCreater,
    addActionAsyncCreater
} from '../../redux/count_action'
//引入connect连接redux和ui
import {connect} from 'react-redux'

// const mapStateToProps=state=>({count:state})

// const mapDispatchToProps=dispatch=>({
//     add:(data)=>{
//         dispatch(addActionCreater(data))
//     },
//     minus:(data)=>{
//         dispatch(minusActionCreater(data))
//     },
//     addAsync:data=>dispatch(addActionAsyncCreater(data,2000))
// })
// export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
class Count extends Component {

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
        this.props.addAsync(number*1,2000)
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

export default connect(
    state=>({count:state}),
    // dispatch=>({
    //         add:(data)=>{
    //             dispatch(addActionCreater(data))
    //         },
    //         minus:(data)=>{
    //             dispatch(minusActionCreater(data))
    //         },
    //         addAsync:data=>dispatch(addActionAsyncCreater(data,2000))
    //     })
    //有mapDispatchToProps的精简写法
    {
        add:addActionCreater,//虽然没有体现传参数但是data是接收到了的
        minus:minusActionCreater,
        addAsync:addActionAsyncCreater
    }
)(Count)