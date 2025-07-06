import React from 'react'

function Buttons({color}) {
    
    const changeBackground = (color) => {



    }
    let bg=`bg-${color}-100`;
  return (  
    <>
    <button className="bg-blue-600  rounded-xl p-1 w-15"   onClick={changeBackground(color)}>
        {color}

    </button>
    </>
  )     
}

export default Buttons  