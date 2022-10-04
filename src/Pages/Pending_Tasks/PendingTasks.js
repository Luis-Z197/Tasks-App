import '../Home/home.css';
import { useState, useEffect, useContext } from 'react';
import TodosContext from '../../Contexts/Todos/TodosContext';
import Header from '../../Components/header/Header';
import List from '../../Components/list/List';
import Form from '../../Components/form/Form';

function PendingTasks() {

    const { getTodos, todos } = useContext(TodosContext)
    const [pending_tasks, setPendingTask] = useState([])
    const [total_todos, setTotalTodos] = useState(0)

    useEffect(() => {
        getTodos()
        setPendingTask(todos.filter(todo => todo.status===false))
    }, [])

    useEffect(() => {
        setTotalTodos(pending_tasks.length)
    }, [todos])
    
    return (
        <>
            <Header />
            <div className="home">
                <div className="header-conten-list">
                    <div className="total-todo"><p>Total: <span>{total_todos}</span> </p> </div>
                </div>
                <List list = {pending_tasks} />
            </div>
            <Form />
        </>
    );
}

export default PendingTasks;