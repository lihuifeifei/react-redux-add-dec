import React, { Component } from 'react';
import './App.css';

function createStore(reducer){
    var state,listeners = [];
    const getState = () => state;
    const dispatch = (action) => {
        state = reducer(state,action);
        listeners.forEach(item => item())
    }
    const subscribe = (listener) => {
        listeners.push(listener);
        return ()=>{
            listeners = listeners.filter(item => item != listener)
        }
    }
    dispatch({});
    return {
        getState,
        dispatch,
        subscribe
    }
}
function reducer(state = 0,action) {
    switch (action.type){
        case "ADD":
            return this.state+1;
            break;
        case "DEC":
            return this.state-1;
            break;
        default:
            return state
    }
}
var store=createStore(reducer);
var obj = document.getElementById('root');
obj.innerHTML = store.getState();
store.subscribe(function () {
    obj.innerHTML = store.getState();
})

function add() {
    store.dispatch({type: 'ADD'})
}
function dec () {
    store.dispatch({type:'DEC'})
}
class App extends Component {
    
    render () {
        return (
            <div id="root">
                <div >当前数字为：{obj.innerHTML}</div>
                <div>
                <button onClick="add()">加1</button>
                <button onClick="dec()">减1</button>
                    </div>
            </div>
        )
    }
}

export default App;
