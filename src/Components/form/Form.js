import './form.css';
import { useState } from 'react';
import Button from '../button/Button';
function Form(props) {

    const actualizarLista = props.getTodos

    const [dataForm, setDataForm] = useState({
        id:0, description:'', date:''
    })

    const [typeMessage, setTypeMessage] = useState(true)

    const setInputform = (element) => {
        let name=''
        let value=''
        name=element.name
        value=element.value
        setDataForm({ ...dataForm, [name]: value });
    }

    const visible = props.status_popup;
    const setVisible = props.control;

    const guardar = () =>{
        let newData=[]
        let dataStorage = sessionStorage.getItem('todos')
        setTypeMessage(true)
        if(dataStorage==null){
            setDataForm({ ...dataForm, ['id']: 1 });
            newData.push(dataForm);
            sessionStorage.setItem('todos', JSON.stringify(newData))
        }
        if(dataStorage!=null){
            newData=JSON.parse(dataStorage)
            let id = newData.length+1;
            setDataForm({ ...dataForm, ['id']: id});
            newData.push(dataForm);
            sessionStorage.setItem('todos', JSON.stringify(newData))
        }
        actualizarLista()
        message()
    }

    const submit = () =>{
        guardar()
        console.log(dataForm)
    }
    
    const message = () => {
        let error = 'Error al registrar la tarea'
        let succes = 'Tarea registrada con exito'
        let message = document.createElement('div');
        message.className=typeMessage?'message ms-succes':'message ms-error';
        let textMessage = document.createElement('p');
        textMessage.innerText = typeMessage?succes:error;
        message.appendChild(textMessage);
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

    return (
        <div className="popup-form" style={{display:visible==true?'block':'none'}}>
            <div className="content-message" id='content-message'>
            </div>
            <div className="content-form">
                <div className="header-form">
                    <div className="title-form">
                        <p>Registro de tareas</p>
                    </div>
                    <div>
                        <a className='close' onClick={()=>setVisible(false)}><span className="material-icons">clear</span></a>
                    </div>
                </div>
                <form method="post" onSubmit={(e)=> e.preventDefault()} id="form-register">
                    <div className="c-input">
                        <span className="label">Descripción de la tarea</span>
                        <input className="input" type="text" name="descripcion" onChange={(e) => setInputform(e.target)}/>
                    </div>
                    <div className="c-input">
                        <span className="label">Fecha programada</span>
                        <input className="input" type="date" name="date" onChange={(e) => setInputform(e.target)}/>
                    </div>
                    <Button action = {submit} nombre="Registrar" type="primary"/>
                </form>
            </div>
        </div>
    );
}

export default Form;