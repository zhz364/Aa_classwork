import {createStore} from "redux";
import rootReducer from "../reducers/root_reducer"

const configureStore = () =>{
    return createStore(rootReducer)
};

// : createStore(reducer, [preloadedState], [enhancer]);

// // store.js
// import { createStore } from `redux`;
// import reducer from './reducer.js';

// const store = createStore(reducer);

export default configureStore;

