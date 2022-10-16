import './form.css';
import { useState, useContext, useEffect } from 'react';
import TasksContext from '../../Contexts/Tasks/TasksContext';
import FormContext from '../../Contexts/Form/FormContext';
import Button from '../button/Button';
function Form() {

    const { getTasks, addTask, selectedTask, updateTask} = useContext(TasksContext)
    const { show, setShow, action, setAction } = useContext(FormContext)

    const initialState = {id:null, description:'', date:'', status:false};

    const [dataForm, setDataForm] = useState(initialState);

    const [typeMessage, setTypeMessage] = useState(true)

    const closedModalForm = () => {
        setAction('save')
        setShow(false)
    }

    const setInputform = (element) => {
        let name=''
        let value=''
        name=element.name
        value=element.value
        setDataForm({ ...dataForm, [name]: value });
    }

    const save = () =>{
        addTask(dataForm)
        message("Successfully saved")
    }
    
    const update = () =>{
        updateTask(dataForm)
        message("Successfully updated")
    }
    
    const message = (text) => {
        let message = document.createElement('p');
        message.className=typeMessage?'message ms-succes':'message ms-error';
        message.innerText = text;
        let content = document.getElementById("content-message")
        content.appendChild(message)
        removeMessage()
    }
    const removeMessage = () => {
        let content = document.getElementById("content-message")
        setTimeout(()=>{
            let chaild = content.firstChild;
            content.removeChild(chaild);
        },1500)
    }

    useEffect(() => {
      if(selectedTask != null && action==="edit"){
        setDataForm(selectedTask)
      }else{setDataForm(initialState)}
      console.log(dataForm)
    }, [selectedTask, action])
    

    return (
        <div className="popup-form" style={{display:show===true?'block':'none'}}>
            <div className="content-message" id='content-message'>
            </div>
            <div className="content-form">
                <div className="header-form">
                    <div className="title-form">
                        <p>{action==='save'?'Register task':'Edit task'}</p>
                    </div>
                    <div>
                        <a className='closeed' onClick={()=>closedModalForm()}><span className="material-icons">clear</span></a>
                    </div>
                </div>
                <form method="post" onSubmit={(e)=> e.preventDefault()} >
                    <div className="c-input">
                        <span className="label">Description</span>
                        <input className="input" type="text" name="description" onChange={(e) => setInputform(e.target)} 
                        value={dataForm.description} />
                    </div>
                    <div className="c-input">
                        <span className="label">Scheduled date </span>
                        <input className="input" type="date" name="date" onChange={(e) => setInputform(e.target)} 
                        value={dataForm.date} />
                    </div>
                    <div className="content-button">
                    {
                        action==='save'?(
                            <Button action = {save} nombre="Save" type="primary"/>
                        ):(<Button action = {update} nombre="Update" type="secondary"/>)
                    }
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;