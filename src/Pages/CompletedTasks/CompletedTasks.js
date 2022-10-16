import '../Home/home.css';
import { useState, useEffect, useContext } from 'react';
import TasksContext from '../../Contexts/Tasks/TasksContext';
import Header from '../../Components/header/Header';
import List from '../../Components/list/List';
import Form from '../../Components/form/Form';
import Footer from '../../Components/footer/Footer';

function CompletedTasks() {

    const { getTasks, tasks } = useContext(TasksContext)
    const [completedTasks, setCompletedTasks] = useState([])
    const [totalTasks, setTotalTasks] = useState(0)

    useEffect(() => {
        getTasks()
    },[])

    useEffect(() => {
        setCompletedTasks(tasks.filter(task => task.status===true))
    }, [tasks])

    useEffect(() => {
        setTotalTasks(completedTasks.length)
    }, [completedTasks])
    
    return (
        <>
            <Header />
            <div className="home">
                <div className="header-conten-list">
                    <div className="total-todo"><p>Total: <span>{totalTasks}</span> </p> </div>
                </div>
                <List list = {completedTasks} />
            </div>
            <Form />
            <Footer />
        </>
    );
}

export default CompletedTasks;