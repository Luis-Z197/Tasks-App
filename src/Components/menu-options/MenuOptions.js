import React, { useState, useContext } from 'react'
import './menu-options.css'
import TodosContext from '../../Contexts/Todos/TodosContext';
import FormContext from '../../Contexts/Form/FormContext';

function MenuOptions(props) {

    const todo = props.todo
    const { todos, editTodo, deleteTodo, updateStatus } = useContext(TodosContext)
    const { setShow, setAction, show } = useContext(FormContext)
    const [isVisible, setIsVisible] = useState(true)


    const edit = () => {
        editTodo(todos, todo.id)
        setShow(true)
        setIsVisible(true)
        setAction('edit')
    }

    return (
        <div className="options">
            <div className="c-icon" style={{ display: isVisible ? null : 'none' }}>
                <a className="icon-options" onClick={() => { setIsVisible(false) }}>
                    <span className="material-icons" style={{ color: 'grey' }}>more_vert</span>
                </a>
            </div>
            <div className="popup" style={{ display: isVisible ? 'none' : 'block' }}>
                <div className="content-options" id="content-options">
                    <div className='c-icon'>
                        <a className="icon-close" onClick={() => { setIsVisible(true) }}>
                            <span className="material-icons" style={{ color: 'grey' }}>close</span>
                        </a>
                    </div>
                    <div className="list-options">
                        <div className="op-items done" onClick={() => { updateStatus(todos, todo.id) }}>
                            <span className="material-icons">{todo.status ? 'task_alt' : 'radio_button_unchecked'}</span>
                        </div>
                        {
                            !todo.status && (
                                <div className="op-items edit" onClick={() => { edit() }}>
                                    <span className="material-icons">edit</span>
                                </div>
                            )
                        }
                        <div className="op-items delete" onClick={() => { deleteTodo(todos, todo.id) }}>
                            <span className="material-icons">delete</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuOptions
