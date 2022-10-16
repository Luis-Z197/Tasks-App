import React, { useState, useContext } from 'react'
import './menu-options.css'
import TasksContext from '../../Contexts/Tasks/TasksContext';
import FormContext from '../../Contexts/Form/FormContext';

function MenuOptions(props) {

    const task = props.task
    const { selectTask, deleteTask, updateStatus } = useContext(TasksContext)
    const { setShow, setAction, show } = useContext(FormContext)
    const [isVisible, setIsVisible] = useState(true)


    const select = () => {
        selectTask(task.id)
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
                        <div className="op-items done" onClick={() => { updateStatus(task.id) }}>
                            <span className="material-icons">{task.status ? 'task_alt' : 'radio_button_unchecked'}</span>
                        </div>
                        {
                            !task.status && (
                                <div className="op-items edit" onClick={() => { select() }}>
                                    <span className="material-icons">edit</span>
                                </div>
                            )
                        }
                        <div className="op-items delete" onClick={() => { deleteTask(task.id) }}>
                            <span className="material-icons">delete</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuOptions
