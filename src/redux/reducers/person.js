import {ADD_PERSON} from  '../constants'
const initPerson=[{id:'001',name:'aa',age:18}]
export default function personReducer(preState=initPerson,action){
    const {type, data}=action
    switch(type){
        case ADD_PERSON:
            return [data,...preState]
        default:
            return preState
    }
}


