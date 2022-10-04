import '../Home/home.css';
import { useState, useEffect, useContext } from 'react';
import TodosContext from '../../Contexts/Todos/TodosContext';
import Header from '../../Components/header/Header';
import List from '../../Components/list/List';
import Form from '../../Components/form/Form';

function TasksDone() {

    const { getTodos, todos } = useContext(TodosContext)
    const [tasks_done, setTaskDone] = useState([])
    const [total_todos, setTotalTodos] = useState(0)

    useEffect(() => {
        getTodos()
    },[])

    useEffect(() => {
        setTaskDone(todos.filter(todo => todo.status===true))
    }, [todos])

    useEffect(() => {
        setTotalTodos(tasks_done.length)
    }, [tasks_done])
    
    return (
        <>
            <Header />
            <div className="home">
                <div className="header-conten-list">
                    <div className="total-todo"><p>Total: <span>{total_todos}</span> </p> </div>
                </div>
                <List list = {tasks_done} />
            </div>
            <Form />
        </>
    );
}

export default TasksDone;