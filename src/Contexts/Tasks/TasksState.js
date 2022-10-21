import { useState } from "react";
import TasksContext from "./TasksContext";

function TasksState(props) {

    const [tasks, setTasks] = useState([])
    const [selectedTask, setSelectedTask] = useState({})

    const getTasks = () => {
        let data = localStorage.getItem('tasks');
        let taskList = data != null ? JSON.parse(data) : []
        setTasks(taskList)
    }

    const addTask = (dataForm) => {
        let newData = []
        let dataStorage = localStorage.getItem('tasks')
        let data = dataForm
        if (dataStorage === null) {
            data.id = 1
        } else {
            newData = JSON.parse(dataStorage)
            data.id = newData.length + 1
        }
        newData.push(data);
        localStorage.setItem('tasks', JSON.stringify(newData))
        setTasks(newData)
    }

    const updateTask = (updatedTask) => {
        let updatedTasks = tasks.map((task) => {
            if (task.id === updatedTask.id) {
                task.description = updatedTask.description
                task.date = updatedTask.date
            }
            return task
        })
        localStorage.setItem('tasks', JSON.stringify(updatedTasks))
        setTasks(updatedTasks)
    }

    const deleteTask = (id) => {
        let updatedList = tasks.filter((task) => task.id !== id)
        localStorage.setItem('tasks', JSON.stringify(updatedList))
        setTasks(updatedList)
    }

    const updateStatus = (id) => {
        let updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                task.status = !task.status
            }
            return task
        })
        localStorage.setItem('tasks', JSON.stringify(updatedTasks))
        setTasks(updatedTasks)
    }
    const selectTask = (id) => {
        let selectedTask = tasks.find(task => task.id === id)
        setSelectedTask(selectedTask)
        console.log(selectedTask)
    }

    return (
        <TasksContext.Provider value={
            {
                tasks,
                selectedTask,
                getTasks,
                addTask,
                updateTask,
                deleteTask,
                updateStatus,
                selectTask
            }
        }>
            {props.children}
        </TasksContext.Provider>
    )
}

export default TasksState