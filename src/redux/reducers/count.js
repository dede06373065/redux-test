import { ADD , MINUS } from "../constants"
const initState=0
export default function countReducer(preState=initState, action){// 形参默认值
    const {type,data}=action
    switch(type){
        case ADD:
            //console.log(preState)
            return preState+data
        case MINUS:
            return preState-data
        default://此处为初始化的阶段不加不减；
            return preState
    }
}