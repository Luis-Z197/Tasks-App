import './list.css';
import { useState, useEffect } from 'react';
import MenuOptions from '../menu-options/MenuOptions';

function List(props) {

    const list = props.list;
    const [todos, setTodos] = useState([])

    useEffect(() => {
        setTodos(list)
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
                                    {todo.description}
                                </p>
                                <p className="fecha">{todo.date}</p>
                            </div>
                            <MenuOptions todo = {todo} />
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default List;