import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodo, addTask, deleteTask, updateTask } from '../features/TaskSlice'

const TaskList = () => {
    const dispatch = useDispatch()
    const tasks = useSelector((state) => state.tasks.tasks)
    const loading = useSelector((state) => state.tasks.loading)
    const error = useSelector((state) => state.tasks.error)

    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [newTaskDesc, setNewTaskDesc] = useState('')
    const [editingId, setEditingId] = useState(null)
    const [editTitle, setEditTitle] = useState('')
    const [editDesc, setEditDesc] = useState('')

    useEffect(() => {
        dispatch(fetchTodo())
    }, [dispatch])

    const handleAddTask = (e) => {
        e.preventDefault()
        if (!newTaskTitle.trim()) return;
        const newTask = {
            id: Date.now(),
            title: newTaskTitle,
            description: newTaskDesc,
            status: 'TO DO'
        }
        dispatch(addTask(newTask))
        setNewTaskTitle('')
        setNewTaskDesc('')
    }

    const startEditing = (task) => {
        setEditingId(task.id)
        setEditTitle(task.title)
        setEditDesc(task.description || '')
    }

    const saveEdit = (id) => {
        dispatch(updateTask({ id, title: editTitle, description: editDesc }))
        setEditingId(null)
    }

    const toggleStatus = (task) => {
        const newStatus = task.status === 'Completed' ? 'TO DO' : 'Completed'
        dispatch(updateTask({ id: task.id, status: newStatus }))
    }

    if (loading) {
        return (
            <div className="loader-container">
                <div className="spinner"></div>
                <p>Tasks Loading...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="error-container">
                <p>Error Occurred: {error}</p>
            </div>
        )
    }

    return (
        <div className="task-manager">
            <header className="tm-header">
                <h1>Task Manager</h1>
                <p>Organize your work, effortlessly.</p>
            </header>

            <form className="add-task-form" onSubmit={handleAddTask}>
                <input 
                    type="text" 
                    placeholder="What needs to be done?" 
                    value={newTaskTitle} 
                    onChange={(e) => setNewTaskTitle(e.target.value)} 
                    className="task-input"
                />
                <input 
                    type="text" 
                    placeholder="Add a description (optional)" 
                    value={newTaskDesc} 
                    onChange={(e) => setNewTaskDesc(e.target.value)} 
                    className="task-input"
                />
                <button type="submit" className="btn btn-primary">Add Task</button>
            </form>

            <div className="task-list-container">
                {tasks.length === 0 ? (
                    <p className="no-tasks">No tasks found. Add one above!</p>
                ) : (
                    <ul className="task-list">
                        {tasks.map(task => (
                            <li key={task.id} className={`task-card ${task.status === 'Completed' ? 'completed' : ''}`}>
                                {editingId === task.id ? (
                                    <div className="edit-mode">
                                        <input 
                                            type="text" 
                                            value={editTitle} 
                                            onChange={(e) => setEditTitle(e.target.value)} 
                                            className="task-input"
                                        />
                                        <input 
                                            type="text" 
                                            value={editDesc} 
                                            onChange={(e) => setEditDesc(e.target.value)} 
                                            className="task-input"
                                        />
                                        <div className="action-buttons">
                                            <button className="btn btn-success" onClick={() => saveEdit(task.id)}>Save</button>
                                            <button className="btn btn-secondary" onClick={() => setEditingId(null)}>Cancel</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="view-mode">
                                        <div className="task-content">
                                            <h3 className="task-title" onClick={() => toggleStatus(task)}>
                                                <span className="checkbox"></span>
                                                {task.title}
                                            </h3>
                                            {task.description && <p className="task-desc">{task.description}</p>}
                                            <span className={`task-status ${task.status === 'Completed' ? 'status-completed' : 'status-todo'}`}>
                                                {task.status}
                                            </span>
                                        </div>
                                        <div className="action-buttons">
                                            <button className="btn btn-edit" onClick={() => startEditing(task)}>Edit</button>
                                            <button className="btn btn-delete" onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default TaskList