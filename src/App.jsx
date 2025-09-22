import { useState } from 'react'
import './App.css'

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learning React', isCompleted: true },
    { id: 2, text: 'Create a To-Do List project', isCompleted: false },
    { id: 3, text: 'Style project', isCompleted: false },
  ])

  const [inputValue, setInputValue] = useState('')

  const handleAddTask = (e) => {
    e.preventDefault()
    if (inputValue.trim() === '') return

    const newTask = {
      id: Date.now(),
      text: inputValue,
      isCompleted: false,
    }

    setTasks([...tasks, newTask])
    setInputValue('')
  }

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const handleToggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    )
  }

  return (
    <div className="todo-list-container">
      <h1>Lista de Tarefas</h1>
      <form onSubmit={handleAddTask} className="todo-form">
        <input
          type="text"
          placeholder="Adicione uma nova tarefa..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.isCompleted ? 'completed' : ''}`}
          >
            <span onClick={() => handleToggleTaskCompletion(task.id)}>
              {task.text}
            </span>
            <button onClick={() => handleRemoveTask(task.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
