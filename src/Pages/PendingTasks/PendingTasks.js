import '../Home/home.css';
import { useState, useEffect, useContext } from 'react';
import TasksContext from '../../Contexts/Tasks/TasksContext';
import Header from '../../Components/header/Header';
import List from '../../Components/list/List';
import Form from '../../Components/form/Form';
import Footer from '../../Components/footer/Footer';


function PendingTasks() {

    const { getTasks, tasks } = useContext(TasksContext)
    const [pendingTasks, setPendingTask] = useState([])
    const [totalTasks, setTotalTasks] = useState(0)

    useEffect(() => {
        getTasks()
    },[])

    useEffect(() => {
        setPendingTask(tasks.filter(task => task.status===false))
    }, [tasks])

    useEffect(() => {
        setTotalTasks(pendingTasks.length)
    }, [pendingTasks])
    
    return (
        <>
            <Header />
            <div className="home">
                <div className="header-conten-list">
                    <div className="total-todo"><p>Total: <span>{totalTasks}</span> </p> </div>
                </div>
                <List list = {pendingTasks} />
            </div>
            <Form />
            <Footer />
        </>
    );
}

export default PendingTasks;