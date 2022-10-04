import './form.css';
import { useState, useContext, useEffect } from 'react';
import TodosContext from '../../Contexts/Todos/TodosContext';
import FormContext from '../../Contexts/Form/FormContext';
import Button from '../button/Button';
function Form() {

    const { getTodos, selected_todo, updateTodo, todos} = useContext(TodosContext)
    const { show, setShow, action, setAction } = useContext(FormContext)

    const initialState = {id:null, description:'', date:'', status:false};

    const [dataForm, setDataForm] = useState(initialState);

    const [typeMessage, setTypeMessage] = useState(true)

    const closed = () => {
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

    const guardar = () =>{
        setTypeMessage(true)
        let newData=[]
        let dataStorage = sessionStorage.getItem('todos')
        let data = dataForm
        if(dataStorage === null){
            data.id = 1
        }else{
            newData=JSON.parse(dataStorage)
            data.id = newData.length + 1
        }
        newData.push(data);
        sessionStorage.setItem('todos', JSON.stringify(newData))
        getTodos()
        message("Successfully saved")
    }

    const submit = () =>{
        guardar()
    }
    
    const update = () =>{
        updateTodo(todos, dataForm)
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
      if(selected_todo != null && action==="edit"){
        setDataForm(selected_todo)
      }else{setDataForm(initialState)}
      console.log(dataForm)
    }, [selected_todo, action])
    

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
                        <a className='closeed' onClick={()=>closed()}><span className="material-icons">clear</span></a>
                    </div>
                </div>
                <form method="post" onSubmit={(e)=> e.preventDefault()} >
                    <div className="c-input">
                        <span className="label">Descripción de la tarea</span>
                        <input className="input" type="text" name="description" onChange={(e) => setInputform(e.target)} 
                        value={dataForm.description} />
                    </div>
                    <div className="c-input">
                        <span className="label">Fecha programada </span>
                        <input className="input" type="date" name="date" onChange={(e) => setInputform(e.target)} 
                        value={dataForm.date} />
                    </div>
                    <div className="content-button">
                    {
                        action==='save'?(
                            <Button action = {submit} nombre="Save" type="primary"/>
                        ):(<Button action = {update} nombre="Update" type="secondary"/>)
                    }
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;