import './home.css';
import { useState, useEffect, useContext } from 'react';
import TodosContext from '../../Contexts/Todos/TodosContext';
import FormContext from '../../Contexts/Form/FormContext';
import Header from '../../Components/header/Header';
import List from '../../Components/list/List';
import Form from '../../Components/form/Form';

function Home() {

    const { getTodos, todos } = useContext(TodosContext)
    const { setShow } = useContext(FormContext)
    const [total_todos, setTotalTodos] = useState(0)

    useEffect(() => {
        getTodos()
    }, []) 

    useEffect(() => {
        setTotalTodos(todos.length)
    }, [todos])
    
    return (
        <>
            <Header />
            <div className="home">
                <div className="header-conten-list">
                    <div className="total-todo"><p>Total: <span>{total_todos}</span> </p> </div>
                    <div className="content-btn-add"><button className="btn-add" onClick={()=>setShow(true)} >Add</button></div>
                </div>
                <List list = {todos} />
            </div>
            <Form />
        </>
    );
}

export default Home;