export const ADD = "ADD"
export const REDUCE = "REDUCE"


export const add = (dispatch) => {
    dispatch({type : ADD})
}


export const reduce = (dispatch) => {
    dispatch({type : REDUCE})
}
