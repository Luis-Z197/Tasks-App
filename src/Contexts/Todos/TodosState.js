import { useReducer } from "react";
import TodosReducer from "./TodosReducer";
import TodosContext from "./TodosContext";

import React from 'react'

function TodosState( props) {

    const initialState = {
        todos: [],
        selected_todo: null
    }
    const [state, dispatch] = useReducer(TodosReducer, initialState)
    
    const getTodos = () => {
        let data = sessionStorage.getItem('todos');
        let todos = data!=null?JSON.parse(data):[]
        dispatch({
            type: 'GET_TODOS',
            payload: todos
        })
    }
    const deleteTodo = (todos, id) => {
        let new_list = todos.filter((todo) => todo.id !== id)
        sessionStorage.setItem('todos', JSON.stringify(new_list))
        dispatch({
            type: 'GET_TODOS',
            payload: new_list
        })
    }
    const updateTodo = (todos, task) => {
        let updateTasks = todos.map((todo) => {
            if(todo.id == task.id){
                todo.description = task.description
                todo.date = task.date
            }
            return todo
        })
        sessionStorage.setItem('todos', JSON.stringify(updateTasks))
        dispatch({
            type: 'GET_TODOS',
            payload: updateTasks
        })
    }
    const updateStatus = (todos, id) => {
        let updateTasks = todos.map((todo) => {
            if(todo.id == id){
                todo.status = !todo.status
            }
            return todo
        })
        sessionStorage.setItem('todos', JSON.stringify(updateTasks))
        dispatch({
            type: 'GET_TODOS',
            payload: updateTasks
        })
    }
    const editTodo = (todos, id) => {
        let todoSelected = todos.find(todo => todo.id===id)
        dispatch({
            type: 'GET_TODO',
            payload: todoSelected
        })
        console.log(todoSelected)
    }

  return (
    <TodosContext.Provider value={
        {
            todos: state.todos,
            selected_todo: state.selected_todo,
            getTodos,
            deleteTodo,
            editTodo,
            updateTodo,
            updateStatus
        }
    }>
        {props.children}
    </TodosContext.Provider>
  )
}

export default TodosState