import CountUI from '../../components/Count';
import {
    addActionCreater,
    minusActionCreater,
    addActionAsyncCreater
} from '../../redux/count_action'
//引入connect连接redux和ui
import {connect} from 'react-redux'

function mapStateToProps(state){
    return {count:state}
}
function mapDispatchToProps(dispatch){
    return {
    add:(data)=>{
        dispatch(addActionCreater(data))
    },
    minus:(data)=>{
        dispatch(minusActionCreater(data))
    },
    addAsync:data=>dispatch(addActionAsyncCreater(data,2000))

}
}
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
