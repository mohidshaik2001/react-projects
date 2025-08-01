import { useState } from 'react'
import { useTodo,TodoContext,TodoProvider } from './context/TodoContext'

import './App.css'
import { useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos,setTodos] = useState([])

  const addTodo = (todo)=>{

    setTodos((prevtodos)=>[...prevtodos,{id:Date.now(),...todo}])

  }
  const updateTodo = (id,todo)=>{
    setTodos((prevtodos)=>prevtodos.map((prevtodo)=> prevtodo.id===id ?todo:prevtodo))
  }
  const deleteTodo = (id)=>{

    setTodos((prevtodos)=>prevtodos.filter((prevtodo)=> prevtodo.id!=id))
  }
  const toggleTodo = (id)=>{

    setTodos((prevtodos)=>prevtodos.map((prevtodo)=>{
      return  prevtodo.id===id ? {...prevtodo,completed:!prevtodo.completed} :prevtodo
    }))
  }



  useEffect(() => {
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length){
      setTodos(todos)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  


  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItem  todo={todo}/>

                          </div>
                        ))}
                    </div>
                </div>
            </div>

      </TodoProvider>
    
      
       
  )
}

export default App
