import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store  from './redux/store'
import {Provider} from 'react-redux'
//import store from './redux/store'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'))
//监测redux中状态改变，重新渲染
// store.subscribe(()=>{
//     ReactDOM.render(<App/>, document.getElementById('root'))
// })//因为用了react-redux所以不用自己再监测了

