import React, { Component } from 'react';
import './App.css';
import { add, reduce } from  "./action"
import { connect } from 'react-redux'
class App extends Component {
    render () {
        return (
            <div id="root">
                <div>
                    {this.props.demoState.count}
                </div>
                <a onClick={()=>this.props.add()}>增加</a>
                <a onClick={()=>this.props.reduce()}>减少</a>
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

