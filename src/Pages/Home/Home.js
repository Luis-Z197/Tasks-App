import './home.css';
import { useState, useEffect, useContext } from 'react';
import TasksContext from '../../Contexts/Tasks/TasksContext';
import FormContext from '../../Contexts/Form/FormContext';
import Header from '../../Components/header/Header';
import List from '../../Components/list/List';
import Form from '../../Components/form/Form';
import Footer from '../../Components/footer/Footer';

function Home() {

    const { getTasks, tasks } = useContext(TasksContext)
    const { setShow } = useContext(FormContext)
    const [totalTasks, setTotalTasks] = useState(0)

    useEffect(() => {
        getTasks()
    }, []) 

    useEffect(() => {
        setTotalTasks(tasks.length)
    }, [tasks])
    
    return (
        <>
            <Header />
            <div className="home">
                <div className="header-conten-list">
                    <div className="total-todo"><p>Total: <span>{totalTasks}</span> </p> </div>
                    <div className="content-btn-add"><button className="btn-add" onClick={()=>setShow(true)} >Add</button></div>
                </div>
                <List list = {tasks} />
            </div>
            <Form />
            <Footer />
        </>
    );
}

export default Home;