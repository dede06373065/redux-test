import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addActionCreater} from '../../redux/actions/count'

class Count extends Component {
    add = () => {
        this.props.plus(1)
    }
    render() {
        //console.log(this.props.persons.length)
        return (
            <div>
                <h2>Count component and the number of person is:{this.props.persons.length}</h2>
                <h2>The sum is :{this.props.count}</h2>
                <button onClick={ this.add}>plus one</button>
            </div>
        )
    }
}
export default connect(
    state => ({ count: state.sum,
    persons:state.persons }),
    {
        plus:addActionCreater
    }
)(Count)

