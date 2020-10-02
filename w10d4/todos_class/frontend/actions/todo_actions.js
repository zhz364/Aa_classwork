



export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

export const receiveTodos = (todos) => {
    return {
        type: RECEIVE_TODOS,
        todos: todos
    };
}

export const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO,
        todo: todo
    };
}


// receiveTodos
// action creator = return an action
// accepts an array arg todos
// return action object with type= Rec.. & todos = todos property