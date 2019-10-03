import {createStore} from 'redux'

const initialState = {
    galleryArr: [],
    galleryName: `-Insert Title Here-`,
    galleryImg: '',
}

// ACTION TYPES
export const ADD_TO_GALLERY = 'ADD_TO_GALLERY'
export const HANDLE_CHANGE_NAME = 'HANDLE_CHANGE_NAME'
export const HANDLE_CHANGE_IMG = 'HANDLE_CHANGE_IMG' // This is just for testing purposes until I learn amazon s3

function reducer(state = initialState, action){
    switch(action.type){
        case HANDLE_CHANGE_NAME:
            return {...state, galleryName: action.payload}
        case HANDLE_CHANGE_IMG:
            return {...state, galleryImg: action.payload}
        case ADD_TO_GALLERY:
                return {...state,galleryArr: [...state.galleryArr, state.galleryName, state.galleryImg]}
        default:
            return state
    }
}



export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )