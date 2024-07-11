

import React, { useState } from 'react';
import '../styles/tasklist.css';
import { TaskList } from '../components/tasklist.component';

export const HomePage = () => {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [error, setError] = useState('');


    const handleInputChange = (e) => {
        setTaskName(e.target.value);
        setError('');
    };

    const handleAddTask = () => {
        if (taskName.trim() === '') {
            setError('Enter a task.');
            return;
        }
        const newTask = {
            id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            name: taskName,
        };
        setTasks([...tasks, newTask]);
        setTaskName('');
    }


    const handleDeleteTask = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    };

    return (
        <div className="task-list-container">
            <h1>Task List</h1>
            <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} />
            <input
                type="text"
                value={taskName}
                onChange={handleInputChange}
                placeholder="Enter a new task"
            />
            <button onClick={handleAddTask}>Add</button>
            {error && <p className="error-message">{error}</p>}
        </div>
    )
}

