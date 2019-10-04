import {createStore} from 'redux'

const initialState = {
    galleryArr: []
}

// ACTION TYPES
export const ADD_TO_GALLERY = 'ADD_TO_GALLERY'


function reducer(state = initialState, action){
    switch(action.type){
        case ADD_TO_GALLERY:
                return {...state,galleryArr: action.payload}
        default:
            return state
    }
}



export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )