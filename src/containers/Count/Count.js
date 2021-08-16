import CountUI from '../../components/Count';
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
)(CountUI)