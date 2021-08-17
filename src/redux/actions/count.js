import { ADD , MINUS } from "../constants"

// function addActionCreater(data){
//     return {type:ADD,data}
// }
export const addActionCreater=data=>({type:ADD,data})//简写

// function minusActionCreater(data){
//     return {type:MINUS,data}
// }
//同步action指action返回值是一个对象
export const minusActionCreater=data=>({type:MINUS,data})

//分别暴露
//异步action为 action返回值是一个函数
export const addActionAsyncCreater=(data,time)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(addActionCreater(data))},time)
    }
}