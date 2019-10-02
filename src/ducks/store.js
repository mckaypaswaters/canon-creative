import {createStore} from 'redux'

const initialState = {
    galleryArr: [],
    galleryName: `-Insert Title Here-`,
    galleryImg: '',
}

// ACTION TYPES

function reducer(state = initialState, action){
    switch(action.type){
        default:
            return state
    }
}



export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )