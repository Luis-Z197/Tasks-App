import '../home/home.css';
import { useState, useEffect } from 'react';
import Header from '../../Components/header/Header';
import { data } from '../../data';
import List from '../../Components/list/List';
import Form from '../../Components/form/Form';

function Realizadas() {

    const [todos, setTodos] = useState([])
    const [total_todos, setTotalTodos] = useState(0)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setTodos(data.filter(todo => todo.status===true))
    }, [])

    useEffect(() => {
        setTotalTodos(todos.length)
    }, [todos])
    
    return (
        <>
            <Header />
            <div className="home">
                <div className="header-conten-list">
                    <div className="total-todo"><p>Tareas realizadas: <span>{total_todos}</span> </p> </div>
                    <div className="content-btn-add"> <button className="btn-add" onClick={()=>setVisible(true)} >Agregar tarea</button></div>
                </div>
                <List lista = {todos} />
            </div>
            <Form status_popup={visible} control={setVisible} />
        </>
    );
}

export default Realizadas;