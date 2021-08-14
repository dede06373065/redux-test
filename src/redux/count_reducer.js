const initState=0
export default function countReducer(preState=initState, action){// 形参默认值
    const {type,data}=action
    switch(type){
        case 'add':
            //console.log(preState)
            return preState+data
        case 'minus':
            return preState-data
        default://此处为初始化的阶段不加不减；
            return preState
    }
}