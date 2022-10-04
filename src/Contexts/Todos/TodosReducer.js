const GET_TODOS = 'GET_TODOS';
const GET_TODO = 'GET_TODO';

export default function (state, action) {
    const { payload, type } = action;
    switch (type) {
        case GET_TODOS:

            return {
                ...state,
                todos: payload
            };
        case GET_TODO:

            return {
                ...state,
                selected_todo: payload
            }; 
        default:
            return state;
    }
}