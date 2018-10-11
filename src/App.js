import React, { Component } from 'react';
import './App.css';
import { add, reduce } from  "./action"
import { connect } from 'react-redux'
class App extends Component {
    render () {
        return (
            <div id="root">
                <div>
                    当前数字为：{this.props.demoState.count}
                </div>
                <button onClick={()=>this.props.add()}>增加</button>
                <button onClick={()=>this.props.reduce()}>减少</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        demoState : state.demo,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        add : ()=>add(dispatch),
        reduce : ()=>reduce(dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

