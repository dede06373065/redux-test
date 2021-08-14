import { ADD , MINUS } from "./constants"
// function addActionCreater(data){
//     return {type:ADD,data}
// }
export const addActionCreater=data=>({type:ADD,data})//简写

// function minusActionCreater(data){
//     return {type:MINUS,data}
// }
export const minusActionCreater=data=>({type:MINUS,data})

//分别暴露