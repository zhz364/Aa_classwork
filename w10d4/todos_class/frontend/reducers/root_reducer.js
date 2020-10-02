import todosReducer from "./todos_reducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({todos: todosReducer});



// rootReducer = combineReducers({potato: potatoReducer, tomato: tomatoReducer})
// // This would produce the following state object
// {
//   potato: {
//     // ... potatoes, and other state managed by the potatoReducer ...
//   },
//   tomato: {
//     // ... tomatoes, and other state managed by the tomatoReducer, maybe some nice sauce? ...
//   }
// }

export default rootReducer;