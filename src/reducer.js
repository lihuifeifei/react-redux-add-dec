import { ADD, REDUCE } from './action';

const initialState = {
    count : 0
}

export default (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case ADD:
            newState.count = newState.count + 1
            break
        case REDUCE:
            newState.count = newState.count - 1
            break
        
    }
    return {...newState};
}