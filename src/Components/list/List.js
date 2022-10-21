import './list.css';
import { useState, useEffect } from 'react';
import MenuOptions from '../menu-options/MenuOptions';

function List(props) {

    const list = props.list;
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(list)
    }, [list])

    return (
        <div className="content-list">
            {
                tasks.map((task) => (
                    <div className="todo">
                        <div className="todo-details">
                            <span className="material-icons" style={{ color: task.status ? '#10b981' : '#757575' }}>
                                {task.status ? 'task_alt' : 'radio_button_unchecked'}
                            </span>
                            <div className="details">
                                <p className="description">
                                    {task.description}
                                </p>
                                <p className="fecha">{task.date}</p>
                            </div>
                            <MenuOptions task = {task} />
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default List;