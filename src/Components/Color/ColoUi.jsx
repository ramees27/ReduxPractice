// src/components/Theme.js
// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// const Theme = () => {
//   const color = useSelector((state) => state.theme.color);
//   const dispatch = useDispatch();
//   const [newColor, setNewColor] = useState('');

//   const changeColor = () => {
//     dispatch({ type: 'CHANGE_COLOR', payload: newColor });
//   };

//   return (
//     <div>
//       <h1 style={{ color }}>Current Theme Color: {color}</h1>
//       <input
//         type="text"
//         placeholder="Enter a color"
//         value={newColor}
//         onChange={(e) => setNewColor(e.target.value)}
//       />
//       <button onClick={changeColor}>Change Color</button>
//     </div>
//   );
// };

// export default Theme;

// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { blue, red, yellow } from './ColorSlice';

// const ColoUi = () => {
//       const dispatch=useDispatch();
//       const colorState=useSelector((state)=>state.changeColor.color)
//       console.log(colorState)

//   return (
//     <div><div style={{
//         width:"100px",
//         height:"100px",
//         backgroundColor:colorState,

//     }}><p style={{color:"white"}}>The current color is: {colorState}</p>
//     </div>
       
//     <button onClick={()=>dispatch(blue())}>Blue</button>
//     <button onClick={()=>dispatch(yellow())}>Yellow</button>
//     <button onClick={()=>dispatch(red())}>Red</button>
//     </div>
//   )
// }

// export default ColoUi


// change color with one button


import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colorChange } from './ColorSlice';


const ColoUi = () => {
      const dispatch=useDispatch();
      const colorState=useSelector((state)=>state.newClr.color)
      console.log(colorState)

  return (
    <div><div style={{
        width:"100px",
        height:"100px",
        backgroundColor:colorState,

    }}>
    </div>
       <button onClick={()=>dispatch( colorChange())}>Change color</button>
    
    </div>
  )
}

export default ColoUi