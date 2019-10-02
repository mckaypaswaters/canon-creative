import {createStore} from 'redux'

const initialState = {
    galleryArr: [],
    galleryName: `-Insert Title Here-`,
    galleryImg: '',
}

// ACTION TYPES
export const ADD_TO_GALLERY = 'ADD_TO_GALLERY'

function reducer(state = initialState, action){
    switch(action.type){
        case ADD_TO_GALLERY:
                return {...state, galleryArr: [...state.galleryArr, state.galleryName, state.galleryImg]}
        default:
            return state
    }
}



export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )