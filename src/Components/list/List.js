import './list.css';
import { useState, useEffect } from 'react';

function List(props) {

    const lista = props.lista;
    const [todos, setTodos] = useState([])
    const [isVisible, setIsVisible] = useState(true)

    const deleteTodo = (id) => { 
        console.log(todos)
        let new_list = todos.filter((todo) => todo.id !== id)
        setTodos(new_list)
    }

    useEffect(() => {
        setTodos(lista)
    })

    return (
        <div className="content-list">
            {
                todos.map((todo) => (
                    <div className="todo">
                        <div className="todo-details">
                            <span className="material-icons" style={{ color: todo.status ? '#10b981' : '#757575' }}>
                                {todo.status ? 'task_alt' : 'radio_button_unchecked'}
                            </span>
                            <div className="details">
                                <p className="description">
                                    {todo.descripcion}
                                </p>
                                <p className="fecha">{todo.date}</p>
                            </div>
                            <div className="options">
                                <div className="c-icon" style={{ display: isVisible?null:'none'}}>
                                    <a className="icon-options" onClick={()=> {setIsVisible(false)}}>
                                        <span className="material-icons" style={{ color: 'grey' }}>more_vert</span>
                                    </a>
                                </div>
                                <div className="content-options" style={{ display: isVisible?'none':'block'}}>
                                    <div className='c-icon'>
                                        <a className="icon-close" onClick={()=> {setIsVisible(true)}}>
                                            <span className="material-icons" style={{ color: 'grey' }}>close</span>
                                        </a>
                                    </div>
                                    <ul>
                                        <li><a className="op-items">editar</a></li>
                                        <li><a className="op-items">finalizar tarea</a></li>
                                        <li><a className="op-items" onClick={() =>{deleteTodo(todo.id)}}>eliminar</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default List;