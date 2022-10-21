import './form.css';
import { useState, useContext, useEffect } from 'react';
import TasksContext from '../../Contexts/Tasks/TasksContext';
import FormContext from '../../Contexts/Form/FormContext';
import Button from '../button/Button';

function Form() {

    const { addTask, selectedTask, updateTask } = useContext(TasksContext)
    const { show, setShow, action, setAction } = useContext(FormContext)

    const initialState = { id: null, description: '', date: '', status: false }

    const [dataForm, setDataForm] = useState(initialState)

    const [statusInputs, setStatusInputs] = useState({ description: true, date: true, hasErrors: false })

    const closedModalForm = () => {
        setAction('save')
        setShow(false)
    }

    const setInputform = (element) => {
        let name = ''
        let value = ''
        name = element.name
        value = element.value
        setDataForm({ ...dataForm, [name]: value })
    }

    const validateDataForm = () => {
        let statusForm = statusInputs
        statusForm.description = dataForm.description ? true : false
        statusForm.date = dataForm.date ? true : false
        if (!statusForm.description || !statusForm.date) {
            statusForm.hasErrors = true
        } else { statusForm.hasErrors = false }
        setStatusInputs(statusForm)
    }

    const save = () => {
        validateDataForm()
        if (statusInputs.hasErrors) {
            message("Error when saving", 'error')
        } else {
            addTask(dataForm)
            message("Successfully saved", 'succes')
        }
    }

    const update = () => {
        updateTask(dataForm)
        message("Successfully updated")
    }

    const message = (text, type) => {
        let message = document.createElement('p');
        message.className = type === 'succes' ? 'message ms-succes' : 'message ms-error'
        message.innerText = text
        let content = document.getElementById("content-message")
        content.appendChild(message)
        removeMessage()
    }
    const removeMessage = () => {
        let content = document.getElementById("content-message")
        setTimeout(() => {
            let chaild = content.firstChild;
            content.removeChild(chaild)
        }, 1500)
    }

    useEffect(() => {
        if (selectedTask != null && action === "edit") {
            setDataForm(selectedTask)
        } else { setDataForm(initialState) }
    }, [selectedTask, action])


    return (
        <div className="popup-form" style={{ display: show === true ? 'block' : 'none' }}>
            <div className="content-message" id='content-message'>
            </div>
            <div className="content-form">
                <div className="header-form">
                    <div className="title-form">
                        <p>{action === 'save' ? 'Register task' : 'Edit task'}</p>
                    </div>
                    <div>
                        <a className='closeed' onClick={() => closedModalForm()}><span className="material-icons">clear</span></a>
                    </div>
                </div>
                <form method="post" onSubmit={(e) => e.preventDefault()} >
                    <div className="c-input">
                        <span className="label">Description</span>
                        <input className="input" type="text" name="description" onChange={(e) => setInputform(e.target)}
                            value={dataForm.description} />
                        {!statusInputs.description && (
                            <span className="label-erros">this field is required</span>
                        )}
                    </div>
                    <div className="c-input">
                        <span className="label">Scheduled date </span>
                        <input className="input" type="date" name="date" onChange={(e) => setInputform(e.target)}
                            value={dataForm.date} />
                        {!statusInputs.date && (
                            <span className="label-erros">this field is required</span>
                        )}
                    </div>
                    <div className="content-button">
                        {
                            action === 'save' ? (
                                <Button action={save} nombre="Save" type="primary" />
                            ) : (<Button action={update} nombre="Update" type="secondary" />)
                        }
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;