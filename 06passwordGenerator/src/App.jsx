import { useState, useCallback,useEffect ,useRef} from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*(){}[]<>~?/";
    for (let i=1 ;i<=length;i++){
      let char =Math.floor(Math.random()*str.length+1)
      pass +=str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copytoClipBoard = useCallback(()=>{
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0,5);
      
      window.navigator.clipboard.writeText(password)
  },[password])
  
  useEffect(()=>{

    passwordGenerator()

  },[length,numberAllowed,characterAllowed,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-screen mx-auto shadow-md rounded-lg bg-gray-500 px-4 py-3 my-8 text-orange-500 ">
      <h1 className="text-4xl text-white text-center">Password Generator</h1>
      <div className="flex text-2xl shadow rounded-lg overflow-hidden mb-4 text-gray-100">
        <input 
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
        readOnly
        ref={passwordRef} 
         />
        <button 
        onClick={copytoClipBoard}
        className="outline-none bg-blue-700 text-white px-3 py-0.5 hover:bg-blue-400 hover:rounded-2xl">
          Copy
        </button>
      </div>
      <div className="flex text-xl gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer" 
          onChange={(e)=>setLength(e.target.value)}
           />
           <label>Length:{length}</label>

        </div>
        <div className="flex items-center gap-x-1" >
          <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() =>{
              setNumberAllowed((prev) => !prev);
            }}
          />

          <lable>
            Numbers
          </lable>

        </div>
        <div className="flex items-center gap-x-1" >
          <input 
            type="checkbox"
            defaultChecked={characterAllowed}
            id="charInput"
            onChange={() =>{
              setCharAllowed((prev) => !prev);
            }}
          />

          <lable>
            Characters
          </lable>

        </div>

      </div>

      </div>
    </>
  );
}

export default App;
