import { combineReducers, createStore } from 'redux'
import demo from "./reducer";

const reducers = {
    demo
}

// 给增强后的 createStore 函数传入 reducer，生成唯一的 store 状态树
const store = createStore(combineReducers(reducers))

export default store