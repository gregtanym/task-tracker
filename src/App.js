import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()
      console.log('effect called!')
      setTasks(data)
    }

    fetchTasks()
  }, [])
    
  const onClickButton = () => {
    return(
      setShowAdd(!showAdd)
    )
  }

  // Add Task
  const onAdd = async (task) => {

    const res = await fetch('http://localhost:5000/tasks', {
      method:'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(task)})
      const data = await res.json()

    setTasks([...tasks,data])
    

  }

  // Delete Task
  const onDelete = async (id) => {
    
    await fetch(`http://localhost:5000/tasks/${id}`, {
    method:'DELETE'})

    setTasks(tasks.filter( task => task.id !== id ))
  }

  // Toggle Reminder
  const onToggle = async (id) => {

    const taskToToggle = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await taskToToggle.json()

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method:'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({...data, reminder: !data.reminder})})

    return(
      // when there is an onject and you want to change one of the values you have to spread over the object 
      setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task ))
    )
  }

 
    // Click Button
  // console.log function
  // const conlogFunction = () => {
  //   console.log(showAdd)
  // }


  return(
    <div className="container">
      <Header title='Task Tracker App' onClickButton={onClickButton} showAdd={showAdd}/>
      <AddTask onAdd={onAdd} showAdd={showAdd}/>
      <Tasks tasks={tasks} onDelete={onDelete} onToggle = {onToggle}/>
    </div>
  )
}

export default App;
