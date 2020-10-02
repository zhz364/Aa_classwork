import { RECEIVE_TODO, RECEIVE_TODOS} from "../actions/todo_actions";

const todosReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_TODO:
            nextState[action.todo] = action.todo;
            return nextState;
        case RECEIVE_TODOS:
            nextState[action.todos] = action.todos; // maybe need shallow dup?
            return nextState;
        default:
            return state;
    }
}

export default todosReducer;