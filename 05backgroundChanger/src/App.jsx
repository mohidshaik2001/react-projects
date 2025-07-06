import Buttons from './components/Buttons'


import './App.css'
import { useState } from 'react'

function App() {
  const [color,setColor] = useState("olive")
  
  

  return (
    <>
    <div className='h-screen w-full duration-200'
        style={{backgroundColor:color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

          <button 
          onClick={()=>setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"
          }} >
            Red
          </button>
           <button 
          onClick={()=>setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"
          }} >
            blue
          </button>
           <button 
          onClick={()=>setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"
          }} >
            green
          </button>
           <button 
          onClick={()=>setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"
          }} >
            orange
          </button>
           <button 
          onClick={()=>setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"
          }} >
            yellow
          </button>
           <button 
          onClick={()=>setColor("gray")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"gray"
          }} >
            gray
          </button>
           <button 
          onClick={()=>setColor("brown")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"brown"
          }} >
            brown
          </button>
           <button 
          onClick={()=>setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"
          }} >
            pink
          </button>
        </div>

      </div>


    </div>
    </>

  )
}

export default App
