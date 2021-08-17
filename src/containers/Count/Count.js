import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addActionCreater} from '../../redux/actions/count'

class Count extends Component {
    add = () => {
        this.props.plus(1)
    }
    render() {
        return (
            <div>
                <h2>Count component:</h2>
                <h2>The sum is :{this.props.count}</h2>
                <button onClick={ this.add}>plus one</button>
            </div>
        )
    }
}
export default connect(
    state => ({ count: state }),
    {
        plus:addActionCreater
    }
)(Count)

